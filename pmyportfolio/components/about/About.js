import Slide from 'react-reveal/Slide'
export default function About () {
    return(
        <>
            <section className="container mx-auto">
                <div className="flex flex-col  gap-5 md:px-0 px-10 justify-between max-w-6xl mx-auto items-center">
                    <Slide  bottom cascade>
                    <div className=" w-full">
                        <h3 className="text-5xl font-extrabold text-white">
                            Um pouco mais<br/>sobre mim!
                        </h3>
                    </div>
                    <div className="text-slate-300 text-xl w-full">
                        <p>
                        Criar soluções com programação é uma das coisas mais incríveis. Foi por esse motivo que decidi ser um programador web. 
                        Minha linguagem de programação é o JavaScript, e gosto muito de usar React JS e Next JS, acho ferramentas incríveis para criar qualquer tipo de interface. 
                        <br/>Para deixar as coisas bonitas, Styled Component é o poder.</p>
                        <p className='mt-5'>Nas também gosto muito de usar Tailwind CSS. 
                        Nas horas vagas gosto muito de correr, além de manter a forma, encontrei na corrida uma forma de me desligar das telas e manter a mental em dias. 
                        Gosto de ter um tempo de qualidade para estudar, afinal, um dev sempre tem que estar por dentro das tecnologias mais relevantes do mercado.
                        </p>
                    </div>
                    </Slide>
                </div>                
            </section>
        </>
    )
}