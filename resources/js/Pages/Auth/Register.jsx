import { useRef, useState, React } from "react";
import { useForm } from "@inertiajs/react";

export default function () {
    const [showPassword, setShowPassword] = useState(false);

    const form = useForm({
        name: "",
        email: "",
        password: "",
    });

    const submit = (e) => {
        e.preventDefault();
        form.post(route("register.post"), {
            onFinish: () => form.reset("password"),
        });
    };

    return (
        <section className="bg-gray-50 m-0 lg:flex lg:flex-row h-[100vh]">
            <div className="flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0 lg:w-1/2 ">
                <img
                    src="https://i.ibb.co.com/XSmd6vF/peta-nusa-logo-2.png"
                    alt="logo"
                    className="w-48 my-3"
                />
                <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl text-center">
                            Daftar Akun Kamu
                        </h1>
                        <form
                            className="space-y-4 md:space-y-6"
                            action="POST"
                            onSubmit={submit}
                        >
                            <div>
                                <label
                                    htmlFor="nama"
                                    className="block mb-2 text-sm font-medium text-gray-900 "
                                >
                                    Nama
                                </label>
                                <input
                                    type="text"
                                    name="nama"
                                    id="nama"
                                    value={form.data.name}
                                    onChange={(e) =>
                                        form.setData("name", e.target.value)
                                    }
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-1 focus:ring-orange-400 focus:border-orange-400 outline-none block w-full p-2.5 transition-all"
                                    placeholder="John Doe"
                                    required
                                />
                                {form.errors.name && (
                                    <div className="text-red-500 text-sm mt-2">
                                        {form.errors.name}
                                    </div>
                                )}
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 "
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={form.data.email}
                                    onChange={(e) =>
                                        form.setData("email", e.target.value)
                                    }
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-1 focus:ring-orange-400 focus:border-orange-400 outline-none block w-full p-2.5 transition-all"
                                    placeholder="example@gmail.com"
                                    required
                                />
                                {form.errors.email && (
                                    <div className="text-red-500 text-sm mt-2">
                                        {form.errors.email}
                                    </div>
                                )}
                            </div>
                            <div className="relative">
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 "
                                >
                                    Password
                                </label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    id="password"
                                    value={form.data.password}
                                    onChange={(e) =>
                                        form.setData("password", e.target.value)
                                    }
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-1 focus:ring-orange-400 focus:border-orange-400 block w-full p-2.5 outline-none transition-all pr-[46px]"
                                    required
                                />
                                {showPassword ? (
                                    <svg
                                        width={30}
                                        height={30}
                                        fill="#fb923c"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute right-2 bottom-[8px] cursor-pointer"
                                        onClick={() => {
                                            setShowPassword(!showPassword);
                                        }}
                                    >
                                        <path d="M4.031 3 3 4.031l16.969 16.97L21 19.968 4.031 3Z" />
                                        <path d="m12.156 9.008 2.84 2.839a3.004 3.004 0 0 0-2.84-2.84Z" />
                                        <path d="m11.843 14.995-2.84-2.839a3.003 3.003 0 0 0 2.84 2.84Z" />
                                        <path d="M12 16.496a4.5 4.5 0 0 1-4.34-5.688L4.421 7.57C3.099 8.782 1.839 10.362.75 11.996c1.238 2.063 2.933 4.183 4.697 5.4 2.024 1.393 4.225 2.1 6.542 2.1a10.935 10.935 0 0 0 3.714-.647l-2.513-2.512c-.388.106-.788.16-1.19.16Z" />
                                        <path d="M12 7.5a4.5 4.5 0 0 1 4.34 5.688l3.312 3.312c1.367-1.23 2.629-2.886 3.598-4.5-1.237-2.036-2.949-4.151-4.743-5.382-2.05-1.405-4.243-2.118-6.519-2.118a10.45 10.45 0 0 0-3.666.67l2.49 2.49c.387-.107.786-.16 1.188-.16Z" />
                                    </svg>
                                ) : (
                                    <svg
                                        width={30}
                                        height={30}
                                        fill="none"
                                        stroke="#fb923c"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={1.8}
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="absolute right-2 bottom-[8px] cursor-pointer"
                                        onClick={() => {
                                            setShowPassword(!showPassword);
                                        }}
                                    >
                                        <path d="M11.984 5.25c-3.653 0-7.401 2.115-10.351 6.344a.75.75 0 0 0-.013.833c2.267 3.548 5.964 6.323 10.364 6.323 4.352 0 8.125-2.783 10.397-6.34a.757.757 0 0 0 0-.819C20.104 8.076 16.303 5.25 11.984 5.25Z" />
                                        <path d="M12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z" />
                                    </svg>
                                )}
                                {form.errors.password && (
                                    <div className="text-red-500 text-sm mt-2">
                                        {form.errors.password}
                                    </div>
                                )}
                            </div>

                            <button
                                disabled={form.processing}
                                type="submit"
                                className="w-full text-orange-500 border border-orange-400 hover:bg-orange-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all duration-300"
                            >
                                Daftar
                            </button>
                            <p className="text-sm font-light text-gray-500 text-center">
                                Sudah punya akun?{" "}
                                <a
                                    href="/auth/login"
                                    className="font-medium text-orange-600 hover:underline "
                                >
                                    Masuk
                                </a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
            <div className="lg:w-1/2 lg:block hidden">
                <img
                    src="https://www.papuaparadise.com/wp-content/uploads/2017/09/bungalows-1200x800.jpg"
                    alt="img hero"
                    width="100%"
                    className="w-full h-full object-cover"
                />
            </div>
        </section>
    );
}
