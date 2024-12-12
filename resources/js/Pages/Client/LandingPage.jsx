import { useState, useEffect, useRef } from "react";
import Navbar from "@/Components/Navbar/Navbar";
import Carousel from "@/Components/Carousel/Carousel";
import SearchPlace from "@/Components/SearchPlace/SearchPlace";
export default function () {
    const [visibleElements, setVisibleElements] = useState([]);
    const [toggleSearch, setToggleSearch] = useState(false);

    useEffect(() => {
        const elements = document.querySelectorAll(".scroll-element");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisibleElements((prev) => [
                            ...prev,
                            entry.target.id,
                        ]);
                    }
                });
            },
            { threshold: 0.1 }
        );

        elements.forEach((el) => observer.observe(el));

        return () => {
            elements.forEach((el) => observer.unobserve(el));
        };
    }, []);
    return (
        <div className="">
            <Navbar />
            {toggleSearch && <SearchPlace setToggleSearch={setToggleSearch} />}
            <section id="hero">
                <div className="flex justify-between items-end mt-10">
                    <div className="mt-10">
                        <p className="bg-orange-200 text-orange-500 w-max px-3 py-1 rounded-full text-xs font-medium tracking-wide mb-2">
                            Cari Tempat Liburanmu
                        </p>
                        <h1 className="font-semibold text-[50px] leading-[1.2]">
                            Pesona Wisata <br /> Keindahan Indonesia !{" "}
                        </h1>
                        <p className="text-sm mt-5 text-slate-600">
                            Jelajahi Indonesia, negeri yang kaya akan
                            keberagaman budaya. Setiap langkah <br /> membawa
                            cerita unik, tradisi memikat, dan keindahan yang tak
                            tertandingi.
                        </p>
                        <div className="mt-8">
                            <div
                                className="flex items-center gap-3 w-max group cursor-pointer"
                                onClick={() => setToggleSearch(true)}
                            >
                                <div className="border-orange-600 border w-max p-4 rounded-full">
                                    <div className="w-[5px] h-[5px] bg-orange-600 rounded-full"></div>
                                </div>
                                <p className="text-orange-600 text-sm tracking-wide">
                                    Explore with us
                                </p>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    fill="#ea580c"
                                    className="bi bi-arrow-up-right duration-100 group-hover:rotate-[45deg]"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
                                    />
                                </svg>

                                {/* <div className="hidden group-hover:block absolute w-[90px] h-[40px] bg-orange-600">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" className="bi bi-arrow-up-right" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"/>
                                    </svg>
                                </div> */}
                            </div>
                            <button className=""></button>
                        </div>
                        <div className="mt-10">
                            <div className="flex items-center gap-6">
                                <div className="text-center">
                                    <h1 className="text-3xl font-semibold text-slate-800">
                                        99+
                                    </h1>
                                    <p className="text-xs text-slate-500 tracking-wider">
                                        Daftar Pengguna
                                    </p>
                                </div>
                                <div className="w-[1px] h-[18px] bg-slate-600"></div>
                                <div className="text-center">
                                    <h1 className="text-3xl font-semibold text-slate-800">
                                        24
                                    </h1>
                                    <p className="text-xs text-slate-500 tracking-wider">
                                        Dukungan Tempat
                                    </p>
                                </div>
                                <div className="w-[1px] h-[18px] bg-slate-600"></div>
                                <div className="text-center">
                                    <h1 className="text-3xl font-semibold text-slate-800">
                                        50%
                                    </h1>
                                    <p className="text-xs text-slate-500 tracking-wider">
                                        Ulasan Pengguna
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative w-[600px] h-[400px] overflow-hidden cursor-pointer group rounded-lg  ">
                        <img
                            src="https://www.papuaparadise.com/wp-content/uploads/2017/09/bungalows-1200x800.jpg"
                            alt="img hero"
                            width="100%"
                        />
                        <div className="detail absolute bottom-[-140px] group-hover:bottom-[0] bg-white/30 backdrop-blur-sm w-full h-[140px] transition-all duration-700 ">
                            <div className="p-5">
                                <h1 className="text-white text-2xl tracking-wide">
                                    Pantai Raja Ampat: Surga Tropis di Timur
                                </h1>
                                <div className="flex mt-1">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="#fff"
                                        className="bi bi-geo-alt"
                                        viewBox="0 0 16 16"
                                    >
                                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
                                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                                    </svg>
                                    <p className="text-xs text-white opacity-75 tracking-wide ms-2 font-thin">
                                        Lombok, Papua Timur
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="bg-slate-100 w-full my-36">
                <div className="flex items-center justify-center opacity-[40%] py-5 gap-10">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTD6NiLBrpE5XvpewWqMsu-BadPFEvnO0XbdA&s"
                        alt="logo"
                        width="100px"
                    />
                    <img
                        src="https://bob.kemenparekraf.go.id/wp-content/uploads/2021/03/logobob-vertikal.png"
                        alt="logo"
                        width="100px"
                    />
                    <img
                        src="https://www.itdc.co.id/assets/frontend/images/Logo%20ITDC%20Footer-R01.png"
                        alt="logo"
                        width="100px"
                    />
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/0/06/Logo_of_the_Ministry_of_Environmental_Affairs_and_Forestry_of_the_Republic_of_Indonesia.svg"
                        alt="logo"
                        width="100px"
                    />
                </div>
            </div>
            <section id="pictures">
                <div className="my-36 flex justify-center gap-10">
                    <div className="w-[340px] h-[500px] bg-slate-500 rounded-xl overflow-hidden img-container">
                        <img
                            src="https://static.promediateknologi.id/crop/0x443:1080x1594/0x0/webp/photo/p2/74/2024/07/23/Screenshot_20240723_133757-1777239886.jpg"
                            alt="img hero"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col gap-10">
                        <div className="flex gap-10">
                            <div className="w-[260px] h-[300px] bg-slate-500 rounded-xl overflow-hidden img-container">
                                <img
                                    src="https://cdn1-production-images-kly.akamaized.net/VnEjXk8r4It9cjTdVzsBbDigrT4=/1200x900/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/4705607/original/017465500_1704327428-0605-2019-095274612357121986427-01-HDR-2.jpg"
                                    alt="img hero"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col gap-10">
                                <div className="w-[400px] h-[130px] bg-slate-500 rounded-xl overflow-hidden img-container">
                                    <img
                                        src="https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcTX-cGHDLFVp5tUu9rvafUCVzvsRtW15ArL6LEybdMH8V_tlHm1tE3XbO-hzZKZaNki39bHIQVAVKWtOH-mGlfOd5n_kws-d3vuO5EX-w"
                                        alt="img hero"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="w-[400px] h-[130px] bg-slate-500 rounded-xl overflow-hidden img-container">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcQ9o6aN8EN8Vq-CxZynZKcDH_hqDXLQdDBlr_1kWP2lQFOCac4dcq7lVCJk6SzPFsPqrvQ4vmCS5TGmkfnZVsyGWTuVD2XTV15sl1KTlw"
                                        alt="img hero"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-[160px] bg-slate-500 rounded-xl overflow-hidden img-container">
                            <img
                                src="https://lh5.googleusercontent.com/p/AF1QipPpfGfo-URFdLvXf4sVa13JKsbBxvOs5w2VN0Hv=w675-h390-n-k-no"
                                alt="img hero"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* <img src="https://www.papuaparadise.com/wp-content/uploads/2017/09/bungalows-1200x800.jpg" alt="img hero" width="100%" /> */}
                {/* <h5 className="text-[50px]">ELAINA CANTIK</h5> */}
                {/* <img src="https://www.papuaparadise.com/wp-content/uploads/2017/09/bungalows-1200x800.jpg" alt="img hero" width="100%" className="keren" /> */}
            </section>
            <section className="w-full bg-black h-[900px] m-0 relative p-10 ">
                <img
                    src="https://www.papuaparadise.com/wp-content/uploads/2017/09/bungalows-1200x800.jpg"
                    alt=""
                    className="absolute w-full h-full object-cover top-0 left-0 opacity-15"
                />
                <div className="w-full h-1/3">
                    <h1
                        id="discover-heading"
                        className={`text-white text-[46px] text-center font-semibold mt-2 transition-all duration-700 ease-in-out scroll-element ${
                            visibleElements.includes("discover-heading")
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                        }`}
                    >
                        Explore indonesia dengan Peta Nusa
                    </h1>
                    <p
                        id="discover-paragraph"
                        className={`text-white font-medium text-xl my-8 w-1/2 text-center mx-auto transition-all duration-1000 ease-in-out scroll-element ${
                            visibleElements.includes("discover-paragraph")
                                ? "opacity-70 translate-y-0"
                                : "opacity-0 translate-y-10"
                        }`}
                    >
                        Rencanakan perjalanan Anda dengan mudah dan temukan
                        pengalaman tak terlupakan di setiap sudut Indonesia.
                        Nikmati keindahan alam, budaya, dan kuliner terbaik dari
                        Sabang sampai Merauke.
                    </p>
                </div>

                <div className="flex w-full h-2/3 gap-3 z-10 relative">
                    <div className="w-1/4 flex flex-col gap-2">
                        <img
                            src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcT-1xEEM5OHDLDcVB6lL2zuUXvpmrwr-DG2l3wyabv3X9CkbbPKWCNCvcSUPhZ_PgXDPMhZyea4bd_-_Hlnu-I8hUngNHCAnFCOCp678A"
                            alt="img hero"
                            className="w-full h-4/5 object-cover rounded-lg"
                        />
                        <div className="w-full h-1/5 pt-2">
                            <h3 className="text-white font-semibold text-lg">
                                Danau Toba
                            </h3>
                            <p className="text-white opacity-80 text-base">
                                Danau vulkanik terbesar di Asia Tenggara,
                                menawarkan pemandangan indah dan budaya Batak
                                yang kaya.
                            </p>
                        </div>
                    </div>
                    <div className="w-1/4 flex flex-col gap-2">
                        <img
                            src="https://img.freepik.com/free-photo/mountainous-landscape-with-volcano_1150-18285.jpg?t=st=1733840731~exp=1733844331~hmac=bcf6b18f5ade1028f3cdd9d352288c242665879a62c21249c59ac7d627c0952f&w=360"
                            alt="img hero"
                            className="w-full h-4/5 object-cover rounded-lg"
                        />
                        <div className="w-full h-1/5 pt-2">
                            <h3 className="text-white font-semibold text-lg">
                                Kawah Ijen
                            </h3>
                            <p className="text-white opacity-80 text-base">
                                Gunung dengan pemandangan yang unik. Saksikan
                                keindahan kawah hijau dan fenomena api biru yang
                                memukau.
                            </p>
                        </div>
                    </div>
                    <div className="w-1/4 flex flex-col gap-2">
                        <img
                            src="https://cdn1-production-images-kly.akamaized.net/VEQfFu1vEW4Y6iQysNKhAf-bApY=/500x667/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/3237606/original/098140300_1600083527-79733397_190837218765304_7097785988066329390_n.jpg"
                            alt="img hero"
                            className="w-full h-4/5 object-cover rounded-lg"
                        />
                        <div className="w-full h-1/5 pt-2">
                            <h3 className="text-white font-semibold text-lg">
                                Pantai Pink
                            </h3>
                            <p className="text-white opacity-80 text-base">
                                Pasir pink yang langka dan air sebening kristal
                                menunggu untuk kamu jelajahi. Surga kecil ini
                                hanya ada di Lombok!
                            </p>
                        </div>
                    </div>
                    <div className="w-1/4 flex flex-col gap-2">
                        <img
                            src="https://i2.wp.com/blog.tripcetera.com/id/wp-content/uploads/2020/01/pantai-tanjung-kelayang-credit-image-@v_johni.jpg"
                            alt="img hero"
                            className="w-full h-4/5 object-cover rounded-lg"
                        />
                        <div className="w-full h-1/5 pt-2">
                            <h3 className="text-white font-semibold text-lg">
                                Pantai Tanjung Kelayang
                            </h3>
                            <p className="text-white opacity-80 text-base">
                                Temukan keajaiban pantai dengan batu granit
                                ikonik dan air biru tenang. Rasakan pesonanya di
                                Belitung
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-16">
                <div className="flex flex-row justify-evenly">
                    <p
                        id="layanan-kiri"
                        className={`w-1/5 transition-all duration-700 scroll-element ${
                            visibleElements.includes("layanan-kiri")
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                        }`}
                    >
                        Mulai Berjelajah
                    </p>
                    <h2
                        id="layanan-tengah"
                        className={`w-[30%] font-semibold text-[30px] transition-all duration-[900ms] scroll-element ${
                            visibleElements.includes("layanan-tengah")
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                        }`}
                    >
                        Eksplorasi Keindahan Alam Indonesia yang Tiada Tanding
                    </h2>
                    <p
                        id="layanan-kanan"
                        className={`w-1/4 text-justify text-lg duration-[1100ms] scroll-element ${
                            visibleElements.includes("layanan-kanan")
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-10"
                        }`}
                    >
                        Temukan berbagai tempat menakjubkan, seperti pantai
                        pasir putih, pulau-pulau tersembunyi, hingga kawah
                        berapi yang menantang. Setiap sudut Indonesia memberikan
                        petualangan yang berbeda dan memikat.
                    </p>
                </div>
                <div className="flex flex-row justify-between items-end w-full py-2 mt-5 gap-3">
                    <div className="flex-1 h-[446px] bg-black rounded-lg overflow-hidden relative">
                        <img
                            src="data:image/png;base64,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"
                            alt="img hero"
                            className="h-full object-cover absolute left-0 top-0"
                        />
                        <div className="w-full bottom-0 left-0 h-1/5 absolute  flex flex-col justify-end">
                            <p className="font-semibold text-slate-200 text-xl tracking-wide p-4">
                                Cari Lokasi Tujuanmu!
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 h-[392px] bg-black rounded-lg overflow-hidden relative">
                        <img
                            src="https://cdngnfi2.sgp1.digitaloceanspaces.com/gnfi/uploads/articles/gunung-batur-bali-gunung-berapi-purba-indah-dengan-kawah-kalderanya-yang-menawan-40c9.jpg"
                            alt="img hero"
                            className="h-full object-cover absolute left-0 top-0"
                        />
                        <div className="w-full bottom-0 left-0 h-1/5 absolute flex flex-col justify-end">
                            <p className="font-semibold bg-slate-700/15 text-slate-200 text-xl tracking-wide p-4 drop-shadow-md">
                                Lihat & Review Tempat yang Sudah Dijelajahi
                            </p>
                        </div>
                    </div>
                    <div className="flex-1 h-[392px] bg-black rounded-lg overflow-hidden relative">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcRCXK1xauVoJg31B6oqsctyzVOpVxfREcqeB6OoPQQXQNUGa1ihrXB84F1CFwkK2DUk4aBOrXv9LPV0U-MNIheApRKFoJRvx3lP7NmvfJA"
                            alt="img hero"
                            className="h-full object-cover absolute left-0 top-0"
                        />
                        <div className="w-full bottom-0 left-0 h-1/5 absolute flex flex-col justify-end">
                            <p className="font-semibold bg-slate-700/15 text-slate-200 text-xl tracking-wide p-4 drop-shadow-md">
                                Ngobrol dengan Chatbot Pendamping Perjalanan
                            </p>
                        </div>
                    </div>

                    <Carousel />
                </div>
            </section>

            <footer className="p-4 bg-white border-t-2 sm:p-6">
                <div className="mx-auto max-w-screen-xl">
                    <div className="md:flex md:justify-between">
                        <div className="mb-6 md:mb-0 flex items-start">
                            <img
                                src="https://i.ibb.co.com/XSmd6vF/peta-nusa-logo-2.png"
                                className="h-10"
                                alt="PetaNusa Logo"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-2">
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                                    TENTANG KAMI
                                </h2>
                                <ul className="text-gray-600 ">
                                    <li className="mb-4">
                                        <a
                                            href="https://github.com/Orang-Orangan-Siber"
                                            className="hover:underline "
                                        >
                                            Tentang Peta Nusa
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="mailto:randdevs54@gmail.com"
                                            className="hover:underline"
                                        >
                                            Kontak Kami
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                                    IKUTI KAMI
                                </h2>
                                <ul className="text-gray-600 ">
                                    <li className="mb-4">
                                        <a
                                            href="https://github.com/iyasz"
                                            className="hover:underline"
                                        >
                                            Github
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://www.instagram.com/yaszavellia/"
                                            className="hover:underline"
                                        >
                                            Instagram
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <span className="text-sm text-gray-500 sm:text-center ">
                            © 2024 Peta Nusa
                        </span>
                        <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                            <a
                                href="https://www.instagram.com/rafi_feranda/"
                                className="text-gray-500 hover:scale-110 "
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>

                            <a
                                href="mailto:randdevs54@gmail.com"
                                className="text-gray-500 "
                            >
                                <svg
                                    className="w-[25px] h-[25px] align-middle hover:scale-110 transition-all"
                                    fill="none"
                                    stroke="#6b7280"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={1.5}
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M19.875 4.5H4.125c-1.036 0-1.875.84-1.875 1.875v11.25c0 1.035.84 1.875 1.875 1.875h15.75c1.035 0 1.875-.84 1.875-1.875V6.375c0-1.036-.84-1.875-1.875-1.875Z" />
                                    <path d="M5.25 7.5 12 12.75l6.75-5.25" />
                                </svg>
                            </a>
                            <a
                                href="https://github.com/iyasz"
                                className="text-gray-500 hover:scale-110"
                            >
                                <svg
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}
