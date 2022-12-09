import Slide from 'react-reveal/Slide';
import Link from "next/link"

export default function Falecomigo(){
    return (
        <section className="ontainer w-full mx-auto h-full py-20 text-center">
            <Slide bottom cascade>
                <apan className="text-white text-5xl font-black">
                    Contato
                </apan>
                <p className='text-2xl text-gray-500 mt-3 mb-3'>
                    Vamos criar algo juntos ?
                </p>
                <p className='text-2xl text-white'>
                    Sinta se, avontade para me enviar um email,<br/> vai ser um prazer conversar com você! 🙋‍♂️
                </p>
                </Slide>
                <Link href="https://linktr.ee/luanitalo">
                    <button className='bg-sky-500 hover:bg-sky-700 rounded text-2xl font-medium my-16 px-16 py-4 text-white transition duration-500 ease-out'>
                        Fale comido
                    </button>
                </Link>
        </section>
    )
}