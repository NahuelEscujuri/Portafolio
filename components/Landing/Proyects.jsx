import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import Image from "next/image";
import Seller from "../../public/proyects/3DSeller-logo.jpeg"
import Food from "../../public/proyects/PI-Food_home.png"

import 'swiper/css';

export default function Proyects(){
    return(
        <>
            <section className="section light swiper ">
                <div className="title">
                    <h2>PROYECTOS</h2>
                </div>

                <div className='w-screen'>
                    <ul id="proyects" className='swiper-slide w-full relative proyects-list mySwiper'>
                        <Swiper 
                        className='swiper-container'
                        slidesPerView={1}
                        loop={true}
                        autoplay={{
                        delay: 15000,
                        disableOnInteraction: false,
                        }}
                        modules={[Autoplay, Pagination, Navigation]}
                        >
                            {/* 3D Seller */}
                            <SwiperSlide>
                                <div className='flex items-center h-screen'>
                                    <li>
                                        
                                        <div className='w-[300px] h-[300px] relative'>
                                            <Image
                                            src={Seller}
                                            alt="3DSeller"
                                            objectFit="cover"
                                            layout="fill"
                                            priority
                                            />
                                        </div>

                                        <div className="proyects-list_text">
                                            <h4>3DSeller</h4>
                                            <p>El Proyecto es una aplicación para administración y ventas de artículos impresos en 3D, con base de datos de productos, control de ventas, pudiendo cargar archivos 3d en formato STL</p>
                                            <div className="proyects-list_text-links">
                                                <a href="https://github.com/aliriodi/3DSeller"target="_blank">GitHub <i className="fa fa-github"></i></a>
                                                <a href="https://3dseller.vercel.app/"target="_blank">Desploy <i className="fas fa-rocket"></i></a>
                                            </div>
                                        </div>
                                    </li>
                                </div>
                            </SwiperSlide>

                            {/* PI Food */}
                            <SwiperSlide>
                                <div className='flex items-center h-screen'>
                                    <li>
                                        
                                        <div className='w-[300px] h-[300px] relative'>
                                            <Image
                                            src={Food}
                                            alt="PI Food"
                                            objectFit="cover"
                                            layout="fill"
                                            priority
                                            />
                                        </div>

                                        <div className="proyects-list_text">
                                            <h4>PI Food</h4>
                                            <p>Fue un trabajo individual en el que tuve que hacer una pagina web de recetas,
                                            implementandole varias Funcionalidades</p>
                                            <div className="proyects-list_text-links">
                                                <a href="https://github.com/NahuelEscujuri/PI-Food-main"target="_blank">GitHub <i className="fa fa-github"></i></a>
                                                <a href="https://pi-food-main-green-iota.vercel.app" target="_blank">Desploy <i className="fas fa-rocket"></i></a>
                                            </div>
                                        </div>
                                    </li>
                                </div>
                            </SwiperSlide>

                        </Swiper>
                    </ul>
                </div>

            </section>
        </>
    )
}