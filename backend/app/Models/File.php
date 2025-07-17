<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class File extends Model
{
    protected $fillable = [
        'name',
        'description',
        'file_type',
        'size',
        'download_url',
        'downloads',
        'tags',
        'date_added',
    ];

    protected $casts = [
        'tags' => 'array',
        'date_added' => 'datetime',
    ];
}