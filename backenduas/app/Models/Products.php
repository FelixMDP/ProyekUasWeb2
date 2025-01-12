<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class Products extends Model
{
    use HasFactory, HasUuids;
    protected $fillable = ['nama_produk', 'jumlah','harga', 'gambar','kategori'];
    
}