# Deployment Guide for Niki Mahdian Portfolio

## Prerequisites

1. **Server Requirements:**
   - Linux server (Ubuntu/Debian recommended)
   - Docker and Docker Compose installed
   - Domain pointing to server IP: `nikimahdian.mokhtal.xyz`
   - Ports 80 and 443 open in firewall

2. **Local Requirements:**
   - Git installed
   - SSH access to server

## Quick Deployment

### On your server:

```bash
# 1. Clone the repository
git clone [your-repo-url] niki-landing
cd niki-landing

# 2. Make scripts executable
chmod +x deploy.sh init-ssl.sh

# 3. Run deployment
./deploy.sh
```

## Manual Deployment Steps

### 1. Initial Setup (First Time Only)

```bash
# Create required directories
mkdir -p certbot/conf certbot/www nginx/ssl nginx/html

# Get SSL certificate (first time only)
docker run --rm \
    -v $(pwd)/certbot/conf:/etc/letsencrypt \
    -v $(pwd)/certbot/www:/var/www/certbot \
    -v $(pwd)/nginx/conf.d:/etc/nginx/conf.d \
    certbot/certbot certonly \
    --webroot \
    --webroot-path=/var/www/certbot \
    --email Niki.mahdian@gmail.com \
    --agree-tos \
    --no-eff-email \
    -d nikimahdian.mokhtal.xyz
```

### 2. Build and Deploy

```bash
# Build and start all services
docker-compose up -d --build

# Check status
docker-compose ps

# View logs
docker-compose logs -f
```

## SSL Certificate Management

### Auto-renewal
The Certbot container automatically renews certificates every 12 hours.

### Manual renewal
```bash
docker-compose run certbot renew
docker-compose exec nginx-proxy nginx -s reload
```

## Useful Commands

### View logs
```bash
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f portfolio
docker-compose logs -f nginx-proxy
docker-compose logs -f certbot
```

### Restart services
```bash
# All services
docker-compose restart

# Specific service
docker-compose restart portfolio
docker-compose restart nginx-proxy
```

### Update deployment
```bash
# Pull latest changes
git pull

# Rebuild and redeploy
docker-compose up -d --build
```

### Stop services
```bash
docker-compose down
```

### Remove everything (including volumes)
```bash
docker-compose down -v
```

## Troubleshooting

### Certificate issues
1. Check domain DNS: `nslookup nikimahdian.mokhtal.xyz`
2. Check port 80 is accessible: `curl http://nikimahdian.mokhtal.xyz`
3. Check Certbot logs: `docker-compose logs certbot`

### Nginx issues
1. Check configuration: `docker-compose exec nginx-proxy nginx -t`
2. Reload configuration: `docker-compose exec nginx-proxy nginx -s reload`

### Application issues
1. Check build logs: `docker-compose logs portfolio`
2. Rebuild container: `docker-compose up -d --build portfolio`

## Domain Configuration

Ensure your domain `nikimahdian.mokhtal.xyz` has an A record pointing to your server's IP address:

```
Type: A
Name: nikimahdian.mokhtal.xyz
Value: [Your Server IP]
TTL: 3600
```

## Security Notes

1. Keep Docker and system packages updated
2. Certificates auto-renew, but monitor expiration
3. Backup certificates regularly: `tar -czf certbot-backup.tar.gz certbot/conf`
4. Monitor logs for suspicious activity

## Support

For issues or questions, contact: Niki.mahdian@gmail.com