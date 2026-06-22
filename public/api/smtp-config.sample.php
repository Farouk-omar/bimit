<?php
/**
 * SMTP credentials for the contact form.
 *
 * SETUP (do this on the server, NOT in the repo):
 *   1. Copy this file to "smtp-config.php" in the same folder.
 *   2. Fill in your cPanel email account details below.
 *
 * smtp-config.php is git-ignored and is never committed or built into the
 * bundle, so your password stays off GitHub and out of dist/.
 *
 * Where to find these values: cPanel > Email Accounts > (your account) >
 * "Connect Devices" shows the Outgoing Server (SSL) host and port.
 */
return [
    // Outgoing mail server. On cPanel this is usually mail.<yourdomain> or the
    // server hostname listed under "Connect Devices" (Secure SSL/TLS Settings).
    'host'     => 'mail.bimit.online',

    // Full email address — used BOTH to authenticate and as the From address.
    // cPanel requires the From address to match the authenticated mailbox.
    'username' => 'client@bimit.online',
    'password' => 'YOUR_EMAIL_PASSWORD_HERE',

    // cPanel SSL (implicit TLS) = port 465 with 'ssl'.
    // STARTTLS alternative      = port 587 with 'tls'.
    'port'     => 465,
    'secure'   => 'ssl',
];
