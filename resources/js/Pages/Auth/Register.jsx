export default function () {
    return (
        <section className="bg-gray-50 m-0 lg:flex lg:flex-row">
            <div className="flex flex-col items-center justify-center px-6 py-8 md:h-screen lg:py-0 lg:w-1/2 ">
                <img
                    src="https://i.ibb.co.com/XSmd6vF/peta-nusa-logo-2.png"
                    alt="logo"
                    className="w-64 my-3"
                />
                <div className="w-full bg-white rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                            Register your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#">
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
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-1 focus:ring-orange-400 focus:border-orange-400 outline-none block w-full p-2.5 transition-all"
                                    placeholder="name@company.com"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 "
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-1 focus:ring-orange-400 focus:border-orange-400 block w-full p-2.5 outline-none transition-all "
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full text-orange-500 border border-orange-400 hover:bg-orange-400 hover:text-white focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all duration-300"
                            >
                                Sign Up
                            </button>
                            <p className="text-sm font-light text-gray-500">
                                Already have an account?{" "}
                                <a
                                    href="/auth/login"
                                    className="font-medium text-orange-600 hover:underline "
                                >
                                    Sign In
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
