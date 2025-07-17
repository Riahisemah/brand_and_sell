<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SocialPost extends Model
{
    use HasFactory;

    protected $fillable = [
        'product_id',
        'user_id',
        'platform',
        'content',
        'hashtags',
        'tone',
        'objective',
        'is_edited',
    ];

    protected $casts = [
        'hashtags' => 'array', // ✅ si tu passes des hashtags en JSON
        'is_edited' => 'boolean',
    ];

    public function product()
    {
        return $this->belongsTo(ProductInfo::class);
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
