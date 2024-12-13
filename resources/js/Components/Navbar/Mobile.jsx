import React from "react";
import { Link, usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";


export default function ({ isVisible, toggleSidebar }) {
    const { auth } = usePage().props;

    const [isSidebarVisible, setIsSidebarVisible] = useState(isVisible); 

    useEffect(() => { setIsSidebarVisible(isVisible); }, [isVisible]);


    return (
        <>
            <div className="sidebar-wrapper lg:hidden block">
                <div onClick={toggleSidebar} className={`backdrop fixed top-0 bottom-0 right-0 left-0 w-[100vw] h-[100vh] bg-slate-600 opacity-25 z-[998] ${ isSidebarVisible ? 'block' : 'hidden'}`}></div>
                <div className={`content w-[310px] h-full fixed right-0 bottom-0 top-0 z-[999] bg-white duration-300 ${ isSidebarVisible ? 'translate-x-[0]' : 'translate-x-[100%]'}`}>
                    <div className="p-3">
                        <div className="header flex justify-between items-center">
                            <img src="https://i.ibb.co.com/XSmd6vF/peta-nusa-logo-2.png" alt="logo" className="logo-brand flex-shrink-0 w-[130px]"/>
                            <button className="" onClick={toggleSidebar}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                            </button>
                        </div>
                        <hr className="my-7"/>
                        <div className="body mt-10 ms-2">
                            <ul>
                                <li className="my-8"><a href="/" className="text-slate-600 flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-house"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
                                    Beranda</a></li>
                                <li className="my-8"><a href="#about" className="text-slate-600 flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-search-slash"><path d="m13.5 8.5-5 5"/><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                                    About</a></li>
                                <li className="my-8"><a href="#service" className="text-slate-600 flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/></svg>
                                    Layanan</a></li>
                                <li className="my-8"><a href="/user/bookmarks" className="text-slate-600 flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-earth"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"/><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17"/><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"/><circle cx="12" cy="12" r="10"/></svg>
                                    Petualangan Saya</a></li>

                                {auth.user ? (
                                    <li className="my-8"><a href="/auth/logout" className="text-slate-600 flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-out"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>
                                        Keluar</a></li>
                                ) : (
                                    <li className="my-8"><a href="/auth/login" className="text-slate-600 flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-log-in"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" x2="3" y1="12" y2="12"/></svg>
                                        Masuk</a></li>
                                )}
                            </ul>
                        </div>
                        <hr className="my-7"/>
                    </div>
                </div>  
            </div>
        </>
    );
}
