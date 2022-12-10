import Link from "next/link";
// import Fade from 'react-reveal/Fade';

export default function Hero () {
    return(
        <section id="Inicio" className="flex flex-col h-screen">
            <div className=" container my-auto mx-auto md:px-10 lg:px-10 xl:px-5 md:my-52 md:w-1/2">
                {/* <Fade bottom> */}
                    <p className='font-semibold  text-white text-xl'>Saudações <span className='p-2 text-4xl'>👋🏻</span> </p>
                    <p className='text-4xl xl:text-7xl font-black text-white mb-5'>
                        Me chamo Luan.<br/>Eu crio coisas para a web.
                    </p>
                    <p className='text-xl text-slate-300 mb-8 '>
                        Estudante de Análise e Desenvolvimento de Sistemas focado em criar soluções web para o seu negócio.<br/>
                        Sou um <span className='text-sky-500'>freelancer</span> apaixonado por tecnologia e adepto ao <span className='text-sky-500'>Lifelong Learning.</span>
                    </p>
                    <Link href="https://linktr.ee/luanitalo">
                        <button className='bg-sky-500 hover:bg-sky-700 rounded text-2xl mt-10 font-medium px-16 py-4 text-white transition duration-500 ease-out'>
                            Fale comido
                        </button>
                    </Link>
                {/* </Fade> */}
            </div>
        </section>
    )
}