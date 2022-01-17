import "./App.css";
import BookCollection from "./BookStore/BookCollection";
import Header from "./Header";

import Role from "./Role"

// import React from "react"; // En la version actual no es necesario importarlo

// Para el nombre de las clases dentro de los componentes se usa className
function App() {
    return (
        <>
            <Header/>
            <BookCollection/>
        </>        
    )
}

// Componentes dentro del mismo archivo
const Person = ({name}) => {
    return <h1>Nombre: {name}</h1>
}

const Button = ({layout}) => {
    return <button>{layout}</button>
}


export default App

