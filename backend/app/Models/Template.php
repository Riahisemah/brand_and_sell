<?php

// app/Models/Template.php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Template extends Model
{
    protected $fillable = [
        'name',
        'description',
        'category',
        'image',
        'html',
    ];

    protected $casts = [
        'category' => 'string', // Laravel gère nativement les enum
    ];

    // public function sections(): HasMany
    // {
    //     return $this->hasMany(TemplateSection::class);
    // }
}