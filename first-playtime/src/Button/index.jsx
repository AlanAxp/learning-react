import "./style.css"

let handeClick = () => {
    alert("Ha sido agregado al carrito")
}

const Button = ({layout}) => {
    return (
        <button onClick={handeClick}>
            {layout}
        </button>       
    )
}

export default Button;