import { useEffect, useRef, useState } from "react";
export default function () {
    const [currentIndex, setCurrentIndex] = useState();
    const slidesRef = useRef(null);

    useEffect(() => {
        // slidesRef.current.style.transfor = `translateX(-${currentIndex * 100})`;

        const intervalId = setInterval(() => {
            setCurrentIndex((i) => (i + 1) % 3);
        }, 5000);
        return () => clearInterval(intervalId);
    }, [currentIndex]);

    const images = [
        {
            title: "Pura Agung Besakih",
            src: "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcR8FHZcgZ2PO46Dw01Q-J87BvnJH6KzNIvosCzkCTDu_mN1SvxYxlk_Us12jfWLCndhRFpu7IJzjvsGEOPpR2nNc6jCyDXRq7yU4oqOig",
            captions: "lorem",
        },
        {
            title: "Kepulauan Seribu",
            src: "https://pandooin-com.s3.ap-southeast-1.amazonaws.com/blog/article/images/DDVuMwH8sqlofxi1m3qNs9V7eWvZSLAygYQH3LIV.jpg",
            captions: "lorem",
        },
        {
            title: "Candi Prambanan",
            src: "https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcSUVMW8n0JzoJGSQ_BfquT41zKd2CJtYEubW54wVcsq-6lmTJia22OA2UG1xfCW8ndtKE2MKoXNWkkV8U8pEA7ETUMv9BYMcHmMWFTX3A",
            captions: "lorem",
        },
    ];

    // const handlePrev = () => {
    //     setCurrentIndex((currentIndex + images.length - 1) % images.length);
    // };

    // const handleNext = () => {
    //     setCurrentIndex((currentIndex + 1) % images.length);
    // };
    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handleIndicatorClick = (index) => {
        setCurrentIndex(index);
    };

    return (
        <>
            <div className="relative w-full max-w-lg mx-auto">
                {/* Carousel Images */}
                <div className="overflow-hidden rounded-lg">
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image.src}
                            alt={`Slide ${index + 1}`}
                            className={`w-full transition-transform duration-500 ${
                                index === currentIndex
                                    ? "translate-x-0"
                                    : "translate-x-full"
                            }`}
                            style={{
                                transform: `translateX(${
                                    (index - currentIndex) * 100
                                }%)`,
                            }}
                        />
                    ))}
                </div>

                {/* Previous Button */}
                <button
                    onClick={handlePrev}
                    className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70"
                >
                    &#8592;
                </button>

                {/* Next Button */}
                <button
                    onClick={handleNext}
                    className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black/50 text-white rounded-full p-2 hover:bg-black/70"
                >
                    &#8594;
                </button>

                {/* Dots Indicator */}
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full ${
                                index === currentIndex
                                    ? "bg-white"
                                    : "bg-gray-400"
                            }`}
                        ></button>
                    ))}
                </div>
            </div>
        </>
    );
}
