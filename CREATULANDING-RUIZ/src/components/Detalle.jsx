import { useParams } from "react-router-dom";
import { productos } from "../productos";
import Error from "./Error.jsx";

function Detalle() {
    const { id } = useParams();
    const producto = productos.find(prod => prod.id === parseInt(id));

    if (!producto) {
        return <Error />;
    }

    return (
        <div>
            <h2>Detalles del producto</h2>
            <h2>{producto.title}</h2>  
            <p>{producto.description}</p>
            <p>Precio: ${producto.price}</p>
            <img src={producto.image} alt={producto.title} />
        </div>
    );
}

export default Detalle;