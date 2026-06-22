#!/bin/bash

set -e

echo "================================"
echo "Deployment Script for run.claw.cloud"
echo "================================"
echo ""

read -p "Enter your devbox SSH user (e.g., root or ubuntu): " SSH_USER
read -p "Enter your devbox IP address or hostname: " SERVER_HOST
read -p "Enter your domain name (e.g., example.com): " DOMAIN_NAME

echo ""
echo "Configuration:"
echo "  SSH User: $SSH_USER"
echo "  Server: $SERVER_HOST"
echo "  Domain: $DOMAIN_NAME"
echo ""
read -p "Is this correct? (y/n): " CONFIRM

if [ "$CONFIRM" != "y" ]; then
    echo "Deployment cancelled."
    exit 1
fi

echo ""
echo "Step 1: Building production version..."
npm run build

echo ""
echo "Step 2: Creating deployment package..."
tar -czf dist.tar.gz dist/

echo ""
echo "Step 3: Uploading files to server..."
scp dist.tar.gz $SSH_USER@$SERVER_HOST:/tmp/

echo ""
echo "Step 4: Uploading .env file..."
scp .env $SSH_USER@$SERVER_HOST:/tmp/app.env

echo ""
echo "Step 5: Setting up application on server..."
ssh $SSH_USER@$SERVER_HOST << 'ENDSSH'
set -e

echo "Creating application directory..."
sudo mkdir -p /var/www/html
cd /var/www/html

echo "Backing up existing files (if any)..."
if [ -d "current" ]; then
    sudo mv current backup-$(date +%Y%m%d-%H%M%S) 2>/dev/null || true
fi

echo "Extracting new files..."
sudo tar -xzf /tmp/dist.tar.gz
sudo mv dist current

echo "Setting up environment variables..."
sudo mkdir -p /var/www/config
sudo mv /tmp/app.env /var/www/config/.env

echo "Setting permissions..."
sudo chown -R www-data:www-data /var/www/html/current
sudo chmod -R 755 /var/www/html/current

echo "Cleaning up..."
rm /tmp/dist.tar.gz

echo "Deployment complete!"
ENDSSH

echo ""
echo "Step 6: Cleaning up local files..."
rm dist.tar.gz

echo ""
echo "================================"
echo "Deployment Complete!"
echo "================================"
echo ""
echo "Next steps:"
echo "1. Make sure Nginx is configured (see nginx.conf file)"
echo "2. Set up SSL certificate with: sudo certbot --nginx -d $DOMAIN_NAME -d www.$DOMAIN_NAME"
echo "3. Visit https://$DOMAIN_NAME to verify deployment"
echo ""
