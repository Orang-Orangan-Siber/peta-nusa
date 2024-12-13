<?php

namespace App\Http\Controllers;

use App\Models\Bookmark;
use App\Models\Destination;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class BookmarkController extends Controller
{

    public function index() {
        $bookmarks = Bookmark::with('destination')->where('user_id', Auth::user()->id)->get();

        return Inertia::render('Client/Bookmarks', [
            'bookmarks' => $bookmarks
        ]);
    }

    public function store(Request $request, $slug) {
        $destination = Destination::where('slug', $slug)->first();

        $bookmark = new Bookmark();
        $bookmark->destination_id = $destination->id;
        $bookmark->user_id = Auth::user()->id;
        $bookmark->save();

        return response()->json(['message' => 'Berhasil menambah bookmark!'], 201);
    }

    public function destroy($slug) {
        $destination = Destination::where('slug', $slug)->first();

        if(!$destination){
            abort(404);
        }

        $bookmark = Bookmark::where('destination_id', $destination->id)->where('user_id', Auth::user()->id)->first();

        if(!$bookmark){
            abort(404);
        }

        $bookmark->delete();

        return redirect('/user/bookmarks');
        
    }
}
