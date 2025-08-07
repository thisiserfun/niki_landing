#!/bin/bash

# Full deployment script for nikimahdian.mokhtal.xyz

DOMAIN="nikimahdian.mokhtal.xyz"
EMAIL="Niki.mahdian@gmail.com"

echo "====================================="
echo "Deploying Niki Mahdian Portfolio"
echo "Domain: $DOMAIN"
echo "====================================="

# Check if Docker is running
if ! docker info > /dev/null 2>&1; then
    echo "Docker is not running. Please start Docker and try again."
    exit 1
fi

# Create required directories
echo "Creating required directories..."
mkdir -p ./certbot/conf
mkdir -p ./certbot/www
mkdir -p ./nginx/ssl
mkdir -p ./nginx/html

# Check if this is first deployment (no certificates)
if [ ! -d "./certbot/conf/live/$DOMAIN" ]; then
    echo "First deployment detected. Setting up SSL certificates..."
    
    # Use temporary nginx config for initial cert generation
    if [ -f "./nginx/conf.d/default.conf" ]; then
        mv ./nginx/conf.d/default.conf ./nginx/conf.d/default.conf.production
    fi
    if [ -f "./nginx/conf.d/default-init.conf" ]; then
        cp ./nginx/conf.d/default-init.conf ./nginx/conf.d/default.conf
    fi
    
    # Start nginx for certificate challenge
    echo "Starting nginx for certificate validation..."
    docker-compose up -d nginx-proxy
    sleep 5
    
    # Get certificate
    echo "Requesting SSL certificate from Let's Encrypt..."
    docker run --rm \
        -v $(pwd)/certbot/conf:/etc/letsencrypt \
        -v $(pwd)/certbot/www:/var/www/certbot \
        certbot/certbot certonly \
        --webroot \
        --webroot-path=/var/www/certbot \
        --email $EMAIL \
        --agree-tos \
        --no-eff-email \
        --force-renewal \
        -d $DOMAIN
    
    if [ $? -eq 0 ]; then
        echo "Certificate obtained successfully!"
        
        # Switch to production nginx config
        docker-compose down
        if [ -f "./nginx/conf.d/default.conf.production" ]; then
            mv ./nginx/conf.d/default.conf.production ./nginx/conf.d/default.conf
        fi
    else
        echo "Failed to obtain certificate. Please check:"
        echo "1. Domain $DOMAIN points to this server"
        echo "2. Port 80 is accessible from internet"
        echo "3. No firewall blocking Let's Encrypt servers"
        exit 1
    fi
fi

# Build and deploy with Docker Compose
echo "Building and deploying application..."
docker-compose down
docker-compose up -d --build

# Check deployment status
echo "Checking deployment status..."
sleep 5

if docker-compose ps | grep -q "Up"; then
    echo "====================================="
    echo "Deployment successful!"
    echo "Site is available at:"
    echo "  HTTP:  http://$DOMAIN"
    echo "  HTTPS: https://$DOMAIN"
    echo "====================================="
    echo ""
    echo "Container status:"
    docker-compose ps
else
    echo "Deployment failed. Check logs with:"
    echo "  docker-compose logs"
    exit 1
fi