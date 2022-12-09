import Artigos from "./artigos/Artigos";
import Slide from 'react-reveal/Slide';


export default function Blog() {
    return (
            <section className="container mx-auto my-40">
                <Slide bottom cascade>
                    <h3 className="text-white text-4xl md:text-5xl font-black text-center">
                        Blog
                    </h3>
                </Slide>
               
                <div className="flex justify-between flex-col md:flex-row content-center items-center gao-10 mx-10">
                    <Artigos/>     
                    <Artigos/>        
                    <Artigos/>        
                </div>
            </section>
    )
}