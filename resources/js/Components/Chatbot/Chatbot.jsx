import React from "react";
import { Link, usePage } from "@inertiajs/react";
import { useRef, useState, useEffect } from "react";

export default function () {
    const { props } = usePage(); 
    const { auth } = usePage().props
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    // Handle Add New Messages 

    const baseUrl = window.location.origin;
    const [messages, setMessages] = useState(props.messages || []); 
    const currentURL = window.location.href;

    axios.get(`${baseUrl}/data/getChatMessage`)
    .then((res) => {
        setMessages(res.data.messages)
    })
    .catch((res) => {
        console.error(res.response.data);
    });

   

    const prompt = useRef(null);

    const handleNewMessage = async (val) => {
        try {
            if(!val){
                return false
            }

            prompt.current.value = ""; 

            document.getElementById("chat-body").innerHTML += `
                <div id="user-conditional-chat" class="user flex justify-end w-full my-3 ps-4">
                    <div class="text-xs text-slate-500 tracking-wide bg-slate-100 py-2 px-4 rounded-l-xl rounded-br-xl">
                        ${val}
                    </div>
                </div>
                <div id="bot-conditional-chat" class="bot flex justify-start w-full my-3 ps-4">
                    <div class="text-xs text-slate-500 tracking-wide bg-slate-100 py-2 px-4 rounded-r-xl rounded-bl-xl w-[100px] h-[40px]">
                    </div>
                </div>
         
            `;
            
            await axios
                .post(`${baseUrl}`, {
                    "prompt": val
                })
                .then((res) => {
                    document.getElementById('user-conditional-chat').remove();
                    document.getElementById('bot-conditional-chat').remove();
                    setMessages(res.data.data.messages);
                })
                .catch((res) => {
                    console.error(res.response.data);
                });
        } catch (err) {
            console.error(err);
        }
    };


    return (
        <>

            <div className="">

                {auth.user ? (
                    <button className="fixed w-[60px] h-[60px] bg-orange-100 right-[40px] bottom-[40px] z-[50] rounded-full flex items-center justify-center" onClick={toggleVisibility}>

                        {isVisible ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                stroke="#ea580c" strokeWidth="1.5" strokeLinecap="round"
                                strokeLinejoin="round" className="lucide lucide-bot">
                                <path d="M12 8V4H8" />
                                <rect width="16" height="12" x="4" y="8" rx="2" />
                                <path d="M2 14h2" />
                                <path d="M20 14h2" />
                                <path d="M15 13v2" />
                                <path d="M9 13v2" />
                            </svg>
                        )}
                    </button>
                ) : (
                    <button className="fixed w-[60px] h-[60px] bg-orange-100 right-[40px] bottom-[40px] z-[50] rounded-full flex items-center justify-center"  onClick={() => { window.location.href = "/auth/login"; }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="#ea580c" strokeWidth="1.5" strokeLinecap="round"
                            strokeLinejoin="round" className="lucide lucide-bot">
                            <path d="M12 8V4H8" />
                            <rect width="16" height="12" x="4" y="8" rx="2" />
                            <path d="M2 14h2" />
                            <path d="M20 14h2" />
                            <path d="M15 13v2" />
                            <path d="M9 13v2" />
                        </svg>
                    </button>
                )}


                {isVisible && (
                    <div className="fixed right-[140px] bottom-[40px] z-[60] content">
                        <div className="relative w-[400px] h-[500px] bg-slate-50 border">
                            <div className="flex flex-col h-full">
                                <div className="header bg-white w-full h-[65px]">
                                    <div className="flex items-center h-full gap-5 ms-5 py-2">
                                        <div className="bg-orange-100 rounded-full p-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ea580c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bot"><path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/></svg>
                                        </div>
                                        <h1 className="font-semibold text-slate-600 tracking-wide">Levide AI</h1>
                                    </div>
                                </div>
                                <div className="body flex overflow-y-auto flex-col-reverse">
                                    <div id="chat-body" className="px-5 py-5 ">

                                        <div className="bot flex justify-start w-full my-3 pe-4"><div className="text-xs text-slate-500 tracking-wide bg-slate-100 py-2 px-4 rounded-r-xl rounded-bl-xl">Levide disini siap membantu!</div></div>
                                        {messages.map((message, index) => (
                                            <div
                                                key={index}
                                                className={`flex w-full my-3 ${
                                                    message.role === 'model' ? 'justify-start pe-4' : 'justify-end ps-4'
                                                }`}
                                            >
                                                <div dangerouslySetInnerHTML={{ __html: message.message.replace(
                                                        /\*\*(.+?)\*\*/g,
                                                        '<strong>$1</strong>',
                                                    ) 
                                                    .replace(
                                                        /\*(.+?)\*/g,
                                                        '<em>$1</em>',
                                                    )
                                                    .replace(
                                                        /```([^`]+)```/g,
                                                        '<pre><code>$1</code></pre>',
                                                    ) 
                                                    .replace(
                                                        /`([^`]+)`/g,
                                                        '<code>$1</code>',
                                                    ) 
                                                    .replace(/\n/g, '<br>') }} 
                                                    className={`text-xs text-slate-500 tracking-wide bg-slate-100 py-2 px-4 ${
                                                        message.role === 'user'
                                                            ? 'rounded-r-xl rounded-bl-xl'
                                                            : 'rounded-l-xl rounded-br-xl'
                                                    }`}>
                                                </div>
                                            </div>
                                        ))}


                                    </div>
                                </div>
                                <div className="chat mt-auto bg-white w-full h-[50px]">
                                    <div className="mx-3 flex h-full py-4">
                                        <input type="text" ref={prompt} name="" id="" className="w-full focus:outline-none h-full text-slate-400 pe-3" />
                                        <button onClick={(e) => {
                                                e.preventDefault();
                                                handleNewMessage(
                                                    prompt.current.value
                                                )
                                            }}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#64748b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-send-horizontal"><path d="M3.714 3.048a.498.498 0 0 0-.683.627l2.843 7.627a2 2 0 0 1 0 1.396l-2.842 7.627a.498.498 0 0 0 .682.627l18-8.5a.5.5 0 0 0 0-.904z"/><path d="M6 12h16"/></svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                )}
            </div>            
            
        </>
    );
}
