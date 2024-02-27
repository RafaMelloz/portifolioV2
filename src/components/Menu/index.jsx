import { useState } from "react";
import "./styles.css"

import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

export const Menu = () =>{

    const [menuOpen, setMenuOpen] = useState(false)

    return(   
        <>  

            <header class="top-menu">
                <ul>
                    <li class="selector"><a href="#inicio">Início</a></li>
                    <li class="selector"><a href="#sobreMim">Sobre Mim</a></li>
                    <li class="selector"><a href="#projetos">Projetos</a></li>
                    <li class="selector"><a href="#habilidades">Habilidades</a></li>

                </ul>
            </header>
            <div className="headBlock"></div>

            <h1 className="icon-menu">
                {menuOpen === false ?
                    <IoMenu onClick={() => setMenuOpen(true)} />
                    :
                    <IoClose className="close-menu" onClick={() => setMenuOpen(false)} />
                }
            </h1>
            


            {menuOpen === true ?
                <div className="menu-mobile">
                    <ul className="ul-mobile">
                        
                        <li class="selector" onClick={() => setMenuOpen(false)}><a href="#inicio">Início</a></li>
                        <li class="selector" onClick={() => setMenuOpen(false)}><a href="#sobreMim">Sobre Mim</a></li>
                        <li class="selector" onClick={() => setMenuOpen(false)}><a href="#projetos">Projetos</a></li>
                        <li class="selector" onClick={() => setMenuOpen(false)}><a href="#habilidades">Habilidades</a></li>

                    </ul>
                </div>
                :
                null
            }
        </>  
    )
}