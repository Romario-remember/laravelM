<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('board_games', function (Blueprint $table) {
            $table->id();
            $table->string('title');
            $table->string('genre');
            $table->integer('players_count');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('board_games');
    }
};