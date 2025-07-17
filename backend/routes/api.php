<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\FileController;
use App\Http\Controllers\Api\ProductInfoController;
use App\Http\Controllers\Api\PromptGenerationController;

use App\Http\Controllers\AuthController;
use App\Http\Controllers\ClaudeController;
use App\Http\Controllers\Api\TemplateController;

Route::get('/template/{id}', [TemplateController::class, 'show']);
Route::get('/templates', [TemplateController::class, 'index']);
Route::post('/templates', [TemplateController::class, 'store']);


Route::post('/login', [AuthController::class, 'login']);
Route::post('/register', [AuthController::class, 'register']);

Route::middleware('auth:api')->group(function () {
    Route::get('/me', [AuthController::class, 'me']);
    Route::post('/logout', [AuthController::class, 'logout']);
    // 🧠 Enregistrement d’un ProductInfo + génération du prompt
Route::post('/product-info', [ProductInfoController::class, 'store']);
Route::get('/user/products', [ProductInfoController::class, 'getUserProducts']);
});

Route::get('/product-info/{id}', [ProductInfoController::class, 'show']);


// 📁 Gestion des fichiers (Download Center)
Route::get('/files', [FileController::class, 'index']);
Route::post('/files', [FileController::class, 'store']);
Route::delete('/files/{id}', [FileController::class, 'destroy']);
Route::patch('/files/{id}/download', [FileController::class, 'incrementDownload']);



// 🔁 Générer un prompt basé sur version + produit
Route::get('/generate-prompt/{version}/{productId}', [PromptGenerationController::class, 'generate']);

// générer avec claude
// Route::post('/generate-claude', [ClaudeController::class, 'generate']);
Route::middleware('auth:api')->post('/generate-claude', [ClaudeController::class, 'generate']);



// Route::middleware('auth:sanctum')->get('/user', function (\Illuminate\Http\Request $request) {
//     return $request->user();
// });

