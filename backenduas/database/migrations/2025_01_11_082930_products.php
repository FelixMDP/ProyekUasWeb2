<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::dropIfExists('Products');
        Schema::create('Products', function (Blueprint $table){
            $table->id();
            $table->string('IDProduk')->unique();
            $table->string('Image_Path');
            $table->string('Nama_Produk');
            $table->integer('Jumlah_Stok');
            $table->integer('Harga');
            $table->string('Category');
            $table->timestamps();
        }); 
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('Products');
    }
};
