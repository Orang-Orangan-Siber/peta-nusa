<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\Destination;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class CommentController extends Controller
{
    public function addComment(Request $request, $slug) {
        $destination = Destination::where('slug', $slug)->first();

        if(!$destination){
            abort(404);
        }


        $newComment = new Comment();
        $newComment->destination_id = $destination->id;
        $newComment->user_id = Auth::user()->id;
        $newComment->body = $request->body;
        $newComment->save();

        $comment = Comment::with(['user'])->where('id', $newComment->id)->first();

        return response()->json(['message' => 'Komentar berhasil ditambah!', 'data' => $comment], 201);
    }

    public function deleteComment($id) {
        
        $comment = Comment::where('user_id', Auth::user()->id)->where('id', $id)->first();

        if(!$comment){
            abort(404);
        }

        $comment->delete();
        return response()->json(['message' => 'Komentar berhasil dihapus!'], 200);

    }


}
