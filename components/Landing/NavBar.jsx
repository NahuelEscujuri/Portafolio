import { useState } from "react"

export default function NavBar(){
    const [openMenu, setOpenMenu] = useState(false)
    return(
        <header className="header">

            <p onClick={()=> setOpenMenu(!openMenu)} className={`menu-icon ${openMenu && "active"}`} id="menu-icon">▲</p>

            <div className={`navegation ${openMenu && "active"}`}>

                <ul className="menu">

                    <li className="menu_item">
                        <a href="#about">Sobre Mi</a>
                    </li>

                    <li className="menu_item">
                        <a href="#skills">Habilidades</a>
                    </li>

                    <li className="menu_item">
                        <a href="#proyects">Proyectos</a>				
                    </li>

                    <li className="menu_item">
                        <a href="#contact">Contacto</a>
                    </li>
                </ul>

            </div>
        </header>
    )
}