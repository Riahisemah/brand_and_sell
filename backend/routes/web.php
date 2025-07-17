<?php

use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;

// Simple route test
Route::get('/', function () {
    return ['Laravel' => app()->version()];
});

