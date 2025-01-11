<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    // This method fetches all products (GET /api/products)
    public function index()
    {
        $products = Products::all(); // Fetch all products from the database
        return response()->json($products); // Return as JSON
    }

    // This method stores a new product (POST /api/products)
    public function store(Request $request)
    {
        // Validate the form data
        $request->validate([
            'IDProduk' => 'required|string|max:255',
            'Image_Path' => 'required|string|max:255',
            'Nama_Produk' => 'required|string|max:255',
            'Jumlah_Stok' => 'required|integer|max:100',
            'Harga' => 'required|integer|max:100',
            'Category' => 'required|string|max:255',
        ]);

        // Create the product in the database
        Products::create([
            'IDProduk' => $request->IDProduk,
            'Image_Path' => $request->Image_Path,
            'Nama_Produk' => $request->Nama_Produk,
            'Jumlah_Stok' => $request->Jumlah_Stok,
            'Harga' => $request->Harga,
            'Category' => $request->Category,
        ]);

        // Return a response indicating success
        return response()->json(['message' => 'Product created successfully'], 201);
    }
}
