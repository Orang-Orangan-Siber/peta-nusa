import React from "react";
import { Link, usePage } from "@inertiajs/react";

export default function () {
    const { auth } = usePage().props;

    return (
        <>
            <div className="w-full bg-orange-50 h-[50px] flex items-center justify-center">
                <p className="lg:text-sm text-xs text-slate-400 tracking-wide">
                    Ada tempat baru nih! Yuk kunjungi sekarang!{" "}
                    <a href="" className="text-orange-400 hover:underline">
                        Klik disini
                    </a>
                </p>
            </div>
            <nav className="w-full py-4 bg-white border-b sticky top-[0] left-[0] right-[0] z-[100]">
                <div className="flex items-center justify-between lg:mx-16 mx-4">
                    <div className="navbar-brand flex items-center">
                        <a href="/" className="font-bold text-2xl">
                            <img
                                src="https://i.ibb.co.com/XSmd6vF/peta-nusa-logo-2.png"
                                alt="logo"
                                className="logo-brand flex-shrink-0 lg:w-[150px] w-[120px]"
                            />
                        </a>
                    </div>

                    <div className="lg:block hidden">
                        <ul className="flex gap-7 text-sm text-slate-500 tracking-wide font-medium">
                            <li>
                                <a href="/" className=" hover:text-slate-900">
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

                    {auth.user ? (
                        <div className="lg:block md:block hidden text-sm">
                            <Link 
                                href="/auth/logout" 
                                method="post"  // Penting: menggunakan method POST
                                as="button"    // Render sebagai tombol

                            >
                                Logout
                            </Link>
                        </div>
                    ) : (
                        <div className="lg:block md:block hidden">
                            <a
                                href="/auth/login"
                                className="border border-orange-600 px-6 py-3 text-sm text-orange-600"
                            >
                                Masuk
                            </a>
                            <a
                                href="/auth/register"
                                className="border border-orange-600 bg-orange-600 px-6 py-3 text-white text-sm ms-2"
                            >
                                Daftar
                            </a>
                        </div>
                    )}
                </div>
            </nav>
        </>
    );
}
