<?php

namespace App\Http\Controllers;
use Inertia\Inertia;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function loginView() {
        return Inertia::render('Auth/Register');
    }

    public function registerView() {
        return Inertia::render('Auth/Login');
    }
}
