import { Link, animateScroll as scroll } from "react-scroll/modules";

export default function Menu(){
    return (
    <nav className="fixed top-0 left-0 py-5 backdrop-blur-sm bg-black/30 w-full shadow z-50">
        <div className="container m-auto flex justify-between items-center text-white  px-5">
            <h1 className=" text-3xl font-bold cursor-pointer">Luan Italo</h1>
            <ul className="hidden md:flex items-center  text-lg font-medium cursor-pointer">
            <Link 
                activeClass="active"
                to="Inicio"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
            <li className="py-4 px-6">Inicio</li>
            </Link>

            <Link 
                activeClass="active"
                to="Portfolio"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
            >
                <li className="py-4 px-6">Portfolio</li>
            </Link>
            <Link 
                href="../../pages/blog.tsx" legacyBehavior>

                <li className="py-4 pl-6">Blog</li>
            </Link>
            </ul>
            <button className="block  md:hidden py-3 dpx-4 rounded focus:outline-none group z-50 ">
                <div className="w-5 h-1 bg-white mb-1"></div>
                <div className="w-5 h-1 bg-white mb-1"></div>
                <div className="w-5 h-1 bg-white"></div>
                <div className="absolute top-0 -right-full h-screen w-8/12 backdrop-blur-2xl bg-black/30 opacity-0
                group-focus:right-0 group-focus:opacity-100 transition-all duration-300">
                    <ul className="flex flex-col items-center w-full  cursor-pointer pt-10">
                    <Link 
                        activeClass="active"
                        to="Inicio"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <li id="sobre" className="hogver:bg-gray-200 py-4 px-6 w-full font-bold text-5xl text-right">Inicio</li>
                    </Link>

                    <Link
                        activeClass="active"
                        to="Portfolio"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <li id="portfolio" className="hogver:bg-gray-200 py-4 px-6 w-full font-bold text-5xl text-left">Portfolio</li>
                    </Link>
                    <Link
                        activeClass="active"
                        to="../../blog"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        <li id="blog" className="hogver:bg-gray-200 py-4 px-6 w-full font-bold text-5xl text-right">Blog</li>
                    </Link>
                    </ul>
                </div>
            </button>
        </div>
    </nav> 
    )
};