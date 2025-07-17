<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PromptVersion extends Model
{
    protected $fillable = ['version', 'type', 'prompt_template'];
}
