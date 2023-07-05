//import libs
import React from "react";
import { useNavigate } from "react-router-dom";
import { vehicle } from "../../services/product";
import { replacement } from "../../services/replacement";

const FormProfile = ({ product }) => {
    const [newProduct, setNewProduct] = React.useState({
        tipo: product === "carro" ? 1 : 2 || 0,
        nombre: "",
        modelo: "",
        marca: 0,
        descripcion: "",
        stock: 0,
        precio: 0,
        sucursales: [],
        vehiculo: "",
    });

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(newProduct);

        try {
            let data;

            if (product === "carro" || product === "moto") {
                data = await vehicle({
                    tipo: newProduct.tipo,
                    nombre: newProduct.nombre,
                    modelo: newProduct.modelo,
                    marca: newProduct.marca,
                    descripcion: newProduct.descripcion,
                    stock: newProduct.stock,
                    precio: newProduct.precio,
                    sucursales: newProduct.sucursales,
                });
            } else {
                data = await replacement({
                    nombre: newProduct.nombre,
                    vehiculo: newProduct.vehiculo,
                    stock: newProduct.stock,
                    precio: newProduct.precio,
                    sucursales: newProduct.sucursales,
                });
            }

            console.log(newProduct);
            console.log(data);

            if (data.status === 201) {
                navigate("/inventario");
                console.log("Producto agregado");
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === "sucursales") {
            const arraySucursales = e.target.value.split(",");
            setNewProduct({
                ...newProduct,
                [e.target.name]: arraySucursales,
            });
        } else {
            setNewProduct({
                ...newProduct,
                [e.target.name]: e.target.value,
            });
        }
    };

    return (
        <>
            {product === "carro" || product === "moto" ? (
                <form id="Agregarcentro" onSubmit={handleSubmit}>
                    <div className="_container_form_inpust__item" id="Agrgar_producto">
                        <div className="_all_input">
                            <label htmlFor="nom_producto">NOMBRE</label>
                            <input
                                placeholder="Tesla Model 3"
                                type="text"
                                name="nombre"
                                id="nom_producto"
                                onChange={handleChange}
                                value={newProduct.nombre}
                            />
                            <label htmlFor="modelo">MODELO</label>
                            <input
                                placeholder="2023"
                                type="text"
                                name="modelo"
                                id="modelo"
                                onChange={handleChange}
                                value={newProduct.modelo}
                            />
                            <label htmlFor="marca">MARCA</label>
                            <input
                                placeholder="Tesla"
                                type="text"
                                name="marca"
                                id="marca"
                                onChange={handleChange}
                                value={newProduct.marca}
                            />
                            <label htmlFor="descrip">DESCRIPCION</label>
                            <input
                                placeholder="450KM"
                                type="text"
                                name="descripcion"
                                id="descrip"
                                onChange={handleChange}
                                value={newProduct.descripcion}
                            />
                            <label htmlFor="stock">CANTIDAD</label>
                            <input
                                placeholder="20"
                                type="number"
                                name="stock"
                                id="cantidad"
                                onChange={handleChange}
                                value={newProduct.stock}
                            />
                            <label htmlFor="precio">PRECIO</label>
                            <input
                                placeholder="640000"
                                type="text"
                                name="precio"
                                id="precio"
                                onChange={handleChange}
                                value={newProduct.precio}
                            />
                            <label htmlFor="sucursales">SUCURSALES</label>
                            <input
                                placeholder="1,2"
                                type="text"
                                name="sucursales"
                                id="sucursales"
                                onChange={handleChange}
                                value={newProduct.sucursales}
                            />
                        </div>
                    </div>
                    <div className="_actions">
                        <button type="submit" className="buy-button" id="BotonAgregar">
                            AGREGAR
                        </button>
                    </div>
                </form>
            ) : (
                <form id="Agregarcentro" onSubmit={handleSubmit}>
                    <div className="_container_form_inpust__item" id="Agrgar_producto">
                        <div className="_all_input">
                            <label htmlFor="nom_producto">NOMBRE</label>
                            <input
                                placeholder="Neumaticos"
                                type="text"
                                name="nombre"
                                id="nom_producto"
                                onChange={handleChange}
                                value={newProduct.nombre}
                            />
                            <label htmlFor="vehiculo">VEHICULO</label>
                            <input
                                placeholder="1"
                                type="number"
                                name="vehiculo"
                                id="vehiculo"
                                onChange={handleChange}
                                value={newProduct.vehiculo}
                            />
                            <label htmlFor="stock">CANTIDAD</label>
                            <input
                                placeholder="20"
                                type="number"
                                name="stock"
                                id="cantidad"
                                onChange={handleChange}
                                value={newProduct.stock}
                            />
                            <label htmlFor="precio">PRECIO</label>
                            <input
                                placeholder="640000"
                                type="text"
                                name="precio"
                                id="precio"
                                onChange={handleChange}
                                value={newProduct.precio}
                            />
                            <label htmlFor="sucursales">SUCURSALES</label>
                            <input
                                placeholder="1,2"
                                type="text"
                                name="sucursales"
                                id="sucursales"
                                onChange={handleChange}
                                value={newProduct.sucursales}
                            />
                        </div>
                    </div>
                    <div className="_actions">
                        <button type="submit" className="buy-button" id="BotonAgregar">
                            AGREGAR
                        </button>
                    </div>
                </form>
            )}
        </>
    );
};
export default FormProfile;
