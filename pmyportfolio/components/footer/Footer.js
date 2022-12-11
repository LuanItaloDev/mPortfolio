import Image from "next/image"
import Link from "next/link"

export default function Footer (){
    return (
        <footer className="flex flex-col py-10 h-full">
            <div className="flex flex-col items-center py-5 space-y-4">                
            <div className="">
                   <span className="text-3xl text-gray-300 font-bold cursor-pointer">Luan Italo Dev</span>
            </div>
            <div className="flex content-center items-center space-x-8">
                <Link className="" href="https://github.com/LuanItaloDev">
                    <Image className="cursor-pointer"
                        src="/images/icons/github.svg"
                        alt='GitHub Social'
                        width={25}
                        height={25}
                    />
                </Link>
                <Link className="" href="https://www.instagram.com/luanitalofl/">
                    <Image className="cursor-pointer"
                        src="/images/icons/bi_instagram.svg"
                        alt='GitHub Social'
                        width={25}
                        height={25}
                    />                
                </Link>
                <Link className="" href="https://www.linkedin.com/in/luanitalodev/">
                    <Image className="cursor-pointer"
                        src="/images/icons/akar-icons_linkedin-fill.svg"
                        alt='GitHub Social'
                        width={25}
                        height={25}
                    />                
                </Link>

                <Link className="" href="https://www.behance.net/luanitallo">
                    <Image className="cursor-pointer"
                        src="/images/icons/bi_behance.svg"
                        alt='GitHub Social'
                        width={25}
                        height={25}
                    />                
                </Link>
            </div>
            </div>
            <div className="container mx-auto text-center py-2">
                <span className="text-gray-700 uppercase">
                    © 2022 - Luan Italo
                </span>
            </div>
        </footer>
    )
}