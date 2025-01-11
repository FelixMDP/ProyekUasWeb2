<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaksi extends Model
{
     use HasFactory;

    // Specify the table name if it's not the plural form of the model name
    protected $table = 'Transaksi';

    // Define which attributes are mass assignable
    protected $fillable = [
        'IDTransaksi',
        'IDProducts',
        'IDAnggota',
        'Pendapatan',
        'Tgl_Transaksi',
        'Waktu_Transaksi',
    ];
}