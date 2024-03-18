import { Head } from "next/document";
import AboutMe from "../components/Landing/AboutMe";
import MainFooter from "../components/Landing/MainFooter";
import MainHeader from "../components/Landing/MainHeader";
import NavBar from "../components/Landing/NavBar";
import Proyects from "../components/Landing/Proyects";
import Skills from "../components/Landing/Skills";
import { useEffect, useState } from "react";

export default function Landing(){
    const [innerWidth, setInnerWidth] = useState(false)
    const [currentTyping, setCurrentTyping] = useState(0)
    const typing = "Nahuel Escujuri"
    
    useEffect(() => {
        if(window.innerWidth <= 1060){
            // Actualiza el fotograma de la animación cada 500ms
            const interval = setInterval(() => {
      
              if(currentTyping != typing?.length)setCurrentTyping((currentTyping + 1));
            }, 50);
      
      
            return () => clearInterval(interval);
        }
    }, [currentTyping]);

    useEffect(()=>{
        setInnerWidth(window?.innerWidth)
    },[])

    return(
        <>
            <div onWheel={(e)=>e.preventDefault()} className="screenLoad overflow-hidden">
                
                <div className="container absolute top-0 left-0 " style={{ position: "absolute", backdropFilter: "none", boxShadow:"none"}} id="main">
                        <div className="content ">
                            <div className="bannerText ">
                                    <div>
                                        
                                        
                                        <h2
                                        className="typing-demo ml-[31px]
                                        lg:hidden"
                                        style={{color:"var(--color-main)"}}>
                                            Nahuel Escujuri
                                        </h2>

                                        {/* Titulo en el responsive */}
                                        <h2
                                        style={{color:"var(--color-main)"}}>
                                            {typing?.slice(0, currentTyping)}{currentTyping != typing?.length && innerWidth <= 1060 && "|"}
                                        </h2>

                                        <h4 className=" opacity-0" >Full Stack Developer</h4>
                                        <a  className=" opacity-0" href="#about">¿QUIEN SOY?</a>
                                    </div>
                            </div>
                        </div>
                </div>

            </div>

            {/* Nav bar */}
            <NavBar/>

            {/* Encabezado */}
            <MainHeader/>

            {/* Sobre Mi */}
            <AboutMe/>

            {/* Habilidades */}
            <Skills/>
            
            {/* Proyectos */}
            <Proyects/>

            {/* Footer */}
            <MainFooter/>
        </>
    )
}