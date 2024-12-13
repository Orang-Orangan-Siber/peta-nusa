import axios from "axios";
import { useRef, useState, useEffect } from "react";

export default function ({ setToggleSearch }) {

    const [valueInp, setValueInp] = useState("");
    const [defaultDatas, setDefaultDatas] = useState([]);
    const baseUrl = window.location.origin;

    axios.post(`${baseUrl}/data/getSearch`)
    .then((res) => {
        setDefaultDatas(res.data.data)
        
    })
    .catch((res) => {
        console.error(res);
    });

    const handleInputChange = async (e) => {
        setValueInp(e.target.value); 

        await axios.post(`${baseUrl}/data/getSearch`, {
            data : e.target.value
        })
        .then((res) => {
            const datas = res.data.data;

            if (datas.length > 0) {
                const contentDestination = document.getElementById('content_destination');
                
                contentDestination.innerHTML = '';
            
                datas.forEach((data) => {
                    const a = document.createElement('a');
                    a.className = "bg-white border-[0.5px] px-4 py-3 mr-2 border-gray-300/50 text-gray-900 rounded-md hover:text-slate-50 hover:bg-orange-400 cursor-pointer transition-all";
                    a.innerHTML = `<p class="font-medium">${data.name}</p>`;
                    a.href = `/detail/${data.slug}`
                    contentDestination.appendChild(a);
                });
            
            } else {
                const contentDestination = document.getElementById('content_destination');
                
                contentDestination.innerHTML = `<div class="text-center w-full"><p class="text-gray-500 mt-5">Tidak ada destinasi.</p></div>`;
            }
            
        })
        .catch((res) => {
            console.error(res);
        });

    };


    return (
        <>
            <div
                className="fixed w-[100%] h-[100%] bg-slate-800/15 z-[101] top-0 left-0"
                onClick={() => {
                    setToggleSearch(false);
                }}
            >
                <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-slate-50 lg:w-1/2 md:w-[500px] w-[85%] h-80 shadow-md border border-slate-600/20 rounded-md p-3 "
                    onClick={(event) => {
                        event.stopPropagation();
                    }}
                >
                    <div className="flex w-full relative">
                        <input
                            type="text"
                            name="search"
                            id="search"
                            value={valueInp}
                            onInput={handleInputChange} 
                            placeholder="Lagi mau kemana nih ? .."
                            className="w-full px-4 py-2 rounded-md border-2 border-gray-300 outline-none focus:border-orange-400  transition-all text-gray-900 pr-10 "
                        />
                        <svg
                            fill="none"
                            stroke="#fb923c"
                            strokeLinecap="round"
                            strokeWidth={1.8}
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-7 h-7 absolute right-2 top-[50%] -translate-y-1/2 cursor-pointer"
                        >
                            <path d="M10.364 3a7.364 7.364 0 1 0 0 14.727 7.364 7.364 0 0 0 0-14.727v0Z" />
                            <path d="M15.857 15.86 21 21.001" />
                        </svg>
                    </div>

                    {/* // Result dibawah */}
                    <div id="content_destination" className="w-full h-4/5 mt-5 flex flex-col overflow-y-auto overflow gap-1">

                      {defaultDatas.map((data, index) => (
                            <a
                            key={index}
                            href={'/detail/'+data.slug}
                            className="bg-white border-[0.5px] px-4 py-3 mr-2 border-gray-300/50 text-gray-900 rounded-md hover:text-slate-50 hover:bg-orange-400 cursor-pointer transition-all"
                            >
                            <p className="font-medium">{data.name}</p>
                            </a>
                        ))}
                      
                    </div>
                </div>
            </div>
        </>
    );
}
