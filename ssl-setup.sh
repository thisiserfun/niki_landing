#!/bin/bash

# SSL Setup Script for Niki Mahdian Portfolio
echo "Setting up SSL certificate for nikimahdian.mokhtal.xyz..."

# Create necessary directories
mkdir -p certbot/conf certbot/www nginx/ssl

# First, start with HTTP-only configuration to get SSL certificate
echo "Starting with HTTP-only configuration..."

# Create temporary nginx config for certificate challenge
cat > nginx/conf.d/temp.conf << 'EOF'
server {
    listen 80;
    server_name nikimahdian.mokhtal.xyz;
    
    location /.well-known/acme-challenge/ {
        root /var/www/certbot;
    }
    
    location / {
        proxy_pass http://portfolio:80;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
EOF

# Replace the SSL config temporarily
mv nginx/conf.d/default.conf nginx/conf.d/default.conf.ssl
mv nginx/conf.d/temp.conf nginx/conf.d/default.conf

echo "Starting services..."
docker-compose up -d --build

echo "Waiting for services to be ready..."
sleep 30

echo "Obtaining SSL certificate..."
docker-compose run --rm certbot

# Restore SSL configuration
mv nginx/conf.d/default.conf nginx/conf.d/temp.conf
mv nginx/conf.d/default.conf.ssl nginx/conf.d/default.conf

echo "Restarting nginx with SSL configuration..."
docker-compose restart nginx-proxy

echo "Setting up automatic certificate renewal..."
# Add cron job for certificate renewal
(crontab -l 2>/dev/null; echo "0 12 * * * cd $(pwd) && docker-compose run --rm certbot renew --quiet && docker-compose restart nginx-proxy") | crontab -

echo "SSL setup completed!"
echo "Your site should now be available at https://nikimahdian.mokhtal.xyz"
echo ""
echo "To manage the services:"
echo "  Start: docker-compose up -d"
echo "  Stop: docker-compose down"
echo "  View logs: docker-compose logs -f"
echo "  Renew certificate: docker-compose run --rm certbot renew"