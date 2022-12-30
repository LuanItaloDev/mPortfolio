import Image from "next/image"
import Link from "next/link"

export default function ItemPortfolio(props){
    return(
                <article className="flex lg:w-1/3 items-center border-b-4 transition duration-300 hover:bg-stone-900 border-green-800 hover:border-sky-700 p-7 ">
                    <div className="flex flex-col">
                        <h4 className="text-white text-4xl font-semibold mb-10">{props.titulo}</h4>
                        <p className="text-white text-xl">
                            {props.descricao}
                        </p>
                        <div className="mt-10">
                            <Link className="" href="https://github.com/LuanItaloDev" legacyBehavior>
                                <a className="text-white underline  hover:underline-offset-1 ">GitHub</a> 
                            </Link>
                        </div>
                    </div>
                </article>
    )
}