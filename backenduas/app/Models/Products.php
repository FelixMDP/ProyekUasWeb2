<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
     use HasFactory;

    // Specify the table name if it's not the plural form of the model name
    protected $table = 'Products';

    // Define which attributes are mass assignable
    protected $fillable = [
        'IDProduk',
        'Image_Path',
        'Nama_Produk',
        'Jumlah_Stok',
        'Harga',
    ];
}