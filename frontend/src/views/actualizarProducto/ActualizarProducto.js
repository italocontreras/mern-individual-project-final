import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';

const ActualizarProducto = () => {
    var { idProducto } = useParams();
    const [nombre, setNombre] = useState();
    const [precio, setPrecio] = useState();
    const [cantidad, setCantidad] = useState();

    useEffect(() => {
        console.log(idProducto);
        axios.get("http://localhost:8000/productos/detalle/" + idProducto)
        .then((response) => {
            console.log(response.data.nombre);
            console.log(response.data.precio);
            console.log(response.data.cantidad);

            setNombre(response.data.nombre);
            setPrecio(response.data.precio);
            setCantidad(response.data.cantidad);
        });
    }, []);

    const editar = (e) => {
        e.preventDefault();

        var datos = {
            nombre: nombre,
            precio: precio,
            cantidad: cantidad
        };

        axios.put("http://localhost:8000/productos/actualizar/" + idProducto, datos)
        .then((response) => {
            if(response.status == 200){
                //retornamos a la lista
            }
        });
    }

    return(
        <div>
            <form onSubmit={editar}>
                <div className="input-group">
                    <span className="input-group-text" id="basic-addon3">Nombre</span>
                    <input type="text" className="form-control" value={nombre} onChange={(e) => setNombre(e.target.value)} id="nombre" aria-describedby="basic-addon3 basic-addon4"/>
                </div>
                <div className="input-group">
                    <span className="input-group-text" id="basic-addon3">Precio</span>
                    <input type="text" className="form-control" value={precio} onChange={(e) => setPrecio(e.target.value)} id="precio" aria-describedby="basic-addon3 basic-addon4"/>
                </div>
                <div className="input-group">
                    <span className="input-group-text" id="basic-addon3">Cantidad</span>
                    <input type="text" className="form-control" value={cantidad} onChange={(e) => setCantidad(e.target.value)} id="cantidad" aria-describedby="basic-addon3 basic-addon4"/>
                </div>
                <button type="submit" className="btn btn-primary">Editar</button>
            </form>
        </div>
    );
}

export default ActualizarProducto;