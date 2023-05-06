import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import "./ListarProductos.css";

const ListarProductos = () => {
    const [listaProductos, setListaProductos] = useState([{}]);
    const navigate = useNavigate();

    useEffect(() => {
        console.log("Inicio el componente");
        axios.get("http://localhost:8000/productos/listar").then(result => {
            console.log(result.data);
            setListaProductos(result.data);
        });
    }, []);

    const irAlCrear = () => {
        navigate("/");
    }

    return(
        <div style={{"textAlign": "center"}}>
            <br/>
            <button onClick={irAlCrear}>Ir al formulario de creacion</button>
            <br/>
            <br/>
            {
               listaProductos.map((item, index) => {
                return <div key={index} className="producto">
                    <p><strong>Nombre:</strong> {item.nombre}</p>
                    <p><strong>Precio:</strong> {item.precio}</p>
                    <p><strong>Cantidad:</strong> {item.cantidad}</p>
                </div>
               }) 
            }
        </div>
    );
}

export default ListarProductos;