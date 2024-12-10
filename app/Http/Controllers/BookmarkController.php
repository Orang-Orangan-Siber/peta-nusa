<?php

namespace App\Http\Controllers;

use App\Models\Bookmark;
use App\Models\Destination;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class BookmarkController extends Controller
{
    public function store(Request $request, $slug) {
        $destination = Destination::where('slug', $slug)->first();

        $bookmark = new Bookmark();
        $bookmark->destination_id = $destination->id;
        $bookmark->user_id = Auth::user()->id;
        $bookmark->save();

        return response()->json(['message' => 'Berhasil menambah bookmark!'], 201);
    }
}
