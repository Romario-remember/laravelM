<?php
use App\Http\Controllers\BoardGameController;
use Illuminate\Support\Facades\Route;

Route::inertia('/', 'welcome')->name('home');


Route::get('/board-games', [BoardGameController::class, 'index'])->name('board-games.index');
Route::post('/board-games', [BoardGameController::class, 'store'])->name('board-games.store');