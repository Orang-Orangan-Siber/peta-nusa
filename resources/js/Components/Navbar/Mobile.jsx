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
                <div className={`content w-[350px] h-full fixed right-0 bottom-0 top-0 z-[999] bg-white duration-300 ${ isSidebarVisible ? 'translate-x-[0]' : 'translate-x-[100%]'}`}>
                    <div className="p-3">
                        <div className="header flex justify-center items-center">
                            <img src="https://i.ibb.co.com/XSmd6vF/peta-nusa-logo-2.png" alt="logo" className="logo-brand flex-shrink-0 w-[130px]"/>
                            <button className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
                            </button>
                        </div>
                    </div>
                </div>  
            </div>
        </>
    );
}
