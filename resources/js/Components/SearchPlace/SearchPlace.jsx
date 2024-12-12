export default function ({ setToggleSearch }) {
    return (
        <>
            <div
                className="fixed w-screen h-screen bg-slate-800/15 z-[101] top-0 left-0"
                onClick={() => {
                    setToggleSearch(false);
                }}
            >
                <div
                    className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-slate-50 w-1/2 h-80 shadow-md border border-slate-600/20 rounded-md p-3 "
                    onClick={(event) => {
                        event.stopPropagation();
                    }}
                >
                    <div class="flex w-full relative">
                        <input
                            type="text"
                            name="search"
                            id="search"
                            placeholder="Cari Kotamu..."
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
                    <div className="w-full h-4/5 mt-5 flex flex-col overflow-y-auto overflow gap-1">
                        <div className=" bg-white border-[0.5px] px-4 py-3 mr-2  border-gray-300/50 text-gray-900 rounded-md hover:text-slate-50 hover:bg-orange-400 cursor-pointer transition-all">
                            <p className="font-medium">Tugu Monas</p>
                        </div>
                        <div className=" bg-white border-[0.5px] px-4 py-3 mr-2  border-gray-300/50 text-gray-900 rounded-md hover:text-slate-50 hover:bg-orange-400 cursor-pointer transition-all">
                            <p className="font-medium">Tugu Monas</p>
                        </div>
                        <div className=" bg-white border-[0.5px] px-4 py-3 mr-2  border-gray-300/50 text-gray-900 rounded-md hover:text-slate-50 hover:bg-orange-400 cursor-pointer transition-all">
                            <p className="font-medium">Tugu Monas</p>
                        </div>
                        <div className=" bg-white border-[0.5px] px-4 py-3 mr-2  border-gray-300/50 text-gray-900 rounded-md hover:text-slate-50 hover:bg-orange-400 cursor-pointer transition-all">
                            <p className="font-medium">Tugu Monas</p>
                        </div>
                        <div className=" bg-white border-[0.5px] px-4 py-3 mr-2  border-gray-300/50 text-gray-900 rounded-md hover:text-slate-50 hover:bg-orange-400 cursor-pointer transition-all">
                            <p className="font-medium">Tugu Monas</p>
                        </div>
                        <div className=" bg-white border-[0.5px] px-4 py-3 mr-2  border-gray-300/50 text-gray-900 rounded-md hover:text-slate-50 hover:bg-orange-400 cursor-pointer transition-all">
                            <p className="font-medium">Tugu Monas</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
