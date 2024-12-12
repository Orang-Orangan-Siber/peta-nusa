<?php

use App\Http\Controllers\AuthController;
use App\Http\Controllers\BookmarkController;
use App\Http\Controllers\ChatbotController;
use App\Http\Controllers\CommentController;
use App\Http\Controllers\IndexController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::get('/', [IndexController::class, 'LandingPage'])->name('home');
Route::get('/detail/{slug}', [IndexController::class, 'detailDestination']);
Route::post('/data/getSearch', [IndexController::class, 'searchDestination']);


Route::middleware(['guest'])->group(function () {


    Route::get('/auth/login', [AuthController::class, 'loginView'])->name('login');
    Route::post('/auth/login', [AuthController::class, 'loginPost'])->name('login.post');
    Route::get('/auth/register', [AuthController::class, 'registerView']);
    Route::post('/auth/register', [AuthController::class, 'registerPost'])->name('register.post');
});


Route::middleware(['auth'])->group(function () {

    Route::get('/auth/logout', [AuthController::class, 'destroy']);


    // BOT MESSAGE 
    Route::get('/data/getChatMessage', [ChatbotController::class, 'getChatMessage']);
    Route::post('/', [ChatbotController::class, 'addNewMessages']);
    
    // Comment 
    Route::post('/detail/{slug}', [CommentController::class, 'addComment'])->name('comment.post');
    Route::delete('/detail/{id}', [CommentController::class, 'deleteComment'])->name('comment.delete');

    // Bookmarks 
    Route::get('/user/bookmarks', [BookmarkController::class, 'index']);
    Route::post('/detail/{slug}/bookmark', [BookmarkController::class, 'store']);
});



