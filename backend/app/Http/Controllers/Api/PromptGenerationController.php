<?php

namespace App\Http\Controllers\Api;

use App\Models\ProductInfo;
use App\Models\PromptVersion;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class PromptGenerationController extends Controller
{
    public function generate($version, $productId)
    {
        $prompt = PromptVersion::where('version', $version)->firstOrFail();
        $product = ProductInfo::findOrFail($productId);

        $filledPrompt = $this->fillTemplate($prompt->prompt_template, $product);

        return response()->json([
            'filled_prompt' => $filledPrompt,
        ]);
    }

    private function fillTemplate($template, $product)
    {
        $replaced = $template;

        foreach ($product->toArray() as $key => $value) {
            $replaced = str_replace('${productInfo.' . $key . '}', $value ?? '', $replaced);
        }

        return $replaced;
    }
}
