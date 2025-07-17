<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
   public function up(): void {
        Schema::create('product_infos', function (Blueprint $table) {
            $table->id();

            // Informations sur l'offre
            $table->string('name');
            $table->string('goal')->default('obtenir des leads');
            $table->string('price')->nullable();

            // Public cible
            $table->text('audience');
            $table->string('awarenesslevel')->default('inconscient du problème');

            // Problème & Solution
            $table->text('problems');
            $table->text('solution');
            $table->text('benefits');
            $table->text('usp');

            // Arguments & Contenu
            $table->text('testimonials')->nullable();
            $table->text('features');
            $table->text('guarantee')->nullable();
            $table->text('cta');

            // Style & Inspiration
            $table->string('tone')->default('professionnelle');
            $table->text('references')->nullable();

            // SEO
            $table->string('mainkeyword');
            $table->text('secondarykeywords')->nullable();
            $table->string('location')->nullable();
            $table->string('brand')->nullable();

            $table->timestamps();
        });
    }

    public function down(): void {
        Schema::dropIfExists('product_infos');
    }
};