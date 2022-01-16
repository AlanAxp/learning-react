import "./App.css";

import Role from "./Role"

// import React from "react"; // En la version actual no es necesario importarlo

function App() {
    return (
        // Para el nombre de las clases dentro de los componentes se usa className
        <div>
            <Person name="Alan"/>         
            <Role role={"Admin"}/>
            <Button layout={"Aprieta aqui"}/>
        </div>            
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