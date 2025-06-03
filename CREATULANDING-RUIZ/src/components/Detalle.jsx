import { useParams } from "react-router-dom";
import { productos } from "../productos";
import Error from "./Error.jsx";
import '../Detalle.css';

function Detalle() {
    const { id } = useParams();
    const producto = productos.find(prod => prod.id === parseInt(id));

    if (!producto) {
        return <Error />;
    }

    return (
        <div className="contenedor-detalle">

            <h2 className="detalle-titulo">Detalles del producto</h2> 

            <div className="detalle-contenido">

            <img className="detalle-imagen" src={producto.image} alt={producto.title} />

            <div className="detalle-info"> 

            <h3 className="detalle-item">{producto.title}</h3>  
            <p>{producto.description}</p>
            <p>Precio: ${producto.price}</p>

           </div>
           </div>
        </div>
    );
}

export default Detalle;