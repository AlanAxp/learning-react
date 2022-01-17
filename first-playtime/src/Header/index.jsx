import React from "react"
import "./style.css"

const Header = (props) => {
    return (
        <header>
            <div>
                <p>Tienda de libritos</p>
            </div>
            <div>
                Jugando con React
            </div>
            <nav>
                <ul>
                    <li>
                        Inicio
                    </li>
                    <li>
                        Usuario
                    </li>
                </ul>
            </nav>
        </header>      
    )
}

export default Header;