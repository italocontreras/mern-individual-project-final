import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import "./CrearProducto.css";

const CrearProducto = () => {
    const navigate = useNavigate();
    const [mensaje, setMensaje] = useState();

    const crearProducto = (e) => {
        e.preventDefault();

        if(e.target.nombre.value == ""){
            setMensaje("Ingrese el nombre");
            return;
        } else if(e.target.precio.value == ""){
            setMensaje("Ingrese el precio");
            return;
        } else if(e.target.cantidad.value == ""){
            setMensaje("Ingrese la cantidad");
            return;
        }

        var data = {
            nombre: e.target.nombre.value,
            precio: e.target.precio.value,
            cantidad: e.target.cantidad.value,
        }

        axios.post("http://localhost:8000/productos/crear", data)
        .then(result => {
            setMensaje("Producto Creado!");
        })
        .catch(error => console.log(error));
    }

    const irAlListado = () => {
        navigate("/listado");
    }

    return(
        <div style={{"textAlign": "center"}}>
            <h4>Formulario de Crear Producto</h4>
            <form onSubmit={crearProducto}>
                <label for="fname">Nombre</label>
                <br/>
                <input type="text" name="" id="nombre" />
                <br/>
                <label for="fname">Precio</label>
                <br/>
                <input type="text" name="" id="precio" />
                <br/>
                <label for="fname">Cantidad</label>
                <br/>
                <input type="text" name="" id="cantidad" />
                <br/>
                {mensaje}
                <br/>
                <button type="submit" className="btn btn-danger">Crear Nuevo Producto</button>
            </form>
            <br/>
            <button onClick={irAlListado}>Ver mis productos creados</button>
            <Link to={"/listado"}>Ir a mi listado</Link>
        </div>
    );
}

export default CrearProducto;