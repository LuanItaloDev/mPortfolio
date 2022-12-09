import Image from "next/image"
import Link from "next/link"

export default function Artigos (props){
    return (
            <div className="p-1">
                <article className="bg-gray-900 max-w-lg my-5 cursor-pointer hover:shadow-lg hover:rotate-1 duration-200 w-96 mx-auto">
                    <div>
                        <Image
                            src={props.ImgPost}
                            alt="Imagem Artigo 1"
                            width={500}
                            height={250}
                        />
                    </div>
                    <div>
                        <header className="p-10 space-y-5">
                            <h2 className="text-white text-3xl mb-3 font-bold">{props.TituloPost}</h2>
                            <span className="text-gray-500 text-base uppercase   font-semibold  ">{props.DataPost}</span>
                            <p className="text-white text-base">{props.DescricaoPost}</p>
                        <div>
                            <Link className="" href="https://www.mmbrokers.com.br" legacyBehavior>
                                <a className="text-white underline  hover:underline-offset-1">Ler mais →</a> 
                            </Link>
                        </div>
                        </header>
                    </div>
                </article>
            </div>
    )
}