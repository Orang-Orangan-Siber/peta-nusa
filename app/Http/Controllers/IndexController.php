<?php

namespace App\Http\Controllers;
use Inertia\Inertia;

use Illuminate\Http\Request;

class IndexController extends Controller
{
    public function LandingPage() {
        return Inertia::render('Client/LandingPage');
    }

    public function detailDestination($slug) {
        return Inertia::render('Client/Detail');
    }
}
