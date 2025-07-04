# Use nginx to serve static files
FROM nginx:alpine

# Copy the static files to nginx html directory
COPY src/ /usr/share/nginx/html/

# Copy custom nginx config for better development experience
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]