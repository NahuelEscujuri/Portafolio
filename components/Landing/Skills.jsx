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


export default function Skills(){
    return(
        <section className="section " id="skills">

		
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

		<ul className="skill-list">
			{/* Javascript */}
			<li>
				<Image width={100} height={100} src={JavascriptIcon} alt="Javasccript" title="Javasccript"/>
			</li>
			
			{/* HTML */}
			<li>
				<Image width={100} height={100} src={HTMLIcon} alt="HTML" title="HTML"/>
			</li>
			
			{/* CSS */}
			<li>
				<Image width={100} height={100} src={CSSIcon} alt="CSS" title="CSS"/>
			</li>
			
			{/* React */}
			<li>
				<Image width={100} height={100} src={ReactIcon} alt="React" title="React"/>
			</li>
			
			{/* Node */}
			<li>
				<Image width={100} height={100} src={NodeIcon} alt="Node" title="Node"/>
			</li>
			
			{/* PostgreSQL */}
			<li>
				<Image width={100} height={100} src={PostgreSQLIcon} alt="PostgreSQL" title="PostgreSQL"/>
			</li>
			
			{/* Typescript */}
			<li>
				<Image width={100} height={100} src={TypescriptIcon} alt="Typescript" title="Typescript"/>
			</li>
			
			{/* C */}
			<li>
				<Image width={100} height={100} src={CIcon} alt="C#" title="C#"/>
			</li>
			
			{/* Next */}
			<li>
				<Image width={100} height={100} src={NextIcon} alt="Next" title="Next"/>
			</li>
			
			{/* Express */}
			<li>
				<Image width={100} height={100} src={ExpressIcon} alt="Express" title="Express"/>
			</li>
			
			{/* Sequelize */}
			<li>
				<Image width={100} height={100} src={SequelizeIcon} alt="Sequelize" title="Sequelize"/>
			</li>
			
			{/* SQL */}
			<li>
				<Image width={100} height={100} src={SQLIcon} alt="SQL" title="SQL"/>
			</li>
			
			{/* MongoDB */}
			<li>
				<Image width={100} height={100} src={MongoIcon} alt="MongoDB" title="MongoDB"/>
			</li>
			
			{/* Python */}
			<li>
				<Image width={100} height={100} src={PythonIcon} alt="MongoDB" title="MongoDB"/>
			</li>
			
			{/* Django */}
			<li>
				<Image width={100} height={100} src={DjangoIcon} alt="MongoDB" title="MongoDB"/>
			</li>
			
			{/* Figma */}
			<li>
				<Image width={100} height={100} src={FigmaIcon} alt="Figma" title="Figma"/>
			</li>
		</ul>
	</section>
    )
}