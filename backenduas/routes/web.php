<?php

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ProductController;
use Illuminate\Support\Facades\Hash;


Route::get('/user', function (Request $request) {
    return $request->user();
})->middleware('auth:sanctum');

Route::get('/api/endpoint', [ProductController::class, 'csrf']);
Route::get('/api/products', [ProductController::class, 'index']);
Route::post('/products/create', [ProductController::class, 'store']);