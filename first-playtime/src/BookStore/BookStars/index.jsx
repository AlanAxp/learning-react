import React from "react"
import "./style.css"

import star from "./star.svg"



const BookStars = ({rate}) => {
    
    let stars = [];
    // Usando un for para mostrar un arreglo de elementos
    for (let i = 0; i < rate; i++) {
        stars.push(
            <img src={star} alt="starRate" key={i}/>
        );
    }

    return <div>{stars}</div>;

}

export default BookStars;