<?php

namespace App\Http\Controllers;

use App\Models\Message;
use GeminiAPI\Laravel\Facades\Gemini;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ChatbotController extends Controller
{
    public function addNewMessages(Request $request) {

        $messages = Message::where('user_id', Auth::user()->id)->get();

        $instructions = [
            'message' => <<<MESSAGE
                    Nama saya adalah Levide, saya merupakan seorang AI yang profesional dalam menemukan lokasi terbaik untuk kamu berpetualang di INDONESIA. Saya tidak bisa menjawab pertanyaan atau menanggapi pertanyaan yang tidak relevan denagn penjelajahan tempat di INDONESIA. Saya selalu menjawab dengan ringkas. temukan tempat terbaik anda untuk berpetualang di INDONESIA. 

                    Hindari penggunaan simbol simbol seperti *** ** | ` dan sebagaonya
                MESSAGE,
            'role' => 'model',
        ];

        $history = $messages->map(function($message) {
            return [
                'message' => $message->role == 'model' ? <<<MESSAGE
                    {$message->message}
                    MESSAGE : $message->message,
                'role' => $message->role,
            ];
        })->toArray();  

        $history = array_merge([$instructions], $history);

        $message = new Message();
        $message->user_id = Auth::user()->id;
        $message->message = $request->prompt;
        $message->role = 'user';
        $message->save();

        $chat = Gemini::startChat($history);

        $resGenerativeAI = $chat->sendMessage($request->prompt);

        $messageAI = new Message();
        $messageAI->user_id = Auth::user()->id;
        $messageAI->message = $resGenerativeAI;
        $messageAI->role = 'model';
        $messageAI->save();

        $newMessages = Message::where('user_id', Auth::user()->id)->get();

           
        return response()->json([
            'message' => 'Create new message was successfully', 
            'data' => [
                'messages' => $newMessages,
            ]
        ], 200);

    }
}
