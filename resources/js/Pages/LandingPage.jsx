export default function () {
    return (
        <div className="">
            <div className="w-full bg-orange-50 h-[50px] flex items-center justify-center">
                <p className="text-sm text-slate-400 tracking-wide">Ada tempat baru nih! Yuk kunjungi sekarang! <a href="" className="text-orange-400">Klik disini</a></p>
            </div>
            <nav className="w-full py-4 bg-white border-b sticky top-[0] left-[0] right-[0] z-[100]">
                <div className="flex items-center justify-between mx-16">
                    <div className="navbar-brand flex items-center">
                        <a href="" className="font-bold text-2xl">
                            <img src="https://github-production-user-asset-6210df.s3.amazonaws.com/89033712/390588554-6cea6ecc-52e8-48f2-86d7-4400fa57ee85.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAVCODYLSA53PQK4ZA%2F20241127%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241127T230241Z&X-Amz-Expires=300&X-Amz-Signature=15e5b2067a71590f5f95ef2dbb888b96eb62b66eedeac1914390f2d1429f12cb&X-Amz-SignedHeaders=host" alt="logo" className="logo-brand" width="150px" />
                        </a>
                    </div>

                    <div className="">
                        <ul className="flex gap-7 text-sm text-slate-500 tracking-wide font-medium">
                            <li>
                                <a href="" className=" hover:text-slate-900">
                                    Beranda
                                </a>
                            </li>
                            <li>
                                <a href="" className=" hover:text-slate-900">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="" className=" hover:text-slate-900">
                                    Event
                                </a>
                            </li>
                            <li>
                                <a href="" className=" hover:text-slate-900">
                                    Layanan
                                </a>
                            </li>
                            <li>
                                <a href="" className=" hover:text-slate-900">
                                    Eksplorasi
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="">
                        <a href="" className="border border-slate-800 px-6 py-3 text-sm">Masuk</a>
                        <a href="" className="border border-slate-800 bg-slate-800 px-6 py-3 text-white text-sm ms-2">Daftar</a>
                    </div>
                </div>
            </nav>

            <section id="hero">
                <div className="flex justify-between mt-10">
                    <div className="mt-10">
                        <p className="bg-orange-200 text-orange-500 w-max px-3 py-1 rounded-full text-xs font-medium tracking-wide mb-2">Cari Tempat Liburanmu</p>
                        <h1 className="font-semibold text-[50px] leading-[1.2]">Pesona Keberagaman <br/> Budaya Indonesia ! </h1>
                        <p className="text-sm mt-5 text-slate-600">Jelajahi Indonesia, negeri yang kaya akan keberagaman budaya. Setiap langkah <br/> membawa cerita unik, tradisi memikat, dan keindahan yang tak tertandingi.</p>
                        <div className="mt-8">
                            <a href="" className="flex items-center gap-3 w-max group">
                                <div className="border-orange-600 border w-max p-4 rounded-full">
                                    <div className="w-[5px] h-[5px] bg-orange-600 rounded-full"></div>
                                </div>
                                <p className="text-orange-600 text-sm tracking-wide">Explore with us</p>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="#ea580c" className="bi bi-arrow-up-right duration-100 group-hover:rotate-[45deg]" viewBox="0 0 16 16">
                                    <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                                </svg>

                                {/* <div className="hidden group-hover:block absolute w-[90px] h-[40px] bg-orange-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" class="bi bi-arrow-up-right" viewBox="0 0 16 16">
                                        <path fill-rule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                                    </svg>
                                </div> */}
                                
                            </a>
                            <button className=""></button>
                        </div>
                        <div className="mt-10">
                            <div className="flex items-center gap-6">
                                <div className="text-center">
                                    <h1 className="text-3xl font-semibold text-slate-800">99+</h1>
                                    <p className="text-xs text-slate-500 tracking-wider">Daftar Pengguna</p>
                                </div>
                                <div className="w-[1px] h-[18px] bg-slate-600"></div>
                                <div className="text-center">
                                    <h1 className="text-3xl font-semibold text-slate-800">24</h1>
                                    <p className="text-xs text-slate-500 tracking-wider">Dukungan Tempat</p>
                                </div>
                                <div className="w-[1px] h-[18px] bg-slate-600"></div>
                                <div className="text-center">
                                    <h1 className="text-3xl font-semibold text-slate-800">50%</h1>
                                    <p className="text-xs text-slate-500 tracking-wider">Ulasan Pengguna</p>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div className="relative w-[600px] h-[400px] overflow-hidden cursor-pointer group">
                        <img src="https://www.papuaparadise.com/wp-content/uploads/2017/09/bungalows-1200x800.jpg" alt="img hero" width="100%" />
                        <div className="detail absolute bottom-[-140px] group-hover:bottom-[0] bg-white/30 backdrop-blur-sm w-full h-[140px] transition-all duration-700 ">
                            <div className="p-5">
                                <h1 className="text-white text-2xl tracking-wide">Pantai Raja Ampat: Surga Tropis di Timur</h1>
                                <div className="flex mt-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" className="bi bi-geo-alt" viewBox="0 0 16 16">
                                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/><path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                                    </svg>
                                    <p className="text-xs text-white opacity-75 tracking-wide ms-2 font-thin">Lombok, Papua Timur</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <div className="bg-slate-100 w-full my-36">
                <div className="flex items-center justify-center opacity-[20%] py-5 gap-10">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD6NiLBrpE5XvpewWqMsu-BadPFEvnO0XbdA&s" alt="logo" width="100px"/>
                    <img src="https://bob.kemenparekraf.go.id/wp-content/uploads/2021/03/logobob-vertikal.png" alt="logo" width="100px"/>
                    <img src="https://www.itdc.co.id/assets/frontend/images/Logo%20ITDC%20Footer-R01.png" alt="logo" width="100px"/>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/06/Logo_of_the_Ministry_of_Environmental_Affairs_and_Forestry_of_the_Republic_of_Indonesia.svg" alt="logo" width="100px"/>
                </div>
            </div>

            <section id="pictures">

                <div className="my-36 flex justify-center gap-10">
                    <div className="w-[340px] h-[500px] bg-slate-500 rounded-xl overflow-hidden img-container">
                        <img src="https://www.papuaparadise.com/wp-content/uploads/2017/09/bungalows-1200x800.jpg" alt="img hero" className="w-full h-full object-cover"/>
                    </div>
                    <div className="flex flex-col gap-10">
               
                        <div className="flex gap-10">
                            <div className="w-[260px] h-[300px] bg-slate-500 rounded-xl overflow-hidden img-container">
                                <img src="https://www.papuaparadise.com/wp-content/uploads/2017/09/bungalows-1200x800.jpg" alt="img hero" className="w-full h-full object-cover"/>
                            </div>
                            <div className="flex flex-col gap-10">
                                <div className="w-[400px] h-[130px] bg-slate-500 rounded-xl overflow-hidden img-container">
                                    <img src="https://www.papuaparadise.com/wp-content/uploads/2017/09/bungalows-1200x800.jpg" alt="img hero" className="w-full h-full object-cover"/>
                                </div>
                                <div className="w-[400px] h-[130px] bg-slate-500 rounded-xl overflow-hidden img-container">
                                    <img src="https://www.papuaparadise.com/wp-content/uploads/2017/09/bungalows-1200x800.jpg" alt="img hero" className="w-full h-full object-cover"/>
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-[160px] bg-slate-500 rounded-xl overflow-hidden img-container">
                            <img src="https://www.papuaparadise.com/wp-content/uploads/2017/09/bungalows-1200x800.jpg" alt="img hero" className="w-full h-full object-cover"/>
                        </div>
                    </div>
                </div>


                    {/* <img src="https://www.papuaparadise.com/wp-content/uploads/2017/09/bungalows-1200x800.jpg" alt="img hero" width="100%" /> */}
                    {/* <h5 className="text-[50px]">ELAINA CANTIK</h5> */}
                    {/* <img src="https://www.papuaparadise.com/wp-content/uploads/2017/09/bungalows-1200x800.jpg" alt="img hero" width="100%" className="keren" /> */}
            </section>
        </div>
    );
}
