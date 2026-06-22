# Deployment Guide — cPanel Hosting

This site is a static **React + Vite** SPA with a small **PHP** contact-form
backend. You build it locally and upload the result to cPanel. DNS and email are
managed inside cPanel.

## Prerequisites

- A cPanel hosting account with `bimit.online` added (as the primary or an addon domain).
- Node.js installed locally (to build the site).
- Your domain's nameservers pointing at your host, so DNS is managed in cPanel.

---

## Step 1: DNS (cPanel Zone Editor)

Because your nameservers point at the host, all records live in cPanel, not at
the registrar.

1. cPanel → **Zone Editor** → **Manage** for `bimit.online`.
2. Confirm these exist (cPanel usually creates them automatically):

   | Type | Name | Value |
   |------|------|-------|
   | A | `bimit.online` | your hosting IP |
   | CNAME or A | `www` | `bimit.online` / your hosting IP |
   | MX | `bimit.online` | `mail.bimit.online` (priority 0) |

3. cPanel → **Email Deliverability**. `bimit.online` should show **SPF** and
   **DKIM** as **Valid**. If not, click **Repair** — cPanel writes the records
   for you. This is what keeps the contact-form mail out of spam.

> If you point a subdomain or use external mail, adjust the A/MX records
> accordingly — but for standard cPanel mail the defaults above are correct.

---

## Step 2: Build locally

From the project directory:

```bash
npm install
npm run build
```

This produces a `dist/` folder containing the whole site (HTML, hashed JS/CSS,
the `api/` PHP handlers, and the `.htaccess` files).

---

## Step 3: Upload to cPanel

You're uploading the **contents of `dist/`** into your domain's document root
(`public_html` for the primary domain).

**File Manager (simplest):**
1. Zip the *contents* of `dist/` (not the folder itself).
2. cPanel → **File Manager** → open `public_html`.
3. Upload the zip, then **Extract** it there.
4. Enable **Settings → Show Hidden Files (dotfiles)** so you can see `.htaccess`
   — it must be present for routing to work.

**FTP alternative:** upload everything inside `dist/` into `public_html`,
including hidden `.htaccess` files.

> **Routing depends on `.htaccess`.** The root `.htaccess` rewrites client-side
> routes (`/about`, `/services`, …) to `index.html`. Without it, refreshing any
> page except the home page returns a 404. If uploads strip dotfiles, copy
> `.htaccess` manually.

---

## Step 4: Configure the contact form (SMTP)

See **Contact Form (PHP + SMTP)** below. In short: in `public_html/api/`, copy
`smtp-config.sample.php` → `smtp-config.php` and fill in your cPanel email
credentials.

---

## Step 5: SSL (AutoSSL)

cPanel's **AutoSSL** issues a free Let's Encrypt certificate automatically,
usually within minutes of the domain resolving.

1. cPanel → **SSL/TLS Status**. Confirm `bimit.online` and `www` are covered
   (green lock). Use **Run AutoSSL** if it hasn't run yet.
2. Force HTTPS: cPanel → **Domains** → toggle **Force HTTPS Redirect** on.

---

## Step 6: Verify

1. Visit `https://bimit.online`.
2. Navigate to each page, then **refresh** on a sub-page (e.g. `/services`) — it
   should load, not 404. (That confirms `.htaccess` routing works.)
3. Submit the contact form and confirm the email arrives at `m.ahmed@bimit.online`.

---

## Contact Form (PHP + SMTP)

The contact form is handled server-side by PHP — no third-party service. The
browser POSTs the message as JSON to `/api/contact.php`, which sends it over
**authenticated SMTP (SSL/TLS)** to your cPanel mail server.

**Files** (under `public_html/api/`):

| File | Purpose | In git? |
|------|---------|---------|
| `contact.php` | Validates input, builds the email, calls the SMTP sender | yes |
| `smtp.php` | Dependency-free SMTP client (AUTH LOGIN over SSL/STARTTLS) | yes |
| `smtp-config.sample.php` | Template for your credentials | yes |
| `smtp-config.php` | **Your real credentials** — created on the server | **no (git-ignored)** |
| `.htaccess` | Blocks direct web access to `smtp-config.php` | yes |

### Set up credentials
1. In File Manager, open `public_html/api/` and copy `smtp-config.sample.php`
   to `smtp-config.php`.
2. Edit `smtp-config.php` with your cPanel email account
   (cPanel → **Email Accounts → Connect Devices** shows the SSL host & port):
   ```php
   'host'     => 'mail.bimit.online',     // Outgoing server (SSL/TLS)
   'username' => 'client@bimit.online',   // full address = login + From
   'password' => '••••••••',
   'port'     => 465,                      // 465 = 'ssl', or 587 = 'tls' (STARTTLS)
   'secure'   => 'ssl',
   ```
3. Recipient is set in `contact.php` (`MAIL_TO`, currently `m.ahmed@bimit.online`).
   The **From** is always the authenticated `username` — cPanel rejects a From
   that isn't the logged-in mailbox.

> **`smtp-config.php` is not in `dist/`** (git-ignored), so it isn't overwritten
> when you re-upload a new build — it stays put in `public_html/api/`.

> **SSL hostname:** if you get a certificate-verification error, use the exact
> host shown under **Connect Devices → Secure SSL/TLS Settings** (cPanel mail
> certs often match the server hostname rather than `mail.bimit.online`).

### Test it
```bash
curl -X POST https://bimit.online/api/contact.php \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"you@example.com","message":"Hello"}'
# Expect: {"ok":true}
```
The real SMTP error (auth/host/port) is written to the PHP error log only — the
browser sees a generic message. Find it in cPanel → **Metrics → Errors**, or the
`error_log` file in `public_html/api/`.

---

## Updating the site

1. `npm run build` locally.
2. Re-upload the contents of `dist/` into `public_html` (overwrite).
3. `smtp-config.php` is untouched (it's not in the build).

Browsers pick up new JS/CSS automatically because Vite content-hashes the
filenames and the HTML shell is sent with `Cache-Control: no-cache`.

---

## Troubleshooting

**Sub-pages 404 on refresh / direct link**
The root `.htaccess` is missing or dotfiles weren't uploaded. Confirm
`public_html/.htaccess` exists (File Manager → Show Hidden Files) and contains
the `RewriteRule ^ index.html` block.

**Contact form returns an error**
- `{"ok":false,...}` with a 500 → check `public_html/api/error_log`. Common
  causes: missing `smtp-config.php`, wrong password, wrong host/port, or an SSL
  hostname mismatch (use the Connect Devices host).
- Mail sends but lands in spam → recheck **Email Deliverability** (SPF/DKIM Valid).

**Mixed content / not secure**
Run AutoSSL (SSL/TLS Status) and enable Force HTTPS Redirect.

**Blank page after deploy**
Make sure you uploaded the *contents* of `dist/`, not the `dist` folder itself,
so `index.html` sits directly in `public_html`.

---

## VPS alternative (not needed for cPanel)

The repo also includes `server-setup.sh`, `deploy.sh`, and `nginx.conf` for
deploying to a bare Linux VPS with Nginx + PHP-FPM instead of cPanel. They're
unused on cPanel and can be ignored (or removed). The PHP contact form
(`api/*.php`) works identically on both.
