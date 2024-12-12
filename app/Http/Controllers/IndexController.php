<?php

namespace App\Http\Controllers;

use App\Models\Bookmark;
use App\Models\Comment;
use App\Models\Destination;
use App\Models\Message;
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

        if(!$destination){
            abort(404);
        }

        // GET KOMENTAR
        $comments = Comment::with(['user'])->where('destination_id', $destination->id)->orderBy('created_at', 'desc')->get();

        // GET 2 PLACE 
        $get2Destination = Destination::take(2)->get();
        // where('id', '!=', $destination->id)->
        // dd($get2Destination);


        // CEK BOOKMARK 
        $isBookmark = false;
        
        if(Auth::user()){
            $bookmark = Bookmark::where('user_id', Auth::user()->id)->first();

            if($bookmark){
                $isBookmark = true;
            }

        }

        return Inertia::render('Client/Detail', [
            'destination' => $destination->toArray(),
            'isBookmark' => $isBookmark,
            'get2Destination' => $get2Destination,
            'comments' => $comments,
        ]);
    }

    public function searchDestination(Request $request) {
        $destination = Destination::where('name', 'LIKE', '%' . $request->data . '%')->get();

        return response()->json(['data' => $destination]);
    }

}
