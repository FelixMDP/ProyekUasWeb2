<?php
function route($uri) {
    switch ($uri) {
        case '':
        case 'home':
            require 'pages/home.php';
            break;
        case 'products':
            require 'pages/products.php';
            break;
        case 'cart':
            require 'pages/cart.php';
            break;
        default:
            require 'pages/404.php';
            break;
    }
}
?>
