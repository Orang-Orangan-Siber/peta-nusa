import React from "react";
import Navbar from "@/Components/Navbar/Navbar";
import { useState } from "react";
import { useForm } from "@inertiajs/react";


export default function ({ bookmarks }) {

    const bookmarksData = bookmarks

    const { delete: deleteRequest } = useForm();
 
    const handleDelete = (slug) => {
        if (!confirm("Apakah anda ingin menghapus data ini?")) {
            return;
        }
    
        deleteRequest(route("bookmark.destroy", { slug }));
    };

    return (
        <>
            <Navbar />
            <div className="lg:mx-16 md:mx-8 mx-3 my-10">
                <h1 className="text-3xl font-semibold mb-7 text-center text-gray-900">
                    <div className="flex justify-center">
                        <p className="bg-orange-200 text-orange-500 w-max px-3 py-1 rounded-full text-xs font-medium tracking-wide mb-2">
                            Cari Tempat Liburanmu
                        </p>
                    </div>
                    Daftar Destinasimu
                </h1>
                {bookmarksData.length > 0 ? (
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 md:gap-4 gap-2">
                        {bookmarksData.map((bookmark) => (
                        <div key={bookmark.id} className="bg-white rounded-lg border border-gray-300/30 flex flex-col">
                            <img
                            src={bookmark.destination.thumbnail}
                            alt={bookmark.destination.name}
                            className="w-full md:h-48 h-[140px] object-cover rounded-t-lg mb-4"
                            />
                            <div className="w-full px-4">
                            <h2 className="md:text-lg text-sm font-bold mb-2 leading-[1.2]">{bookmark.destination.name}</h2>
                            <p className="text-gray-600 lg:text-sm text-xs">{bookmark.destination.tagline}</p>
                            </div>
                            <div className="flex flex-row justify-end gap-2 mt-auto p-4 w-full">
                            <a
                                href={'/detail/' + bookmark.destination.slug}
                                className="border border-orange-500 text-orange-500 p-2 md:w-full w-max hover:bg-orange-500 hover:text-slate-100 transition-all rounded-md text-center text-sm"
                            >
                                <span className="md:block hidden">Lihat Detail</span>
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="17"
                                height="17"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-eye md:hidden block"
                                >
                                <path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0" />
                                <circle cx="12" cy="12" r="3" />
                                </svg>
                            </a>
                            <button
                                onClick={(e) => {
                                e.preventDefault();
                                handleDelete(bookmark.destination.slug);
                                }}
                                className="w-max bg-orange-500 rounded-md px-3 hover:bg-orange-600 transition-all"
                            >
                                <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="17"
                                height="17"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="#fff"
                                strokeWidth="1.25"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-trash-2"
                                >
                                <path d="M3 6h18" />
                                <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
                                <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
                                <line x1="10" x2="10" y1="11" y2="17" />
                                <line x1="14" x2="14" y1="11" y2="17" />
                                </svg>
                            </button>
                            </div>
                        </div>
                        ))}
                    </div>
                    ) : (
                        <div className="text-center mt-28">
                            <p className="md:text-[24px] text-sm text-slate-600 ">Oops, No bookmarks found ...</p>
                        </div>
                    )}

            </div>
        </>
    );
}
