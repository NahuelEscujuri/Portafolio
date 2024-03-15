import Image from "next/image";
import JavascriptIcon from "../../public/technologies/Javascript.png"
import HTMLIcon from "../../public/technologies/HTML.png"
import CSSIcon from "../../public/technologies/CSS.png"
import ReactIcon from "../../public/technologies/React.png"
import NodeIcon from "../../public/technologies/Node.png"
import PostgreSQLIcon from "../../public/technologies/PostgreSQL.png"
import TypescriptIcon from "../../public/technologies/Typescript.png"
import CIcon from "../../public/technologies/C.png"
import NextIcon from "../../public/technologies/Next.png"
import ExpressIcon from "../../public/technologies/express.png"
import SequelizeIcon from "../../public/technologies/sequelize.png"
import SQLIcon from "../../public/technologies/SQL.png"
import MongoIcon from "../../public/technologies/mongo.png"
import PythonIcon from "../../public/technologies/Python.png"
import DjangoIcon from "../../public/technologies/Django.png"
import FigmaIcon from "../../public/technologies/figma.png"
import TailwindIcon from "../../public/technologies/tailwind.png"
import PhotoshopIcon from "../../public/technologies/Photoshop.png"
import Window from "./UIElements/Window";
import { useEffect, useRef, useState } from "react";


export default function Skills(){    
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    // const offset = position; 
    const [position, setPosition] = useState({ left: 0, top: 0 });
    const elementRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
        const { left, top } = elementRef.current.getBoundingClientRect();
        setPosition({ left, top });
        };

        window.addEventListener('scroll', handleScroll);

        // Limpia el event listener cuando el componente se desmonta
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Solo se ejecuta una vez al montar el componente

    return(
        <section
        ref={elementRef}
		onMouseMove={(event) => setMousePosition({ x: event.clientX, y: event.clientY })} 
		className="section skills relative h-[1500px] overflow-hidden
		sm:min-h-[1500px] sm:h-auto"
		id="skills">

			{/* Habilidades Blandas */}
			
			<div className="title">
				<h2>HABILIDADES</h2>
				<h4>Blandas</h4>
			</div>

		<ul className="skill-list">
			{/* Auto motivación */}
			<li className="skill-list_text" title="Soy capaz de motivarme a mí mismo y de mantener mi entusiasmo incluso en situaciones complicadas sin esperar que otros me motiven.">
				<p>Auto motivación</p>
			</li>
			
			{/* Autodidacta */}
			<li className="skill-list_text" title="Me gusta aprender y tengo la habilidad de hacerlo por mi cuenta. Me intereso por temas diversos y disfruto investigando y profundizando en ellos.">
				<p>Autodidacta</p>
			</li>
			
			{/* Dedicación */}
			<li className="skill-list_text" title="Me entrego por completo a mis proyectos y tareas. Soy perseverante y disciplinado en mi trabajo y siempre busco hacer las cosas de la mejor manera posible.">
				<p>Dedicación</p>
			</li>
			
			{/* Curiosidad */}
			<li className="skill-list_text" title="Me gusta explorar y descubrir cosas nuevas. Siempre estoy en busca de conocimientos y experiencias que me permitan crecer y aprender.">
				<p>Curiosidad</p>
			</li>
			
			{/* Pensamiento lógico */}
			<li className="skill-list_text" title="Me gusta analizar y estructurar la información de forma coherente y racional. Soy capaz de identificar patrones y relaciones entre distintos elementos y de aplicar el razonamiento lógico en la resolución de problemas.">
				<p>Pensamiento lógico</p>
			</li>
			
			{/* Responsabilidad */}
			<li className="skill-list_text" title="Soy consciente de mis obligaciones y compromisos, y me tomo muy en serio las tareas que se me encomiendan. Cumplo con mis responsabilidades de forma puntual y eficiente.">
				<p>Responsabilidad</p>
			</li>
		</ul>
		
		<div className="title">
			<h4>Tecnicas</h4>
		</div>
		
		{/* Ventanas de habilidades tecnicas */}
		<ul className="skill-list">
			
			{/* Lenguajes de Programación y Frameworks */}
			<Window
			initialPosition={{x:"10", y:"35"}}
			title={"{} Lenguajes de Programación"}
			mousePosition={{x:mousePosition.x, y:mousePosition.y - position.top}}>
				<ul className="flex">
					
					{/* C */}
					<li>
						<Image width={100} height={100} src={CIcon} alt="C#" title="C#"/>
					</li>
					
					{/* Python */}
					<li>
						<Image width={100} height={100} src={PythonIcon} alt="MongoDB" title="MongoDB"/>
					</li>
					
					{/* Javascript */}
					<li>
						<Image width={100} height={100} src={JavascriptIcon} alt="Javasccript" title="Javasccript"/>
					</li>
					
					{/* Typescript */}
					<li>
						<Image width={100} height={100} src={TypescriptIcon} alt="Typescript" title="Typescript"/>
					</li>
				</ul>
			</Window>

			
			{/* Frontend */}
			<Window
			initialPosition={{x:"20", y:"45"}}
			title={"</> Frontend"}
			mousePosition={{x:mousePosition.x, y:mousePosition.y - position.top}}>
				<ul className="flex">
					
					{/* React */}
					<li>
						<Image width={100} height={100} src={ReactIcon} alt="React" title="React"/>
					</li>
					
					{/* Next */}
					<li>
						<Image width={100} height={100} src={NextIcon} alt="Next" title="Next"/>
					</li>

					{/* TailWind */}
					<li>
						<Image width={100} height={100} src={TailwindIcon} alt="TailWind" title="TailWind"/>
					</li>

					{/* CSS */}
					<li>
						<Image width={100} height={100} src={CSSIcon} alt="CSS" title="CSS"/>
					</li>

				</ul>
			</Window>

			
			{/* Backend */}
			<Window
			icon={"b"}
			initialPosition={{x:"30", y:"55"}}
			title={" Backend"}
			mousePosition={{x:mousePosition.x, y:mousePosition.y - position.top}}>
				<ul className="flex">
					
					{/* Node */}
					<li>
						<Image width={100} height={100} src={NodeIcon} alt="Node" title="Node"/>
					</li>
					
					{/* Express */}
					<li>
						<Image width={100} height={100} src={ExpressIcon} alt="Express" title="Express"/>
					</li>
					
					{/* Django */}
					<li>
						<Image width={100} height={100} src={DjangoIcon} alt="MongoDB" title="MongoDB"/>
					</li>			
					
					{/* Sequelize */}
					<li>
						<Image width={100} height={100} src={SequelizeIcon} alt="Sequelize" title="Sequelize"/>
					</li>

				</ul>
			</Window>

						
			{/* Base de Datos */}
			<Window
			icon={"db"}
			initialPosition={{x:"40", y:"65"}}
			title={" Bases de Datos"}
			mousePosition={{x:mousePosition.x, y:mousePosition.y - position.top}}>
				<ul className="flex">	
					
					{/* PostgreSQL */}
					<li>
						<Image width={100} height={100} src={PostgreSQLIcon} alt="PostgreSQL" title="PostgreSQL"/>
					</li>
										
					{/* SQL */}
					<li>
						<Image width={100} height={100} src={SQLIcon} alt="SQL" title="SQL"/>
					</li>
					
					{/* MongoDB */}
					<li>
						<Image width={100} height={100} src={MongoIcon} alt="MongoDB" title="MongoDB"/>
					</li>

				</ul>
			</Window>


			{/* Herramientas de Diseño */}
			<Window
			icon={"hd"}
			initialPosition={{x:"50", y:"75"}}
			title={" Herramientas de Diseño"}
			mousePosition={{x:mousePosition.x, y:mousePosition.y - position.top}}>
				<ul className="flex">	
					
					{/* Figma */}
					<li>
						<Image width={100} height={100} src={FigmaIcon} alt="Figma" title="Figma"/>
					</li>
					
					{/* Photoshop */}
					<li>
						<Image width={100} height={100} src={PhotoshopIcon} alt="Photoshop" title="Photoshop"/>
					</li>

				</ul>
			</Window>
			

			
		</ul>

		{/* <div className="absolute border-t-2 border-b-2 border-main w-full bottom-0 left-0 h-[50px]"></div> */}
	</section>
    )
}