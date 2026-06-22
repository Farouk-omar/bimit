#!/bin/bash

set -e

echo "================================"
echo "Server Setup Script for run.claw.cloud"
echo "================================"
echo ""
echo "This script will install and configure:"
echo "  - Nginx web server"
echo "  - Certbot for SSL certificates"
echo "  - Firewall rules"
echo ""
read -p "Enter your domain name (e.g., example.com): " DOMAIN_NAME
read -p "Enter your email for SSL certificate notifications: " SSL_EMAIL
echo ""
read -p "Continue with setup? (y/n): " CONFIRM

if [ "$CONFIRM" != "y" ]; then
    echo "Setup cancelled."
    exit 1
fi

echo ""
echo "Step 1: Updating system packages..."
sudo apt update && sudo apt upgrade -y

echo ""
echo "Step 2: Installing Nginx and PHP-FPM..."
# php-fpm runs the contact form handler; php-curl/openssl are bundled and let it
# open the authenticated SMTP (SSL) connection to your mail provider. No local
# mail agent (postfix) is needed because mail goes out via SMTP auth.
sudo apt install -y nginx php-fpm

echo ""
echo "Step 3: Installing Certbot..."
sudo apt install -y certbot python3-certbot-nginx

echo ""
echo "Step 4: Creating application directory..."
sudo mkdir -p /var/www/html/current
sudo mkdir -p /var/www/config

echo ""
echo "Step 5: Configuring firewall..."
sudo ufw allow 'Nginx Full'
sudo ufw allow OpenSSH
echo "y" | sudo ufw enable

echo ""
echo "Step 6: Downloading Nginx configuration..."
cat > /tmp/nginx-site.conf << 'EOF'
server {
    listen 80;
    listen [::]:80;

    server_name DOMAIN_PLACEHOLDER www.DOMAIN_PLACEHOLDER;

    root /var/www/html/current;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~ \.php$ {
        try_files $uri =404;
        include snippets/fastcgi-php.conf;
        fastcgi_pass unix:PHP_SOCK_PLACEHOLDER;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        access_log off;
    }

    gzip on;
    gzip_vary on;
    gzip_proxied any;
    gzip_comp_level 6;
    gzip_types text/plain text/css text/xml text/javascript application/json application/javascript application/xml+rss application/rss+xml font/truetype font/opentype application/vnd.ms-fontobject image/svg+xml;

    client_max_body_size 10M;

    error_page 404 /index.html;
}
EOF

# Detect the PHP-FPM socket created by the php-fpm package (version-specific).
PHP_SOCK=$(ls /run/php/php*-fpm.sock 2>/dev/null | head -n1)
if [ -z "$PHP_SOCK" ]; then
    echo "Warning: no PHP-FPM socket found under /run/php/. The contact form may not"
    echo "work until php-fpm is running. Check with: ls /run/php/php*-fpm.sock"
    PHP_SOCK="/run/php/php-fpm.sock"
fi

sed -e "s/DOMAIN_PLACEHOLDER/$DOMAIN_NAME/g" \
    -e "s|PHP_SOCK_PLACEHOLDER|$PHP_SOCK|g" \
    /tmp/nginx-site.conf > /tmp/nginx-final.conf

echo ""
echo "Step 7: Installing Nginx configuration..."
sudo cp /tmp/nginx-final.conf /etc/nginx/sites-available/$DOMAIN_NAME
sudo ln -sf /etc/nginx/sites-available/$DOMAIN_NAME /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

echo ""
echo "Step 8: Testing Nginx configuration..."
sudo nginx -t

echo ""
echo "Step 9: Restarting Nginx..."
sudo systemctl restart nginx
sudo systemctl enable nginx

echo ""
echo "Step 10: Setting up SSL certificate..."
echo "This will obtain an SSL certificate from Let's Encrypt..."
echo ""
sudo certbot --nginx -d $DOMAIN_NAME -d www.$DOMAIN_NAME --email $SSL_EMAIL --agree-tos --redirect --non-interactive

echo ""
echo "Step 11: Setting up automatic certificate renewal..."
sudo systemctl enable certbot.timer
sudo systemctl start certbot.timer

echo ""
echo "Step 12: Cleaning up..."
rm /tmp/nginx-site.conf /tmp/nginx-final.conf

echo ""
echo "================================"
echo "Server Setup Complete!"
echo "================================"
echo ""
echo "Your server is now ready to host your application."
echo ""
echo "Next steps:"
echo "1. From your local machine, run: ./deploy.sh"
echo "2. Verify your site at: https://$DOMAIN_NAME"
echo ""
echo "Server status:"
echo "  Nginx: $(systemctl is-active nginx)"
echo "  SSL Certificate: Installed and auto-renewal enabled"
echo "  Firewall: Enabled with HTTP/HTTPS access"
echo ""
