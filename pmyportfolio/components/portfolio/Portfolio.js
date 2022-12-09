import ItemPortfolio from "./ItemPortfolio/ItemPortfolio"
import Fade from 'react-reveal/Fade';

export default function Portfolio(){
    return(
        <section className="flex flex-col h-full py-10">
            <Fade bottom>
                <h2 className="text-4xl font-extrabold text-white text-center mb-5">Portfolio</h2>
                <p className='text-xl  text-slate-300 text-center px-5'>
                    Sou um <span className='text-sky-500'>freelancer</span> apaixonado por tecnologia e adepto ao <span className='text-sky-500'>Lifelong Learning.</span>
                </p>
            </Fade>
                <div className="flex flex-row justify-center  flex-wrap container mx-auto items-center content-center">
                    <ItemPortfolio
                        titulo="mmBrokers"
                        descricao="Site institucional criado para uma das maiores imobiliãrias do norte e nordesde,."
                        img="/images/imagemcliente1.png"
                        txtalternativo="Site mmBrokers"
                    />
                    <ItemPortfolio
                        titulo="DRC Imobiliária"
                        descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sapien lobortis, commodo sapien non, 
                        pulvinar erat. Sed et tortor quis turpis malesuada luctus sagittis in libero. Aenean ut enim dui. Nulla 
                        posuere luctus porta. Mauris rhoncus molestie faucibus."
                        img="/images/imagemcliente3.png"
                        txtalternativo="Site DRC"
                    />
                    <ItemPortfolio
                        titulo="Infinity Loteamentos"
                        descricao="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a sapien lobortis, commodo sapien non, 
                        pulvinar erat. Sed et tortor quis turpis malesuada luctus sagittis in libero. Aenean ut enim dui. Nulla 
                        posuere luctus porta. Mauris rhoncus molestie faucibus."
                        img="/images/imagemcliente2.png"
                        txtalternativo="Site mmBrokers"
                    />
                </div>
        </section>
    )
}