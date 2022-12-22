import Image from "next/image"
import Link from "next/link"

export default function ItemPortfolio(props){
    return(
            <section className="flex justify-center items-center gap-5  mt-16 ">
                <div className="flex flex-col md:flex-row justify-between items-center gap-10 border-b-4 transition duration-300 hover:bg-stone-900 border-green-800 hover:border-sky-700 p-7 ">
                    <div className="flex flex-col md:w-96">
                        <h4 className="text-white text-4xl font-semibold mb-10">{props.titulo}</h4>
                        <p className="text-white text-xl">
                            {props.descricao}
                        </p>
                        <div className="flex justify-between mt-7">
                            <Link className="" href="https://www.mmbrokers.com.br" legacyBehavior>
                                <a className="text-white underline  hover:underline-offset-1 ">Visitar Site →</a> 
                            </Link>

                            <Link className="" href="https://github.com/LuanItaloDev" legacyBehavior>
                                <a className="text-white underline  hover:underline-offset-1 ">GitHub</a> 
                            </Link>
                        </div>
                    </div>
                    <div className="mb-7">
                        <Image className="rounded hover:rotate-1 duration-500"
                            src={props.img}
                            alt={props.txtalternativo}
                            width={700}
                            height={600}
                        />
                    </div>
                </div>
            </section>
    )
}