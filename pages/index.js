import { Head } from "next/document";
import AboutMe from "../components/Landing/AboutMe";
import MainFooter from "../components/Landing/MainFooter";
import MainHeader from "../components/Landing/MainHeader";
import NavBar from "../components/Landing/NavBar";
import Proyects from "../components/Landing/Proyects";
import Skills from "../components/Landing/Skills";

export default function Landing(){
    return(
        <>
            <div onWheel={(e)=>e.preventDefault()} className="screenLoad overflow-hidden">
                
                <div className="container absolute top-0 left-0" style={{width: "50vw", position: "absolute", backdropFilter: "none", boxShadow:"none"}} id="main">
                        <div className="content ">
                            <div className="bannerText ">
                                    <div>
                                        <h2 className="typing-demo ml-[31px]" style={{color:"var(--color-main)"}}>Nahuel Escujuri</h2>
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