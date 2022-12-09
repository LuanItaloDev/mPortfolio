import Link from "next/link";

export default function Menu(){
    return (
    <nav className="fixed top-0 left-0 backdrop-blur-sm bg-black/30 w-full shadow z-50">
        <div className="container m-auto flex justify-between items-center text-white">
            <h1 className="pl-8 py-4 text-xl font-bold cursor-pointer">Luan Italo</h1>
            <ul className="hidden md:flex items-center pr-10 text-base font-semibold cursor-pointer">
                <li className="py-4 px-6">Sobre</li>
                <li className="py-4 px-6">Portfolio</li>
                <li className="py-4 px-6">Blog</li>
            </ul>
            <button className="block  md:hidden py-3 px-4 rounded focus:outline-none group z-50">
                <div className="w-5 h-1 bg-white mb-1"></div>
                <div className="w-5 h-1 bg-white mb-1"></div>
                <div className="w-5 h-1 bg-white"></div>
                <div className="absolute top-0 -right-full h-screen w-8/12 backdrop-blur-2xl bg-black/30 opacity-0
                group-focus:right-0 group-focus:opacity-100 transition-all duration-300">
                    <ul className="flex flex-col items-center w-full  cursor-pointer pt-10">
                        <li id="sobre" className="hogver:bg-gray-200 py-4 px-6 w-full font-bold text-5xl text-right">Sobre</li>
                        <li id="portfolio" className="hogver:bg-gray-200 py-4 px-6 w-full font-bold text-5xl text-right">Portfolio</li>
                        <li id="blog" className="hogver:bg-gray-200 py-4 px-6 w-full font-bold text-5xl text-right">Blog</li>
                    </ul>
                </div>
            </button>
        </div>
    </nav> 
    )
};