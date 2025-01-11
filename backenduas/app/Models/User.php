<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
class User extends Model
{
    use HasFactory;

    // Specify the table name if it's not the plural form of the model name
    protected $table = 'Anggota';

    // Define which attributes are mass assignable
    protected $fillable = [
        'IDAnggota',
        'Nama_Anggota',
        'Email',
        'Alamat',
    ];
}