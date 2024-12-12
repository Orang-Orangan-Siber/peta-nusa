import React from "react";
import Navbar from "@/Components/Navbar/Navbar";
export default function () {
    const bookmarks = [
        {
            id: 1,
            image: "https://picsum.photos/200/300",
            title: "Bookmark 1",
            description:
                "This is a description for bookmark 1, lorem ipsum dolor sit amet",
        },
        {
            id: 2,
            image: "https://picsum.photos/200/301",
            title: "Bookmark 2",
            description:
                "This is a description for bookmark 2, Lorem ipsum dolor sit amet, consectetur ",
        },
        {
            id: 3,
            image: "https://picsum.photos/200/302",
            title: "Bookmark 3",
            description: "This is a description for bookmark 3",
        },
        {
            id: 4,
            image: "https://picsum.photos/200/303",
            title: "Bookmark 4",
            description: "This is a description for bookmark 4",
        },
        {
            id: 5,
            image: "https://picsum.photos/200/304",
            title: "Bookmark 5",
            description: "This is a description for bookmark 5",
        },
        {
            id: 6,
            image: "https://picsum.photos/200/305",
            title: "Bookmark 6",
            description: "This is a description for bookmark 6",
        },
        {
            id: 7,
            image: "https://picsum.photos/200/306",
            title: "Bookmark 7",
            description: "This is a description for bookmark 7",
        },
        {
            id: 8,
            image: "https://picsum.photos/200/307",
            title: "Bookmark 8",
            description: "This is a description for bookmark 8",
        },
    ];

    return (
        <>
            <Navbar />
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-semibold mb-4 text-center text-gray-900">
                    Daftar Destinasimu
                </h1>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {bookmarks.map((bookmark) => (
                        <div
                            key={bookmark.id}
                            className="bg-white rounded-lg shadow-md p-4 border border-gray-300/30 flex flex-col justify-between"
                        >
                            <div className="w-full">
                                <img
                                    src={bookmark.image}
                                    alt={bookmark.title}
                                    className="w-full h-48 object-cover rounded-lg mb-4"
                                />
                                <h2 className="text-lg font-bold mb-2">
                                    {bookmark.title}
                                </h2>
                                <p className="text-gray-600">
                                    {bookmark.description}
                                </p>
                            </div>
                            <div className="flex flex-row gap-2 w-full space-between mt-2">
                                <button className="border border-orange-500 text-orange-500 p-2 w-4/5 hover:bg-orange-500 hover:text-slate-100 transition-all rounded-md">
                                    Lihat Detail
                                </button>
                                <div className="w-1/5 bg-orange-500 rounded-md flex items-center justify-center cursor-pointer hover:bg-orange-600 transition-all">
                                    <svg
                                        fill="#f1f5f9"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-7 h-7"
                                    >
                                        <path d="M20.979 4.5H15.75V2.25A.75.75 0 0 0 15 1.5H9a.75.75 0 0 0-.75.75V4.5H3.021L3 6.375h1.547l.942 14.719A1.5 1.5 0 0 0 6.984 22.5h10.032a1.5 1.5 0 0 0 1.496-1.404l.941-14.721H21L20.979 4.5ZM8.25 19.5l-.422-12h1.547l.422 12H8.25Zm4.5 0h-1.5v-12h1.5v12Zm1.125-15h-3.75V3.187A.188.188 0 0 1 10.313 3h3.374a.188.188 0 0 1 .188.188V4.5Zm1.875 15h-1.547l.422-12h1.547l-.422 12Z" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}
