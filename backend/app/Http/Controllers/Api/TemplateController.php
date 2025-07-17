<?php

// app/Http/Controllers/Api/TemplateController.php

namespace App\Http\Controllers\Api;

use App\Models\Template;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class TemplateController extends Controller
{
    // GET /api/templates
    public function index()
    {
        $templates = Template::all();
        return response()->json($templates);
    }

    // POST /api/templates
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'category' => 'required|in:landing,formation',
            'image' => 'nullable|url',
            'html' => 'required|url',
        ]);

        $template = Template::create($validated);

        return response()->json($template, 201);
    }

    // GET /api/templates/{id}
    // GET /api/template/{id}
public function show($id)
{
    $template = Template::find($id);

    if (!$template) {
        return response()->json([
            'message' => 'Template non trouvé.'
        ], 404);
    }

    return response()->json($template);
}


    
    // DELETE /api/templates/{id}
    public function destroy(Template $template)
    {
        $template->delete();
        return response()->noContent();
    }
}