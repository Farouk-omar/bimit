<?php
/**
 * BIM IT — contact form mail handler (SMTP).
 *
 * Receives the contact form submission (JSON) from the React app and sends it
 * via authenticated SMTP over SSL/TLS to your mail provider (cPanel). No
 * external service, no local mail agent.
 *
 * SETUP:
 *   1. Copy smtp-config.sample.php -> smtp-config.php (same folder) on the
 *      server and fill in your cPanel email host / username / password / port.
 *      (smtp-config.php is git-ignored and never built into dist/.)
 *   2. Make sure PHP can make outbound SSL connections (allow_url_fopen / the
 *      openssl extension — enabled by default on cPanel).
 *
 * --- WHO RECEIVES THE MESSAGE --------------------------------------------- */
const MAIL_TO   = 'm.ahmed@bimit.online';   // where submissions are delivered
const SITE_NAME = 'BIM IT Website';
/* The From address is the authenticated SMTP account (smtp-config.php username),
 * because providers like cPanel reject a From that isn't the logged-in mailbox.
 * ------------------------------------------------------------------------- */

header('Content-Type: application/json; charset=utf-8');

// Only POST is allowed.
if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
    http_response_code(405);
    header('Allow: POST');
    echo json_encode(['ok' => false, 'error' => 'Method not allowed.']);
    exit;
}

// The React form sends JSON; fall back to form-encoded just in case.
$raw  = file_get_contents('php://input');
$data = json_decode($raw, true);
if (!is_array($data)) {
    $data = $_POST;
}

// Honeypot: humans never fill "website". Bots do — silently accept and drop.
if (!empty($data['website'])) {
    echo json_encode(['ok' => true]);
    exit;
}

$name    = trim((string)($data['name']    ?? ''));
$email   = trim((string)($data['email']   ?? ''));
$phone   = trim((string)($data['phone']   ?? ''));
$subject = trim((string)($data['subject'] ?? ''));
$message = trim((string)($data['message'] ?? ''));

// Validate required fields.
$invalid = [];
if ($name === '')    { $invalid[] = 'name'; }
if ($message === '') { $invalid[] = 'message'; }
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) { $invalid[] = 'email'; }

if ($invalid) {
    http_response_code(422);
    echo json_encode([
        'ok'     => false,
        'error'  => 'Please check the highlighted fields and try again.',
        'fields' => $invalid,
    ]);
    exit;
}

// Header-injection guard: no CR/LF may reach the mail headers.
$noBreaks = static function (string $v): string {
    return preg_replace('/[\r\n]+/', ' ', $v);
};

$safeName    = $noBreaks($name);
$safeEmail   = $noBreaks($email);
$safeSubject = $subject !== '' ? $noBreaks($subject) : 'New contact form message';

$body  = "New message from the BIM IT website contact form\n";
$body .= str_repeat('-', 48) . "\n\n";
$body .= "Name:    {$safeName}\n";
$body .= "Email:   {$safeEmail}\n";
$body .= 'Phone:   ' . ($phone !== '' ? $noBreaks($phone) : '(not provided)') . "\n";
$body .= 'Subject: ' . ($subject !== '' ? $safeSubject : '(none)') . "\n\n";
$body .= "Message:\n{$message}\n";

// Load SMTP credentials (created from smtp-config.sample.php on the server).
$configPath = __DIR__ . '/smtp-config.php';
if (!is_file($configPath)) {
    http_response_code(500);
    error_log('contact.php: smtp-config.php is missing — copy smtp-config.sample.php and fill it in.');
    echo json_encode([
        'ok'    => false,
        'error' => 'Email is not configured on the server yet. Please email us directly at ' . MAIL_TO . '.',
    ]);
    exit;
}

$smtp = require $configPath;
require __DIR__ . '/smtp.php';

$result = smtp_send($smtp, [
    'fromEmail'  => $smtp['username'],   // authenticated mailbox = From
    'fromName'   => SITE_NAME,
    'toEmail'    => MAIL_TO,
    'replyEmail' => $safeEmail,          // replies go to the visitor
    'replyName'  => $safeName,
    'subject'    => '[BIM IT] ' . $safeSubject,
    'body'       => $body,
]);

if (!$result['ok']) {
    // Log the real reason server-side; keep the public message generic.
    http_response_code(500);
    error_log('contact.php SMTP error: ' . $result['error']);
    echo json_encode([
        'ok'    => false,
        'error' => 'Sorry, the message could not be sent right now. Please email us directly at ' . MAIL_TO . '.',
    ]);
    exit;
}

echo json_encode(['ok' => true]);
