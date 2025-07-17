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
       Schema::create('prompt_versions', function (Blueprint $table) {
         $table->id();
         $table->string('version'); // ex: "v0", "v1"
          $table->string('type'); // ex: landing_page, ad, email...
         $table->text('prompt_template'); // ton contenu de prompt avec les ${} 
         $table->timestamps();
     });

    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('prompt_versions');
    }
};
