<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;

use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function loginView() {
        return Inertia::render('Auth/Login');
    }

    public function loginPost(Request $request) {
        $credentials = $request->validate([
            
        ]);
    }

    public function registerView() {
        return Inertia::render('Auth/Register');
    }

    public function registerPost(Request $request) {
        $request->validate([
            'email' => 'required|email',
            'name' => 'required',
            'password' => 'required',
        ]);

        $user = new User();
        $user->email = $request->email;
        $user->name = $request->name;
        $user->password= password_hash($request->password, PASSWORD_BCRYPT);
        $user->save();

        
    }
}
