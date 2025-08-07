#!/bin/bash

echo "====================================="
echo "Debugging Nginx 403 Error"
echo "====================================="

# Check container status
echo -e "\n1. Container Status:"
docker compose ps

# Check if portfolio files are built correctly
echo -e "\n2. Checking portfolio container files:"
docker compose exec portfolio ls -la /usr/share/nginx/html/

# Check nginx configuration
echo -e "\n3. Testing nginx configuration:"
docker compose exec nginx-proxy nginx -t

# Check nginx error logs
echo -e "\n4. Nginx Error Logs (last 20 lines):"
docker compose logs --tail=20 nginx-proxy

# Check portfolio logs
echo -e "\n5. Portfolio Container Logs (last 20 lines):"
docker compose logs --tail=20 portfolio

# Test internal connectivity
echo -e "\n6. Testing internal connectivity:"
docker compose exec nginx-proxy wget -O- http://portfolio:80 2>&1 | head -20

# Check current nginx config being used
echo -e "\n7. Active nginx configuration:"
docker compose exec nginx-proxy cat /etc/nginx/conf.d/default.conf

echo -e "\n====================================="
echo "Debug complete. Check output above for issues."
echo "====================================="