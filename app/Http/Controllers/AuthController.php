<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{
    public function loginView() {
        return Inertia::render('Auth/Login');
    }

    public function loginPost(Request $request) {
        $credentials = $request->validate([
            'email' => 'required|email',
            'password' => 'required'
        ]);

        $remember = $request->remember_me;

        if(Auth::attempt($credentials, $remember)){
            $request->session()->regenerate();

            return response()->json(['message' => 'Berhasil login!'], 200);

        } else {
            return back()->withErrors(['LoginError' => "Email atau password anda salah"]);
        }


    }

    public function registerView() {
        return Inertia::render('Auth/Register');
    }

    public function registerPost(Request $request) {
        $request->validate([
            'email' => 'required|email|unique:users,email',
            'name' => 'required',
            'password' => 'required',
        ]);

        $user = new User();
        $user->email = $request->email;
        $user->name = $request->name;
        $user->role = 2;
        $user->password = Hash::make($request->password);
        $user->save();

        Auth::login($user);

        return response()->json(['message' => 'Berhasil mendaftar!'], 201);

    }

    public function destroy(Request $request) {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();


        return to_route('login')->with('message', 'Anda berhasil logout');

    }
}
