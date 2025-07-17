<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ClaudeController extends Controller
{
  public function generate(Request $request)
{
    $request->validate([
        'prompt' => 'required|string',
    ]);

    $apiKey = env('CLAUDE_API_KEY');

    if (!$apiKey) {
        return response()->json(['error' => 'API key not set'], 500);
    }

    try {
        $response = Http::withHeaders([
            'x-api-key' => $apiKey,
            'Content-Type' => 'application/json',
            'anthropic-version' => '2023-06-01',
        ])->post('https://api.anthropic.com/v1/messages', [
            'model' => 'claude-3-haiku-20240307',
            'max_tokens' => 3000,
            'messages' => [
                [
                    'role' => 'user',
                    'content' => $request->prompt,
                ],
            ],
        ]);
       


        if ($response->failed()) {
            return response()->json(['error' => 'API request failed', 'details' => $response->body()], 500);
        }

        return response()->json($response->json());

    } catch (\Exception $e) {
        return response()->json([
            'error' => 'Exception caught',
            'message' => $e->getMessage(),
            'trace' => $e->getTraceAsString(),
        ], 500);
    }
}


}
