<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;


return new class extends Migration {
    public function up(): void
    {
        Schema::create('social_posts', function (Blueprint $table) {
            $table->id();

            // Lien vers le produit
            $table->foreignId('product_id')->constrained('product_infos')->onDelete('cascade');

            // Plateforme (facebook, linkedin, etc.)
            $table->string('platform');

            // Contenu du post
            $table->text('content');

            // Hashtags (stockés en JSON ou CSV, ici text nullable)
            $table->text('hashtags')->nullable();

            // Tonalité et objectif marketing
            $table->string('tone');
            $table->string('objective');

            // Post édité manuellement ?
            $table->boolean('is_edited')->default(false);

            // Créateur
            $table->foreignId('user_id')->constrained()->onDelete('cascade');

            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('social_posts');
    }
};

