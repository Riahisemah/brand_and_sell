<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\File;

class FileController extends Controller
{
    public function index()
    {
        return response()->json(File::all());
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string',
            'description' => 'nullable|string',
            'file_type' => 'required|string',
            'size' => 'required|string',
            'download_url' => 'required|url',
            'tags' => 'nullable|array',
        ]);

        $file = File::create($data);
        return response()->json($file, 201);
    }

    public function destroy($id)
    {
        $file = File::findOrFail($id);
        $file->delete();
        return response()->json(['message' => 'Fichier supprimé']);
    }

    public function incrementDownload($id)
    {
        $file = File::findOrFail($id);
        $file->increment('downloads');
        return response()->json(['message' => 'Téléchargement comptabilisé']);
    }
}
