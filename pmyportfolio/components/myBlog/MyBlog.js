import Artigos from "./artigos/Artigos";


export default function MyBlog(){
    return(
        <section className="bg-white flex flex-col h-full py-10">
                <h2 className="text-4xl font-extrabold text-black text-center mb-5">Blog</h2>
                <p className='text-xl  text-slate-800 text-center'>                
                Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit.
                </p>
                <div className="flex flex-col justify-center items-center md:flex-row flex-wrap mx-auto gap-10 ">
                    <Artigos
                        TituloPost="Loren Ipsum post 1"
                        ImgPost="/images/img1.jpg"
                        DataPost="01/01/2023" 
                        DescricaoPost="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et dapibus nulla."
                    />
                    <Artigos
                        TituloPost="Loren Ipsum post 2"
                        ImgPost="/images/img2.jpg"
                        DataPost="01/03/2023" 
                        DescricaoPost="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et dapibus nulla."
                    />
                    <Artigos
                        TituloPost="Loren Ipsum post 3"
                        ImgPost="/images/img3.jpg"
                        DataPost="01/05/2023" 
                        DescricaoPost="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et dapibus nulla."
                    />
                </div>
        </section>
    )
}