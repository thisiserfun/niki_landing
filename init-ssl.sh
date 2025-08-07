#!/bin/bash

# Script to initialize SSL certificates for nikimahdian.mokhtal.xyz

DOMAIN="nikimahdian.mokhtal.xyz"
EMAIL="Niki.mahdian@gmail.com"

echo "Starting SSL certificate initialization for $DOMAIN..."

# Create required directories
mkdir -p ./certbot/conf
mkdir -p ./certbot/www
mkdir -p ./nginx/ssl

# Check if certificates already exist
if [ -d "./certbot/conf/live/$DOMAIN" ]; then
    echo "Certificates for $DOMAIN already exist."
    echo "To renew, run: docker-compose run certbot renew"
    exit 0
fi

# Start nginx with temporary configuration for Let's Encrypt challenge
echo "Starting nginx for certificate generation..."
docker-compose up -d nginx-proxy

# Wait for nginx to be ready
echo "Waiting for nginx to be ready..."
sleep 5

# Request certificate
echo "Requesting certificate from Let's Encrypt..."
docker-compose run --rm certbot certonly \
    --webroot \
    --webroot-path=/var/www/certbot \
    --email $EMAIL \
    --agree-tos \
    --no-eff-email \
    --force-renewal \
    -d $DOMAIN

if [ $? -eq 0 ]; then
    echo "Certificate obtained successfully!"
    echo "Restarting services with SSL enabled..."
    docker-compose down
    docker-compose up -d --build
    echo "SSL setup complete! Site should be available at https://$DOMAIN"
else
    echo "Failed to obtain certificate. Please check your domain configuration."
    exit 1
fi