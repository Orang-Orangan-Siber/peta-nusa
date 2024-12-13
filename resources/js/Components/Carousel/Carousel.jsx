import { useEffect, useRef, useState } from "react";
export default function () {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slidesRef = useRef(null);
    useEffect(() => {
        slidesRef.current.style.transform = `translateX(-${
            currentIndex * 100
        }%)`;

        const intervalId = setInterval(() => {
            setCurrentIndex((i) => (i + 1) % 3);
        }, 5000);
        return () => clearInterval(intervalId);
    }, [currentIndex]);

    const images = [
        {
            title: "Pura Agung Besakih",
            src: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcR8FHZcgZ2PO46Dw01Q-J87BvnJH6KzNIvosCzkCTDu_mN1SvxYxlk_Us12jfWLCndhRFpu7IJzjvsGEOPpR2nNc6jCyDXRq7yU4oqOig",
            captions:
                "Nikmati ketenangan spiritual di Pura Agung Besakih, pura terbesar dan tertua di Bali dengan pemandangan Gunung Agung yang megah.",
        },
        {
            title: "Kepulauan Seribu",
            src: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcR0jEclGy043PxA0yEXo6_IYlChF1jwGnolmAWiqsviPbTL_BRyu30H_QRA7k5nEav5i3FuLYALQlp1ivBf_75PKJQpMwG62IYxhOyOTQ",
            captions:
                "Surga tersembunyi di dekat Jakarta! Jelajahi pulau-pulau eksotis, snorkeling di air jernih, dan nikmati liburan tropis yang tak terlupakan.",
        },
        {
            title: "Candi Prambanan",
            src: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSUVMW8n0JzoJGSQ_BfquT41zKd2CJtYEubW54wVcsq-6lmTJia22OA2UG1xfCW8ndtKE2MKoXNWkkV8U8pEA7ETUMv9BYMcHmMWFTX3A",
            captions:
                "Saksikan keagungan warisan dunia di Candi Prambanan, kompleks candi Hindu terbesar di Indonesia dengan arsitektur yang memukau.",
        },
    ];

    const handleNext = () => {
        setCurrentIndex((currentIndex + 1) % images.length);
    };

    const handlePrev = () => {
        setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    };

    const handleIndicatorClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <>
            <div className="lg:flex-[2] lg:h-[392px] md:w-[49%] md:h-[364px] h-[334px] bg-black rounded-lg relative overflow-hidden">
                <div className="flex flex-row justify-center gap-4 absolute top-2 left-0 h-[10%] w-full z-10">
                    {images.map((_, index) => {
                        return (
                            <div
                                className={`w-10 h-[6px] rounded-md z-10 transition-all cursor-pointer ${
                                    currentIndex === index
                                        ? "bg-slate-100"
                                        : "bg-slate-700 "
                                }`}
                                key={index}
                                onClick={() => handleIndicatorClick(index)}
                            ></div>
                        );
                    })}
                </div>
                <div className="flex justify-between absolute top-[50%] translate-y-[-50%] z-10 w-full">
                    <button className="p-2 ml-1" onClick={handlePrev}>
                        <svg
                            className="md:w-9 md:h-9 w-7 h-7"
                            fill="#f1f5f9"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M2.25 12c0 5.384 4.365 9.75 9.75 9.75 5.384 0 9.75-4.366 9.75-9.75 0-5.385-4.366-9.75-9.75-9.75A9.75 9.75 0 0 0 2.25 12Zm10.5-3.754L9.77 11.25h7.011v1.5H9.77l2.98 3.004-1.064 1.057L6.912 12l4.774-4.81 1.064 1.056Z" />
                        </svg>
                    </button>
                    <button className=" p-2 mr-1" onClick={handleNext}>
                        <svg
                            className="md:w-9 md:h-9 w-7 h-7"
                            fill="#f1f5f9"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path d="M21.75 12c0-5.385-4.366-9.75-9.75-9.75A9.75 9.75 0 0 0 2.25 12c0 5.384 4.365 9.75 9.75 9.75 5.384 0 9.75-4.366 9.75-9.75Zm-10.5 3.754 2.98-3.004H7.22v-1.5h7.011l-2.98-3.004 1.065-1.057L17.087 12l-4.774 4.81-1.064-1.056Z" />
                        </svg>
                    </button>
                </div>

                <div
                    className="w-full h-full flex flex-row z-0 transition-all relative"
                    ref={slidesRef}
                >
                    {images.map((image, index) => {
                        return (
                            <>
                                <img
                                    key={index}
                                    src={image.src}
                                    alt="img hero"
                                    className={`w-full h-full object-cover `}
                                />
                            </>
                        );
                    })}
                </div>
                <div className="w-full lg:h-[35%] md:h-[38%] lg:p-4 p-3 absolute bottom-0 bg-slate-600/20 z-10 backdrop-blur-sm">
                    <h2 className="text-slate-100 font-semibold text-xl md:text-lg transition-all">
                        {images[currentIndex].title}
                    </h2>
                    <p className="text-slate-100/80 lg:py-2 py-1 lg:text-base text-sm tracking-wide">
                        {images[currentIndex].captions}
                    </p>
                </div>
            </div>
        </>
    );
}
