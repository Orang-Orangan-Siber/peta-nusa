<?php

namespace App\Http\Controllers;

use App\Models\Bookmark;
use App\Models\Destination;
use Inertia\Inertia;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class IndexController extends Controller
{
    public function LandingPage() {
        return Inertia::render('Client/LandingPage');
    }

    public function detailDestination($slug) {

        $destination = Destination::with(['destinationDetail', 'province'])->where('slug', $slug)->first();

        // dd($destination->destinationDetail);

        if(!$destination){
            abort(404);
        }

        return Inertia::render('Client/Detail', [
            'destination' => $destination->toArray()
        ]);
    }

}
