import ItemPortfolio from "./ItemPortfolio/ItemPortfolio"
// import Fade from 'react-reveal/Fade';

export default function Portfolio(){
    return(
        <section id="Portfolio" className="flex flex-col h-full py-10">
            {/* <Fade bottom> */}
                <h2 className="text-4xl font-extrabold text-white text-center mb-5">Portfolio</h2>
                <p className='text-xl  text-slate-300 text-center px-5'>
                    Estes são alguns <span className='text-sky-500'>projetos</span> em que trabalhei.
                </p>
            {/* </Fade> */}
                <div className="flex flex-row justify-center  flex-wrap container mx-auto items-center content-center">
                    <ItemPortfolio
                        titulo="mmBrokers"
                        descricao="Site institucional criado para uma das maiores imobiliãrias do norte e nordesde,."
                        img="/images/imagemcliente1.png"
                        txtalternativo="Site mmBrokers"
                    />
                    <ItemPortfolio
                        titulo="DRC Imobiliária"
                        descricao="A DRC é uma imobiliária que atua há mais de 14 anos no mercado, especializada em imóveis de médio e alto padrão.
                        O site funciona com oum catálogo de imóveis, onde cada corretor pode cadastrar seus proprios imóveis.
                        "
                        img="/images/imagemcliente3.png"
                        txtalternativo="Site DRC"
                    />
                    <ItemPortfolio
                        titulo="Infinity Loteamentos"
                        descricao="Uma loteadora com mais de 4 mil lotes lançados. Possui os maiores bairros planejados do Norte e Nordeste do Brasil "
                        img="/images/imagemcliente2.png"
                        txtalternativo="Site mmBrokers"
                    />
                </div>
        </section>
    )
}