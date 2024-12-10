<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BookmarkController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\IndexController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/auth/login', [AuthController::class, 'loginView'])->name('login');
Route::post('/auth/login', [AuthController::class, 'loginPost']);
Route::get('/auth/register', [AuthController::class, 'registerView']);
Route::post('/auth/register', [AuthController::class, 'registerPost']);
Route::post('/auth/logout', [AuthController::class, 'destroy']);

Route::get('/', [IndexController::class, 'LandingPage'])->name('home');
Route::get('/detail/{slug}', [IndexController::class, 'detailDestination']);

// Comment 
Route::post('/detail/{slug}', [CommentController::class, 'addComment']);
Route::delete('/detail/{id}', [CommentController::class, 'deleteComment']);

// Bookmarks 
Route::post('/detail/{slug}/bookmark', [BookmarkController::class, 'store']);

