<?php

use App\Http\Controllers\AuthController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('LandingPage');
});


Route::get('/auth/login', [AuthController::class, 'loginView']);
Route::get('/auth/register', [AuthController::class, 'registerView']);
