<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::table('product_infos', function (Blueprint $table) {
            // Couleurs
            $table->string('primaryColor')->nullable();
            $table->string('secondaryColor')->nullable();
            $table->string('accentColor')->nullable();
            $table->string('backgroundColor')->nullable();
            $table->string('textColor')->nullable();

            // Relation utilisateur
            $table->foreignId('user_id')->nullable()->constrained()->onDelete('set null');
        });
    }

    public function down(): void
    {
        Schema::table('product_infos', function (Blueprint $table) {
            $table->dropColumn([
                'primaryColor', 
                'secondaryColor', 
                'accentColor', 
                'backgroundColor', 
                'textColor',
                'user_id'
            ]);
        });
    }
};
