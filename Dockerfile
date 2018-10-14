FROM ubuntu

USER root
RUN apt update && apt install nginx -y

# Remove the default Nginx configuration file
RUN rm -v /etc/nginx/nginx.conf

# Copy a configuration file from the current directory
ADD nginx.conf /etc/nginx/

# Add local files to container directory
COPY . /usr/share/nginx/html/
COPY . /var/www/html/

# Append "daemon off;" to the beginning of the configuration
RUN echo "daemon off;" >> /etc/nginx/nginx.conf

EXPOSE 80

# Set the default command to execute
# when creating a new container
CMD service nginx start
