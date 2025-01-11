<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    public function store(Request $request)
    {
        // Validate the form data
        $request->validate([
            'IDProduk' => 'required|string|max:255',
            'Image_Path' => 'required|string|max:255',
            'Nama_Produk' => 'required|string|max:255',
            'Jumlah_Stok' => 'required|integer|max:100',
            'Harga' => 'required|integer|max:100',
        ]);

        Products::create([
            'IDAnggota' => $request->IDAnggota,
            'Nama_Anggota' => $request->Nama_Anggota,
            'Alamat' => $request->Alamat,
            'Jurusan' => $request->Jurusan,
            'IDDaftar' => $request->IDDaftar,
        ]);
}
}
