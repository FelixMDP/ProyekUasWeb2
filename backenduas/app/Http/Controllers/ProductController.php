<?php

namespace App\Http\Controllers;

use App\Models\Products;
use Illuminate\Http\Response;
use Illuminate\Http\Request;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $products = Products::all();
        $data['message'] = true;
        $data['result'] = $products;
        return response()->json($data, Response::HTTP_OK);
    }

    public function csrf()
    {
        return csrf_token();
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validate = $request->validate(
            [
                'nama_produk' => 'required|string|max:255',
                'jumlah' => 'required|integer',
                'harga' => 'required|integer',
                'gambar' => 'required|string',
                'kategori' => 'required|string',
            ],
            [
                'nama_produk.required' => 'Nama Barang wajib diisi',
                'jumlah.required' => 'Jumlah barang perlu diisi',
                'harga.required' => 'Harga barang perlu diisi',
                'Kategori.required' => 'Deskripsi wajib diisi',
                'gambar.required' => 'Gambar wajib diisi',
            ]
        );

        $result = Products::create($validate);
        $data['success'] = true;
        $data['message'] = 'Data berhasil ditambahkan';
        $data['result'] = $result;
        return response()->json(['message' => 'Data berhasil disimpan'], Response::HTTP_CREATED);
    }

    /**
     * Display the specified resource.
     */
    public function show(Products $products)
    {
        $products = Products::find($products);
        $data['success'] = true;
        $data['message'] = "Detail data barang";
        $data['result'] = $products;
        return response()->json($data, Response::HTTP_OK);
    }

    /**
     * Show the form for editing the specified resource.
     */
};