import Image from "next/image"
import Link from "next/link"

export default function Artigos (){
    return (
                <article className="bg-gray-900 max-w-lg  cursor-pointer hover:shadow-lg hover:rotate-1 duration-200 my-7">
                    <div>
                        <Image
                            src="/images/img1.jpg"
                            alt="Imagem Artigo 1"
                            width={500}
                            height={250}
                        />
                    </div>
                    <div>
                        <header className="p-10 space-y-10">
                            <h2 className="text-white text-4xl mb-3">Loren Ipsum</h2>
                            <span className="text-gray-500 text-base uppercase   font-semibold  ">11/Out/2022</span>
                            <p className="text-white text-base"> 
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu proin massa non diam sit amet.
                            consectetur adipiscing elit. Eu proin massa non diam sit amet consectetur adipiscing elit. Eu proin massa non diam sit amet
                            </p>
                        <div>
                            <Link className="" href="https://www.mmbrokers.com.br" legacyBehavior>
                                <a className="text-white underline  hover:underline-offset-1">Ler mais →</a> 
                            </Link>
                        </div>
                        </header>
                    </div>
                </article>
    )
}