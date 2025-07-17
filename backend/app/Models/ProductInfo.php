<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model; 


class ProductInfo extends Model
{
    protected $fillable = [
        'name', 'goal', 'price', 'audience', 'awarenesslevel',
        'problems', 'solution', 'benefits', 'usp', 'testimonials',
        'features', 'guarantee', 'cta', 'tone', 'references',
        'mainkeyword', 'secondarykeywords', 'location', 'brand',
        'primaryColor', 'secondaryColor', 'accentColor',
        'backgroundColor', 'textColor', 'user_id'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
