import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Seller from "../../public/proyects/3DSeller-logo.jpeg"
import Food from "../../public/proyects/PI-Food_home.png"
import WindowProyect from './UIElements/WindowProyect';

import 'swiper/css';
import TagTechnology from './UIElements/TagTechnology';

export default function Proyects(){
    return(
        <>
            <section className="section light swiper">
                <div className="title">
                    <h2>PROYECTOS</h2>
                </div>

                <div className='w-screen'>
                    {
                        <ul id="proyects" className='swiper-slide w-full relative proyects-list mySwiper'>
                        <Swiper 
                        className='swiper-container'
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                        delay: 15000,
                        disableOnInteraction: false,
                        }}
                        style={{overflowY: "visible", height:"fit-content"}}
                        modules={[Autoplay, Pagination, Navigation]}
                        >
                            {/* Español con E */}
                            <SwiperSlide
                            style={{overflow:"visible"}}>

                                <WindowProyect
                                title={"Español con E"}
                                date={"Agosto 2023"}
                                img={"/proyects/españolConE.png"}
                                description={"Participé activamente en la construcción integral de la aplicación, colaborando estrechamente en el levantamiento de la estructura desde la base de datos hasta el diseño del front. Contribuí al desarrollo de sistemas de pagos, así como a la implementación de actividades interactivas en español y sistemas de reuniones virtuales con profesores. "}
                                deploy={"https://espanolcone.com/es"}
                                >
                                    
                                    <TagTechnology type={"front"}>Next.js</TagTechnology>

                                    <TagTechnology type={"front"}>CSS</TagTechnology>

                                    <TagTechnology type={"front"}>Tailwind</TagTechnology>

                                    <TagTechnology type={"db"}>MongoDB</TagTechnology>
                                    
                                </WindowProyect>

                            </SwiperSlide>

                            {/* Blends Burger */}
                            <SwiperSlide
                            style={{overflow:"visible"}}>

                                <WindowProyect
                                title={"Blends Burger"}
                                date={"November 2023"}
                                img={"/proyects/blendBurger.png"}
                                description={"desarrollamos una aplicación para optimizar la gestión de pedidos y repartidores. Mi responsabilidad principal fue diseñar y desarrollar la aplicación desde cero, permitiendo a los dueños del local marcar pedidos directamente en un mapa y asignar repartidores de manera eficiente. Implementé funcionalidades como un sistema de asignación de repartidores junto a los puntos de reparto."}
                                // deploy={"https://3dseller.vercel.app/"}
                                // repository={"https://github.com/aliriodi/3DSeller"}
                                >
                                    
                                    <TagTechnology type={"front"}>React.js</TagTechnology>

                                    <TagTechnology type={"front"}>CSS</TagTechnology>

                                    <TagTechnology type={"front"}>Tailwind</TagTechnology>
                                    
                                </WindowProyect>

                            </SwiperSlide>

                            {/* 3D Seller */}
                            <SwiperSlide
                            style={{overflow:"visible"}}>

                                <WindowProyect
                                title={"3D Seller"}
                                date={"Diciembre 2022"}
                                img={"/proyects/3DSeller-logo.jpeg"}
                                description={"Mi responsabilidad principal consistió en concebir y ejecutar el diseño de la plataforma, destacando particularmente en la creación del apartado de la galería de productos, implementando filtros cruzados. Además, desarrollé un sistema de reseñas para fomentar la interacción y retroalimentación de los usuarios. Asimismo, asumí un rol activo en la codificación de los diseños, garantizando su funcionalidad y estética."}
                                deploy={"https://3dseller.vercel.app/"}
                                repository={"https://github.com/aliriodi/3DSeller"}>
                                    
                                    <TagTechnology type={"front"}>Next.js</TagTechnology>

                                    <TagTechnology type={"front"}>CSS</TagTechnology>

                                    <TagTechnology type={"db"}>MongoDB</TagTechnology>
                                    
                                </WindowProyect>

                            </SwiperSlide>

                            {/* PI Food */}
                            <SwiperSlide>

                                <WindowProyect
                                title={"PI Food"}
                                date={"Noviebre 2022"}
                                img={"/proyects/PI-Food_home.png"}
                                description={"El proyecto consistió en el desarrollo individual de una aplicación web con tres rutas principales. La página inicial presenta una imagen y un botón de acceso. En la ruta principal, se puede buscar recetas por nombre y filtrarlas por tipo de dieta, mostrando detalles de cada una. Además, hay una ruta para crear nuevas recetas con un formulario validado."}
                                deploy={"https://pi-food-main-green-iota.vercel.app"}
                                repository={"https://github.com/NahuelEscujuri/PI-Food-main"}>
                                    
                                    <TagTechnology type={"front"}>React.js</TagTechnology>

                                    <TagTechnology type={"front"}>CSS</TagTechnology>

                                    <TagTechnology type={"back"}>Express</TagTechnology>

                                    <TagTechnology type={"back"}>Sequelize</TagTechnology>

                                    <TagTechnology type={"db"}>PostgreSQL</TagTechnology>
                                    
                                </WindowProyect>

                            </SwiperSlide>

                        </Swiper>
                        </ul>
                    }
                </div>

            </section>
        </>
    )
}