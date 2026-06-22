// Contact form / email delivery configuration.
//
// The form is handled server-side by PHP (no external provider). It POSTs the
// message as JSON to the PHP endpoint below, which sends the email over
// authenticated SMTP (SSL) to your mail provider (cPanel). See
// public/api/contact.php for the handler and public/api/smtp-config.sample.php
// for the credentials you set up on the server.
//
// `endpoint` is a relative path, so it works on whatever domain the site is
// served from. During `vite dev` there is no PHP runtime, so submissions only
// work against the deployed server (or any local PHP host).
export const contactConfig = {
  endpoint: '/api/contact.php',

  // Shown in the UI (mailto link, contact cards). The actual send recipient is
  // configured server-side in public/api/contact.php (MAIL_TO / MAIL_FROM).
  fromEmail: 'client@bimit.online',
  toEmail: 'm.ahmed@bimit.online',
} as const;
