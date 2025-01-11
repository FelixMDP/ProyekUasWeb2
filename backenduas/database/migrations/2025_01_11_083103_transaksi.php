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
        Schema::dropIfExists('Transaksi');
        Schema::create('Transaksi', function (Blueprint $table){
            $table->id();
            $table->string('IDTransaksi')->unique();
            $table->string('IDProducts');
            $table->string('IDAnggota');
            $table->integer('Pendapatan');
            $table->date('Tgl_Transaksi');
            $table->datetime('Waktu_Transaksi');
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
