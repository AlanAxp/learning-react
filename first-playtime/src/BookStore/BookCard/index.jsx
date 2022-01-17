import React from "react"
import "./style.css"

import BookStars from "../BookStars"
import Button from "../../Button"


const bookCard = ({name, description, rate, picture}) => {
    return (
        <article>
            <img className="book-img" src={picture} alt="book-img"/>
            <div className="book-info">
                <div>
                    <p>Puntuación:</p> <BookStars rate={rate}/>
                </div>
                <p>Nombre: {name}</p>
                <p>Descripción: {description}</p>
            </div>
            <Button layout={"Agregar al carrito"}/>
        </article>       
    )
}

export default bookCard;