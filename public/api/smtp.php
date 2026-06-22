<?php
/**
 * Minimal, dependency-free SMTP client (AUTH LOGIN) for sending one message.
 *
 * Supports:
 *   - Implicit SSL (e.g. cPanel port 465, secure = 'ssl')
 *   - STARTTLS      (e.g. port 587, secure = 'tls')
 *
 * Returns ['ok' => bool, 'error' => string]. Never echoes anything — the caller
 * decides what (if anything) to show the user, so credentials/host details stay
 * out of the HTTP response.
 */

/**
 * MIME-encode a header value if it contains non-ASCII characters.
 */
function smtp_encode_header(string $value): string
{
    if (preg_match('/[^\x20-\x7E]/', $value)) {
        return '=?UTF-8?B?' . base64_encode($value) . '?=';
    }
    return $value;
}

/**
 * @param array $cfg  ['host','port','username','password','secure'=>'ssl'|'tls']
 * @param array $msg  ['fromEmail','fromName','toEmail','replyEmail','replyName','subject','body']
 * @return array      ['ok'=>bool, 'error'=>string]
 */
function smtp_send(array $cfg, array $msg): array
{
    $host    = (string)($cfg['host'] ?? '');
    $port    = (int)($cfg['port'] ?? 465);
    $user    = (string)($cfg['username'] ?? '');
    $pass    = (string)($cfg['password'] ?? '');
    $secure  = (string)($cfg['secure'] ?? ($port === 465 ? 'ssl' : 'tls'));
    $timeout = 20;

    if ($host === '' || $user === '' || $pass === '') {
        return ['ok' => false, 'error' => 'SMTP host/username/password not configured.'];
    }

    $transport = ($secure === 'ssl') ? "ssl://{$host}:{$port}" : "tcp://{$host}:{$port}";
    $context = stream_context_create([
        'ssl' => [
            'verify_peer'       => true,
            'verify_peer_name'  => true,
            'allow_self_signed' => false,
        ],
    ]);

    $errno = 0;
    $errstr = '';
    $conn = @stream_socket_client(
        $transport,
        $errno,
        $errstr,
        $timeout,
        STREAM_CLIENT_CONNECT,
        $context
    );
    if (!$conn) {
        return ['ok' => false, 'error' => "Connection to {$host}:{$port} failed: {$errstr} ({$errno})"];
    }
    stream_set_timeout($conn, $timeout);

    // Read a (possibly multi-line) SMTP reply.
    $read = static function () use ($conn): string {
        $data = '';
        while (($line = fgets($conn, 515)) !== false) {
            $data .= $line;
            // Final line has a space at position 3 ("250 ..."); "250-..." continues.
            if (strlen($line) < 4 || $line[3] === ' ') {
                break;
            }
        }
        return $data;
    };
    $code = static fn (string $reply): int => (int)substr($reply, 0, 3);
    $write = static function (string $cmd) use ($conn): void {
        fwrite($conn, $cmd . "\r\n");
    };

    // A tiny state machine. On any unexpected code we bail with the server text.
    $fail = static function (string $stage, string $reply) use ($conn): array {
        fclose($conn);
        return ['ok' => false, 'error' => "SMTP {$stage} failed: " . trim($reply)];
    };

    $ehlo = 'EHLO ' . (gethostname() ?: 'localhost');

    $reply = $read();
    if ($code($reply) !== 220) {
        return $fail('greeting', $reply);
    }

    $write($ehlo);
    $reply = $read();
    if ($code($reply) !== 250) {
        return $fail('EHLO', $reply);
    }

    if ($secure === 'tls') {
        $write('STARTTLS');
        $reply = $read();
        if ($code($reply) !== 220) {
            return $fail('STARTTLS', $reply);
        }
        if (!stream_socket_enable_crypto($conn, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
            fclose($conn);
            return ['ok' => false, 'error' => 'STARTTLS negotiation failed.'];
        }
        $write($ehlo); // must re-EHLO after upgrading the connection
        $reply = $read();
        if ($code($reply) !== 250) {
            return $fail('EHLO (post-STARTTLS)', $reply);
        }
    }

    $write('AUTH LOGIN');
    $reply = $read();
    if ($code($reply) !== 334) {
        return $fail('AUTH', $reply);
    }
    $write(base64_encode($user));
    $reply = $read();
    if ($code($reply) !== 334) {
        return $fail('username', $reply);
    }
    $write(base64_encode($pass));
    $reply = $read();
    if ($code($reply) !== 235) {
        return $fail('authentication', $reply);
    }

    $write('MAIL FROM:<' . $msg['fromEmail'] . '>');
    $reply = $read();
    if ($code($reply) !== 250) {
        return $fail('MAIL FROM', $reply);
    }

    $write('RCPT TO:<' . $msg['toEmail'] . '>');
    $reply = $read();
    if ($code($reply) !== 250 && $code($reply) !== 251) {
        return $fail('RCPT TO', $reply);
    }

    $write('DATA');
    $reply = $read();
    if ($code($reply) !== 354) {
        return $fail('DATA', $reply);
    }

    // Build headers.
    $fromName  = smtp_encode_header((string)$msg['fromName']);
    $replyName = smtp_encode_header((string)$msg['replyName']);
    $subject   = smtp_encode_header((string)$msg['subject']);
    $domain    = substr(strrchr($msg['fromEmail'], '@') ?: '@localhost', 1);

    $headers = [
        'Date: ' . date('r'),
        'From: ' . $fromName . ' <' . $msg['fromEmail'] . '>',
        'To: <' . $msg['toEmail'] . '>',
        'Reply-To: ' . $replyName . ' <' . $msg['replyEmail'] . '>',
        'Subject: ' . $subject,
        'Message-ID: <' . bin2hex(random_bytes(12)) . '@' . $domain . '>',
        'MIME-Version: 1.0',
        'Content-Type: text/plain; charset=UTF-8',
        'Content-Transfer-Encoding: 8bit',
    ];

    // Normalise body to CRLF and dot-stuff lines beginning with a period.
    $body = preg_replace('/\r\n|\r|\n/', "\r\n", (string)$msg['body']);
    $body = preg_replace('/^\./m', '..', $body);

    $payload = implode("\r\n", $headers) . "\r\n\r\n" . $body . "\r\n.";
    $write($payload);
    $reply = $read();
    if ($code($reply) !== 250) {
        return $fail('message body', $reply);
    }

    $write('QUIT');
    fclose($conn);

    return ['ok' => true, 'error' => ''];
}
