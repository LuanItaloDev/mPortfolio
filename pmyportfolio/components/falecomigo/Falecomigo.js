// import Slide from 'react-reveal/Slide';
import Link from "next/link"

export default function Falecomigo(){
    return (
        <section className="ontainer w-full mx-auto h-full py-20 text-center">
            {/* <Slide bottom cascade> */}
                <apan className="text-white text-5xl font-black">
                    Vamos criar algo juntos ?
                </apan>
                <p className='text-2xl text-white mt-8'>
                    Sinta se, à avontade para falar comigo, em algumas das minhas redes sociais!<br/>
                    Será um prazer conversar com você 🙋‍♂️
                </p>
                {/* </Slide> */}
                <Link href="https://linktr.ee/luanitalo">
                    <button className='bg-sky-500 hover:bg-sky-700 rounded text-2xl font-medium my-16 px-16 py-4 text-white transition duration-500 ease-out'>
                        Fale comido
                    </button>
                </Link>
        </section>
    )
}