# Niki Mahdian Portfolio

A modern, responsive portfolio website built with Vue.js and deployed using Docker with NGINX and SSL.

## 🚀 Quick Start

### Prerequisites
- Docker and Docker Compose installed
- Domain `nikimahdian.mokhtal.xyz` pointing to your server IP

### Deployment

1. **Clone and navigate to the project:**
   ```bash
   cd niki-landing
   ```

2. **Start the application:**
   ```bash
   docker-compose up -d --build
   ```

3. **Setup SSL certificate (Linux/Mac):**
   ```bash
   chmod +x ssl-setup.sh
   ./ssl-setup.sh
   ```

4. **Manual SSL setup (if needed):**
   ```bash
   # Get SSL certificate
   docker-compose run --rm certbot
   
   # Restart nginx to apply SSL
   docker-compose restart nginx-proxy
   ```

### Services

- **Portfolio**: Vue.js application running on internal port 80
- **Nginx Proxy**: Reverse proxy with SSL termination on ports 80/443
- **Certbot**: SSL certificate management

### Management Commands

```bash
# Start services
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs -f

# Rebuild and restart
docker-compose up -d --build

# Renew SSL certificate
docker-compose run --rm certbot renew
docker-compose restart nginx-proxy
```

### SSL Certificate Renewal

The system includes automatic certificate renewal via cron job. Manual renewal:

```bash
docker-compose run --rm certbot renew
docker-compose restart nginx-proxy
```

## 🌐 Features

- Modern responsive design
- SSL/HTTPS enabled
- Automatic certificate renewal
- Security headers and optimizations
- Gzip compression
- Client-side routing support

## 📧 Contact

**Email:** Niki.mahdian@gmail.com
**Domain:** https://nikimahdian.mokhtal.xyz