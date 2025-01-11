<?php
require 'router.php';

$uri = trim($_SERVER['REQUEST_URI'], '/');
route($uri);
?>
