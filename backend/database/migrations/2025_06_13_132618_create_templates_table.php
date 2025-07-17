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
        Schema::create('templates', function (Blueprint $table) {
           $table->id(); // Correspond à votre 'id' (auto-increment)
          $table->string('name');
          $table->text('description')->nullable();
          $table->enum('category', ['landing', 'formation']);
          $table->string('image')->nullable();
          $table->string('html');
          $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('templates');
    }
};
