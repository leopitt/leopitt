<?php

/**
 * @file
 * Default configuration file for Docksal development.
 */

/**
 * Enable local development services.
 */

/* Load development services. */
$settings['container_yamls'][] = DRUPAL_ROOT . '/sites/development.services.yml';

/* Local db settings. */
$databases['default']['default'] = array (
  'database' => 'default',
  'username' => 'user',
  'password' => 'user',
  'prefix' => '',
  'host' => 'db',
  'port' => '3306',
  'namespace' => 'Drupal\\Core\\Database\\Driver\\mysql',
  'driver' => 'mysql',
);

/* Profile. */
$settings['install_profile'] = 'standard';

/* Config. */
$config_directories['sync'] = 'sites/leopitt.co.uk/config/sync';

/* Trusted host. */
$settings['trusted_host_patterns'] = array(
  '^docksal$',
  '^.+\.leopitt\.co\.uk$',
  '^leopitt\.co\.uk$',
  '^.+\.docksal$',
);

/* Caching and performance. */
$config['system.performance']['css']['preprocess'] = FALSE;
$config['system.performance']['js']['preprocess'] = FALSE;
$settings['cache']['bins']['render'] = 'cache.backend.null';
$settings['cache']['bins']['dynamic_page_cache'] = 'cache.backend.null';
