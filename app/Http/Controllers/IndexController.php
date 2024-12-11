<?php

namespace App\Http\Controllers;

use App\Models\Bookmark;
use App\Models\Destination;
use App\Models\Message;
use Inertia\Inertia;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class IndexController extends Controller
{
    public function LandingPage() {
        $messages = null;

        if(Auth::user()){
            $messages = Message::where('user_id', Auth::user()->id)->get();
        }

        return Inertia::render('Client/LandingPage', [
            'messages' => $messages
        ]);
    }

    public function detailDestination($slug) {

        $destination = Destination::with(['destinationDetail', 'province'])->where('slug', $slug)->first();

        if(!$destination){
            abort(404);
        }

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

        // dd($destination->destinationDetail);

     

        return Inertia::render('Client/Detail', [
            'destination' => $destination->toArray(),
            'isBookmark' => $isBookmark,
            'get2Destination' => $get2Destination
        ]);
    }

}
