<?php

define('VIEW_PATH', dirname(__DIR__) . '/src/templates/');

$pages = [
  'login',
  'register',
  'todo'
];

$page = $_GET['page'];

if (empty($page) || !isset($page) || !in_array($page, $pages)) {
  return require VIEW_PATH . "login.php";
}

return require VIEW_PATH . $page . ".php";
