import ItemPortfolio from "./ItemPortfolio/ItemPortfolio"
// import Fade from 'react-reveal/Fade';

export default function Portfolio(){
    return(
        <section id="Portfolio" className="flex flex-col h-full py-10">
                <h2 className="text-4xl font-extrabold text-white text-center mb-5">Portfolio</h2>
                <p className='text-xl  text-slate-300 text-center px-5'>
                    Estes são alguns <span className='text-sky-500'>projetos</span> em que trabalhei.
                </p>
                <div className="flex lg:flex-row flex-col justify-center gap-10 container mx-auto mt-10">
                    <ItemPortfolio
                        titulo="Titulo do projeto"
                        descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at quam nibh. Maecenas pulvinar dignissim quam, id vulputate tortor sodales quis."
                        // img="/images/imagemcliente1.png"
                        txtalternativo="texto alternativo"
                    />
                    <ItemPortfolio
                        titulo="Titulo do projeto"
                        descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at quam nibh. Maecenas pulvinar dignissim quam, id vulputate tortor sodales quis."
                        // img="/images/imagemcliente3.png"
                        txtalternativo="texto alternativo"
                    />
                    <ItemPortfolio
                        titulo="Titulo do projeto"
                        descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at quam nibh. Maecenas pulvinar dignissim quam, id vulputate tortor sodales quis."
                        // img="/images/imagemcliente2.png"
                        txtalternativo="texto alternativo"
                    />
                </div>
        </section>
    )
}