<?php

namespace App\Http\Controllers;

use App\Models\BoardGame;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BoardGameController extends Controller
{
    public function index()
    {
        return Inertia::render('BoardGames/Index', [
            'boardGames' => BoardGame::latest()->get()
        ]);
    }

    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => 'required|string|max:255',
            'genre' => 'required|string|max:255',
            'players_count' => 'required|integer|min:1|max:99',
        ]);

        BoardGame::create($validated);
        
        return redirect()->back();
    }
}