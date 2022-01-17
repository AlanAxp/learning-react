import React from "react"
import "./style.css"

import BookCard from "../BookCard"

import books_db from "../books_db.json"

console.log(books_db)


const BookCollection = () => {


    return (
        <div className='main-collection'>
            {
                //Usando map para mostrar varios libros
                books_db["db_books"]
                .map(book =>  
                    <BookCard 
                        picture={book.image}
                        rate={book.rate} 
                        name={book.name} 
                        description={book.description} 
                        key={book.id}
                    />  
                )
            }
        </div>
    )
}

export default BookCollection;