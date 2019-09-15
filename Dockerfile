FROM wordpress:php7.3-apache

LABEL maintainer="Melvin Versluijs <https://github.com/melvinversluijs>"
LABEL description="Wordpress container with the React wp theme installed and built by default."

# Update apt and install necessary packages.
RUN curl -sL https://deb.nodesource.com/setup_12.x | bash - && \
  curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
  echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && \
  apt-get update -y && \
  apt-get install -y  nodejs yarn

# Expose HTTP and HTTPS ports.
EXPOSE 80
EXPOSE 443

# Add theme to themes folder.
COPY . /usr/src/wordpress/wp-content/themes/React-wp-theme/
WORKDIR /usr/src/wordpress/wp-content/themes/React-wp-theme

# Build resources.
RUN yarn install && yarn run build

# Set permission.
RUN chown -R www-data:www-data .

WORKDIR /var/www/html