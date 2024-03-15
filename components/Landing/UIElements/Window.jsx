import { faGear, faPalette, faPallet, faServer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";

export default function Window({ children, mousePosition, initialPosition, title, icon }){

    const [currentPosition, setCurrentPosition] = useState({x:0, y:0})
    const [isDraging, setIsDraging] = useState(false)
    const [windowWidth, setWindowWidth] = useState(undefined);

    useEffect(() => {
        function handleMouseUp(event) {
          if (event.button === 0) { // Verificar si se soltó el botón izquierdo (0)
            setIsDraging(false)
          }
        }
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        
        
        if (typeof window !== 'undefined') {
            setWindowWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);
        }
    
        // Agregar el event listener cuando el componente se monta
        document.addEventListener('mouseup', handleMouseUp);
    
        // Remover el event listener cuando el componente se desmonta
        return () => {
          document.removeEventListener('mouseup', handleMouseUp);
          window.removeEventListener('resize', handleResize);
        };
    }, [])

    useEffect(()=>{
        if(isDraging) setCurrentPosition(mousePosition)
    },[mousePosition, isDraging])
    
  
    return (
        <>
            <div
            className={` 
            w-[500px] p-1 pt-0 bg-main rounded-[5px_5px_0_0] 
            sm:w-[95%] sm:hidden`}
                style={{
                    position: "absolute",
                left: currentPosition.x == 0 ?

                (windowWidth > 768) ? `${initialPosition.x}%` :
                (windowWidth <= 768 && windowWidth >=  562) && `${initialPosition.x / 4}%`

                :

                currentPosition.x - 315,

                top: currentPosition.y == 0 ? `${initialPosition.y}%` : currentPosition.y,
                zIndex:"90",
                userSelect: 'none'
                }}
            >
                {/* Header */}
                <div
                onMouseDown={()=>setIsDraging(true)}
                onMouseUp={()=>setIsDraging(false)}
                className="w-full bg-main text-[18px] flex items-center justify-between py-1
                md:text-[16px]">

                    {/* Titulo */}
                    <h4 className="text-dark flex items-center">
                        {/* icono */}
                        {icon == "b" && <FontAwesomeIcon className="w-[18px] mr-2" icon={faGear}/>}
                        {icon == "db" && <FontAwesomeIcon className="w-[18px] mr-2" icon={faServer}/>}
                        {icon == "hd" && <FontAwesomeIcon className="w-[18px] mr-2" icon={faPalette}/>}

                        {title}
                    </h4>

                    {/* Cerrar Modal */}
                    <button
                    className="text-[21px] text-main font-semibold bg-dark w-[28px] h-[28px] rounded-[7px] flex justify-center items-center">
                        x
                    </button>
                </div>

                {/* Content */}
                <div className="bg-dark text-main p-2">
                    {children}
                </div>
            </div>

            {/* //////////////////// Responsive //////////////////// */}
            <div
            className={` 
            w-full p-1 pt-0 bg-main rounded-[5px_5px_0_0] mb-[8px] hidden
            sm:block`}
                style={{
                zIndex:"90",
                userSelect: 'none'
                }}
            >
                {/* Header */}
                <div
                className="w-full bg-main text-[18px] flex items-center justify-between py-1
                md:text-[16px]">

                    {/* Titulo */}
                    <h4 className="text-dark flex items-center">
                        {/* icono */}
                        {icon == "b" && <FontAwesomeIcon className="w-[18px] mr-2" icon={faGear}/>}
                        {icon == "db" && <FontAwesomeIcon className="w-[18px] mr-2" icon={faServer}/>}
                        {icon == "hd" && <FontAwesomeIcon className="w-[18px] mr-2" icon={faPalette}/>}

                        {title}
                    </h4>

                    {/* Cerrar Modal */}
                    <button
                    className="text-[21px] text-main font-semibold bg-dark w-[28px] h-[28px] rounded-[7px] flex justify-center items-center">
                        x
                    </button>
                </div>

                {/* Content */}
                <div className="bg-dark text-main p-2">
                    {children}
                </div>
            </div>
        </>
    );
}