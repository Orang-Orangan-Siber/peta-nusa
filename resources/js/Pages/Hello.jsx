import { Button } from "../../../src/components/ui/button";
export default function () {
    return (
        <div className="">
            <nav className="w-full py-5 bg-white border-b">
                <div className="flex items-center justify-between mx-16">
                    <div className="navbar-brand flex items-center">
                        <a href="" className="font-bold text-2xl">
                            PetaNusa
                        </a>
                    </div>

                    <div className="">
                        <ul className="flex gap-7 text-sm text-slate-500 tracking-wide font-medium">
                            <li>
                                <a href="" className=" hover:text-slate-900">
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
                    <div className="">
                        <ul className="flex">
                            <li>
                                <a href="">Tidak</a>
                            </li>
                            <li>
                                <a href="">Keren</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <h1 className="font-bold">HELLO WORLD ! </h1>
            <Button>Helo</Button>
        </div>
    );
}
