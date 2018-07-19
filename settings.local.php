<?php

/**
 * Enable local development services.
 */
$settings['container_yamls'][] = DRUPAL_ROOT . '/sites/development.services.yml';

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
$settings['install_profile'] = 'standard';
$config_directories['sync'] = 'sites/leopitt.co.uk/files/config_2NKT5vPjA5_Nl_kpledicwKiVOLjkTJa_VRZj-69ViKNzIF6X6CltQk5rApBPB1ZNkEytlgt8w/sync';

$settings['trusted_host_patterns'] = array(
  '^docksal$',
  '^.+\.leopitt\.co\.uk$',
  '^leopitt\.co\.uk$',
  '^.+\.docksal$',
);
