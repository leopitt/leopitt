#!/bin/bash

## Initialise site on heart server.
##
## Usage: sudo bash init-heart.sh

####
# Initialise various variables.

# Get path of current directory.
DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"

# Get path of project root
PROJECT_ROOT="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && cd .. && pwd )"

# Get the name of the current repo.
REPO_NAME="$(git config --get remote.origin.url)"
REPO_NAME="$(basename $REPO_NAME)"
REPO_NAME="${REPO_NAME%.*}"

# Get the name of the current git branch.
BRANCH_NAME="$(git symbolic-ref HEAD 2>/dev/null)" ||
BRANCH_NAME="(unnamed branch)"     # detached HEAD
BRANCH_NAME=${BRANCH_NAME##refs/heads/}

# Create a project name by concatenating the repo name and the branch name.
PROJECT_NAME="${REPO_NAME}_${BRANCH_NAME}"

# Create a string to use as a subdomain from the computed project name.
SUBDOMAIN="${PROJECT_NAME//_/-}"

####
# Initialise the virtual host.

echo "<VirtualHost *:80>
  ServerAdmin webmaster@localhost
  ServerName ${SUBDOMAIN}.function-designing.co.uk
  DocumentRoot ${PROJECT_ROOT}/htdocs

  <Directory ${PROJECT_ROOT}/htdocs>
    Options Indexes FollowSymLinks MultiViews
    AllowOverride All
    Require all granted
  </Directory>

  ScriptAlias /cgi-bin/ /usr/lib/cgi-bin/
  <Directory \"/usr/lib/cgi-bin\">
    AllowOverride None
    Options +ExecCGI -MultiViews +SymLinksIfOwnerMatch
    Require all granted
  </Directory>

  ErrorLog \${APACHE_LOG_DIR}/error.log

  # Possible values include: debug, info, notice, warn, error, crit,
  # alert, emerg.
  LogLevel warn

  CustomLog \${APACHE_LOG_DIR}/access.log combined
</VirtualHost>
" > /etc/apache2/sites-available/${PROJECT_NAME}.conf

echo "Created virtual host file /etc/apache2/sites-available/${PROJECT_NAME}.conf"
echo "URL: ${SUBDOMAIN}.function-designing.co.uk"

a2ensite ${PROJECT_NAME}.conf
service apache2 reload

echo "Enabled ${PROJECT_NAME}.conf and reloaded apache"
