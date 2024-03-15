import { faGear, faPalette, faPallet, faServer } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function TagTechnology({children, type}) {
  return (
    <div className=' text-main rounded-[5px] border-2 border-main font-semibold px-2 flex items-center'>

        {/* Icono */}
        {type == "front" && <p>{"</>"}</p> }
        {type == "back" && <FontAwesomeIcon className="w-[21px] ml-1" icon={faGear}/>}
        {type == "db" && <FontAwesomeIcon className="w-[21px] ml-1" icon={faServer}/>}
        {type == "d" && <FontAwesomeIcon className="w-[21px] ml-1" icon={faPalette}/>}
        
        {/* Nombre */}
        <p className="ml-2">{children}</p>

    </div>
  )
}
