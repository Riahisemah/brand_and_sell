<?php

namespace App\Http\Controllers\Api;

use App\Models\ProductInfo;
use App\Models\PromptVersion;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ProductInfoController extends Controller
{
    public function store(Request $request)
{
    $data = $request->validate([
        'name' => 'required|string',
        'goal' => 'required|string',
        'price' => 'nullable|string',
        'audience' => 'required|string',
        'awarenessLevel' => 'required|string',
        'problems' => 'required|string',
        'solution' => 'required|string',
        'benefits' => 'required|string',
        'usp' => 'required|string',
        'features' => 'required|string',
        'testimonials' => 'nullable|string',
        'guarantee' => 'nullable|string',
        'cta' => 'required|string',
        'tone' => 'required|string',
        'references' => 'nullable|string',
        'mainkeyword' => 'required|string',
        'secondarykeywords' => 'nullable|string',
        'location' => 'nullable|string',
        'brand' => 'nullable|string',
        'primaryColor' => 'nullable|string',
        'secondaryColor' => 'nullable|string',
        'accentColor' => 'nullable|string',
        'backgroundColor' => 'nullable|string',
        'textColor' => 'nullable|string',
    ]);

    $data['user_id'] = auth()->id();

    $product = ProductInfo::create($data);

    $prompt = PromptVersion::where('version', 'v1.3')->first();

    $template = $prompt->prompt_template;

    $filledPrompt = $this->fillTemplate($template, $product);

    return response()->json([
        'product' => $product,
        'generated_prompt' => $filledPrompt
    ]);
}


    private function fillTemplate(string $template, ProductInfo $product): string
    {
        $placeholders = [
            '${productInfo.name}' => $product->name,
            '${productInfo.goal}' => $product->goal,
            '${productInfo.price}' => $product->price,
            '${productInfo.audience}' => $product->audience,
            '${productInfo.awarenessLevel}' => $product->awarenessLevel,
            '${productInfo.problems}' => $product->problems,
            '${productInfo.solution}' => $product->solution,
            '${productInfo.benefits}' => $product->benefits,
            '${productInfo.usp}' => $product->usp,
            '${productInfo.features}' => $product->features,
            '${productInfo.testimonials || "À générer"}' => $product->testimonials ?? 'À générer',
            '${productInfo.guarantee || "N/A"}' => $product->guarantee ?? 'N/A',
            '${productInfo.cta}' => $product->cta,
            '${productInfo.tone}' => $product->tone,
            '${productInfo.references || "N/A"}' => $product->references ?? 'N/A',
            '${productInfo.mainkeyword}' => $product->mainKeyword,
            '${productInfo.secondarykeywords || "N/A"}' => $product->secondaryKeywords ?? 'N/A',
            '${productInfo.location || "N/A"}' => $product->location ?? 'N/A',
            '${productInfo.brand || productInfo.name}' => $product->brand ?? $product->name,
             '${productInfo.primaryColor}' => $product->primaryColor ?? 'N/A',
             '${productInfo.secondaryColor}' => $product->secondaryColor ?? 'N/A',
             '${productInfo.accentColor}' => $product->accentColor ?? 'N/A',
             '${productInfo.backgroundColor}' => $product->backgroundColor ?? 'N/A',
             '${productInfo.textColor}' => $product->textColor ?? 'N/A',
        ];

        return str_replace(array_keys($placeholders), array_values($placeholders), $template);
    }
    public function __construct()
{
    $this->middleware('auth.jwt'); // ou 'auth.api' selon ce que tu as défini
}

  public function getUserProducts(Request $request)
    {
        $user = $request->user();
        $products = $user->productInfos; // relation définie dans User.php

        return response()->json($products);
    }

    public function show($id)
{
    $productInfo = ProductInfo::where('id', $id)
        ->where('user_id', auth()->id()) // sécurité : ne voir que ses propres données
        ->firstOrFail();

    return response()->json($productInfo);
}

}

