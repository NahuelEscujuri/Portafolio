import { faGithub, faSpaceAwesome } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";

export default function WindowProyect({
    children,
    title,
    img,
    date,
    description,
    deploy,
    repository
}) {
  return (

        <div
        style={{height:"100%"}}
        className=' flex justify-center items-center h-full w-full'>

            <div className='flex flex-col items-center w-[700px] border-2 border-main rounded-[7px_7px_0_0] bg-dark
            md:w-[95%] md:mx-[25px]'>

                    {/* Encabezado */}
                    <h4 className='bg-main w-full font-semibold text-[21px]'>{title}</h4>

                    {/* Zona Superior */}
                    <div className='flex w-full h-[300px] mt-3 px-3 relative
                    sm:flex-col sm:h-auto'>

                        {/* Imagen */}
                        {
                            img ?
                            <div className=' w-[300px] h-[300px] relative border-2 border-text mr-3
                            sm:w-full'>
                                <Image
                                src={img}
                                width={300}
                                height={300}
                                alt="Imagen"
                                priority
                                />
                            </div>
                            :
                            <div className=' w-[300px] h-[300px] relative border-2 border-text mr-3
                            sm:w-full'>
                            
                            </div>
                        }

                        {/* Datos */}
                        <div className=' text-main flex-grow-[1] flex flex-col
                        sm:mt-5'>

                            {/* Fecha */}
                            <div className='text-left mb-6 border-2 border-text w-full p-2 pt-5 mt-2 relative'>

                                <b className='text-[19px] text-text absolute top-[-14px] bg-dark px-2'>Fecha:</b>
                                <p>{date}</p>

                            </div>

                            {/* Tecnologias */}
                            <div className='text-left border-2 border-text w-full p-2 pt-5 mt-2 relative flex-grow-[1] h-[201px]  grid grid-flow-col grid-cols-2 grid-rows-4 gap-y-1 gap-x-2'>

                                <b className='text-[19px] left-2 text-text absolute top-[-14px] bg-dark px-2 '>Tecnologias:</b>

                                {children}

                            </div>

                        </div>

                    </div>

                    {/* Descripcion */}
                    <div className=" mt-4 p-3 w-full">

                        <div className='border-2 border-text p-2 pt-5 w-full relative'>

                            <b className='text-[19px] text-text absolute top-[-14px] left-2 bg-dark px-2 '>Descripcion:</b>

                            <p className=' text-left text-main
                            sm:text-[14px]'>{description}</p>

                        </div>

                        <div className=" flex mt-6 w-full justify-end">

                            {/* Repositorios */}
                            {
                                repository &&
                                <a
                                className='border-2 bg-dark border-main text-main w-[150px] mr-2 flex justify-center items-center h-[35px] transition-all duration-75
                                hover:border-main hover:shadow-[0_0_10px_#14FFEC] hover:border-b-4 hover:border-r-4'
                                href="https://github.com/aliriodi/3DSeller"
                                target="_blank">
                                    GitHub <FontAwesomeIcon className="w-[16px] ml-3" icon={faGithub}/>
                                </a>
                            }

                            {/* Deploy */}
                            {
                                deploy &&
                                <a
                                className='border-2 bg-dark border-main text-main w-[150px] mr-2 flex justify-center items-center h-[35px] transition-all duration-75
                                hover:border-main hover:shadow-[0_0_10px_#14FFEC] hover:border-b-4 hover:border-r-4'
                                href={deploy}
                                target="_blank">
                                    Desploy <FontAwesomeIcon className="w-[14px] ml-3" icon={faSpaceAwesome}/>
                                </a>
                            }

                        </div>

                    </div>

            </div>

        </div>
  )
}
