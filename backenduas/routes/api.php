<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController; // Import your controller here

Route::get('/products', [ProductController::class, 'index']); // To fetch products
Route::post('/products', [ProductController::class, 'store']); // To create a new product
Route::middleware(['auth:api'])->post('/products', [ProductController::class, 'store']);
