import { useState, useEffect, useRef } from "react";
import Navbar from "@/Components/Navbar/Navbar";
export default function () {
    const [visibleElements, setVisibleElements] = useState([]);

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
                            <a
                                href=""
                                className="flex items-center gap-3 w-max group"
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
                            src="https://www.papuaparadise.com/wp-content/uploads/2017/09/bungalows-1200x800.jpg"
                            alt="img hero"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="flex flex-col gap-10">
                        <div className="flex gap-10">
                            <div className="w-[260px] h-[300px] bg-slate-500 rounded-xl overflow-hidden img-container">
                                <img
                                    src="https://www.papuaparadise.com/wp-content/uploads/2017/09/bungalows-1200x800.jpg"
                                    alt="img hero"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="flex flex-col gap-10">
                                <div className="w-[400px] h-[130px] bg-slate-500 rounded-xl overflow-hidden img-container">
                                    <img
                                        src="https://www.papuaparadise.com/wp-content/uploads/2017/09/bungalows-1200x800.jpg"
                                        alt="img hero"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="w-[400px] h-[130px] bg-slate-500 rounded-xl overflow-hidden img-container">
                                    <img
                                        src="https://www.papuaparadise.com/wp-content/uploads/2017/09/bungalows-1200x800.jpg"
                                        alt="img hero"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="w-full h-[160px] bg-slate-500 rounded-xl overflow-hidden img-container">
                            <img
                                src="https://www.papuaparadise.com/wp-content/uploads/2017/09/bungalows-1200x800.jpg"
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
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Quam inventore numquam quis aspernatur molestias
                        deserunt alias nobis vitae quia nemo! Lorem ipsum dolor
                        sit amet consectetur adipisicing elit. Quo, quis.
                    </p>
                </div>

                <div class="flex w-full h-2/3 gap-2 z-10 relative">
                    <div className="w-1/4 flex flex-col gap-2">
                        <img
                            src="https://www.papuaparadise.com/wp-content/uploads/2017/09/bungalows-1200x800.jpg"
                            alt="img hero"
                            className="w-full h-4/5 object-cover rounded-lg"
                        />
                        <div className="w-full h-1/5 pt-2">
                            <h3 className="text-white font-semibold text-lg">
                                Pulau Gading
                            </h3>
                            <p className="text-white opacity-80 text-base">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Consectetur, architecto.
                            </p>
                        </div>
                    </div>
                    <div className="w-1/4 flex flex-col gap-2">
                        <img
                            src="https://www.papuaparadise.com/wp-content/uploads/2017/09/bungalows-1200x800.jpg"
                            alt="img hero"
                            className="w-full h-4/5 object-cover rounded-lg"
                        />
                        <div className="w-full h-1/5 pt-2">
                            <h3 className="text-white font-semibold text-lg">
                                Pulau Gading
                            </h3>
                            <p className="text-white opacity-80 text-base">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Consectetur, architecto.
                            </p>
                        </div>
                    </div>
                    <div className="w-1/4 flex flex-col gap-2">
                        <img
                            src="https://www.papuaparadise.com/wp-content/uploads/2017/09/bungalows-1200x800.jpg"
                            alt="img hero"
                            className="w-full h-4/5 object-cover rounded-lg"
                        />
                        <div className="w-full h-1/5 pt-2">
                            <h3 className="text-white font-semibold text-lg">
                                Pulau Gading
                            </h3>
                            <p className="text-white opacity-80 text-base">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Consectetur, architecto.
                            </p>
                        </div>
                    </div>
                    <div className="w-1/4 flex flex-col gap-2">
                        <img
                            src="https://www.papuaparadise.com/wp-content/uploads/2017/09/bungalows-1200x800.jpg"
                            alt="img hero"
                            className="w-full h-4/5 object-cover rounded-lg"
                        />
                        <div className="w-full h-1/5 pt-2">
                            <h3 className="text-white font-semibold text-lg">
                                Pulau Gading
                            </h3>
                            <p className="text-white opacity-80 text-base">
                                Lorem ipsum dolor sit amet consectetur,
                                adipisicing elit. Consectetur, architecto.
                            </p>
                        </div>
                    </div>
                </div>
                {/* <img
                    src="https://www.papuaparadise.com/wp-content/uploads/2017/09/bungalows-1200x800.jpg"
                    alt="bg-image"
                    className="w-full h-full object-cover opacity-15 absolute top-0 left-0 z-[-0]"
                /> */}
            </section>

            <section className="py-16">
                <div className="flex flex-row justify-evenly">
                    <p className="w-1/5">The raja airport</p>
                    <h2 className="w-[30%] font-semibold text-[34px]">
                        The Unmatched Beauty of Archipelago
                    </h2>
                    <p className="w-1/4 text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Odit sed provident tempora dolorem molestiae, ab quos
                        facilis placeat nulla labore aspernatur perspiciatis
                        nobis, natus doloribus accusantium eveniet
                        reprehenderit, soluta delectus?
                    </p>
                </div>
                <div className="flex flex-row justify-between items-end w-full py-2 mt-5 gap-3">
                    <div className="flex-1 h-[446px] bg-black rounded-lg overflow-hidden relative">
                        <img
                            src="https://www.papuaparadise.com/wp-content/uploads/2017/09/bungalows-1200x800.jpg"
                            alt="img hero"
                            className="h-full object-cover absolute left-0 top-0"
                        />
                    </div>
                    <div className="flex-1 h-[392px] bg-black rounded-lg overflow-hidden relative">
                        <img
                            src="https://www.papuaparadise.com/wp-content/uploads/2017/09/bungalows-1200x800.jpg"
                            alt="img hero"
                            className="h-full object-cover absolute left-0 top-0"
                        />
                    </div>
                    <div className="flex-1 h-[392px] bg-black rounded-lg overflow-hidden relative">
                        <img
                            src="https://www.papuaparadise.com/wp-content/uploads/2017/09/bungalows-1200x800.jpg"
                            alt="img hero"
                            className="h-full object-cover absolute left-0 top-0"
                        />
                    </div>
                    <div className="flex-[2] h-[392px] bg-black rounded-lg overflow-hidden relative">
                        <img
                            src="https://www.papuaparadise.com/wp-content/uploads/2017/09/bungalows-1200x800.jpg"
                            alt="img hero"
                            className="w-full h-full object-cover absolute left-0 top-0"
                        />
                    </div>
                </div>
            </section>

            <footer class="p-4 bg-white border-t-2 sm:p-6">
                <div class="mx-auto max-w-screen-xl">
                    <div class="md:flex md:justify-between">
                        <div class="mb-6 md:mb-0 flex items-start">
                            <img
                                src="https://i.ibb.co.com/XSmd6vF/peta-nusa-logo-2.png"
                                class="h-10"
                                alt="PetaNusa Logo"
                            />
                        </div>
                        <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                            <div>
                                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                                    Footer
                                </h2>
                                <ul class="text-gray-600 ">
                                    <li class="mb-4">
                                        <a
                                            href="https://flowbite.com"
                                            class="hover:underline"
                                        >
                                            Infokan
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://tailwindcss.com/"
                                            class="hover:underline"
                                        >
                                            Ide text
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                                    Follow us
                                </h2>
                                <ul class="text-gray-600 ">
                                    <li class="mb-4">
                                        <a
                                            href="https://github.com/themesberg/flowbite"
                                            class="hover:underline "
                                        >
                                            Github
                                        </a>
                                    </li>
                                    <li>
                                        <a
                                            href="https://discord.gg/4eeurUVvTy"
                                            class="hover:underline"
                                        >
                                            Discord
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase ">
                                    Infokan
                                </h2>
                                <ul class="text-gray-600 ">
                                    <li class="mb-4">
                                        <a href="#" class="hover:underline">
                                            Ide text
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" class="hover:underline">
                                            Buat footer
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <div class="sm:flex sm:items-center sm:justify-between">
                        <span class="text-sm text-gray-500 sm:text-center ">
                            © 2024 Peta Nusa
                        </span>
                        <div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
                            <a href="#" class="text-gray-500 hover:scale-110 ">
                                <svg
                                    class="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                            </a>

                            <a href="#" class="text-gray-500 ">
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
                            <a href="#" class="text-gray-500 hover:scale-110">
                                <svg
                                    class="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    aria-hidden="true"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                        clip-rule="evenodd"
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
