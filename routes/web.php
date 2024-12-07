<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\IndexController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/auth/login', [AuthController::class, 'loginView']);
Route::post('/auth/login', [AuthController::class, 'loginPost']);
Route::get('/auth/register', [AuthController::class, 'registerView']);
Route::post('/auth/register', [AuthController::class, 'registerPost']);

Route::get('/', [IndexController::class, 'LandingPage']);
Route::get('/detail/{slug}', [IndexController::class, 'detailDestination']);
