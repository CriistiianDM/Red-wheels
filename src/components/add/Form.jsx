//import libs
import React from "react";
import { useNavigate } from "react-router-dom";

const FormProfile = ({ product }) => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/inventario");
    };

    return (
        <>
            <form id="Agregarcentro" onSubmit={handleSubmit}>
                <div className="_container_form_inpust__item" id="Agrgar_producto">
                    <div className="_all_input">
                        <label htmlFor="name">ID</label>
                        <input placeholder="1245" type="number" name="id" id="id" />
                        <label htmlFor="name">NOMBRE</label>
                        <input
                            placeholder="Tesla Model 3"
                            type="text"
                            name="nom_producto"
                            id="nom_producto"
                        />
                        <label htmlFor="name">MARCA</label>
                        <input placeholder="Tesla" type="text" name="marca" id="marca" />
                        <label htmlFor="name">DESCRIPCION</label>
                        <input placeholder="450KM" type="text" name="descrip" id="descrip" />
                        <label htmlFor="name">CANTIDAD</label>
                        <input placeholder="20" type="number" name="cantidad" id="cantidad" />
                        <label htmlFor="name">PRECIO</label>
                        <input placeholder="640000" type="text" name="precio" id="precio" />
                    </div>
                </div>
                <div className="_actions">
                    <button type="submit" className="buy-button" id="BotonAgregar">
                        AGREGAR
                    </button>
                </div>
            </form>
        </>
    );
};
export default FormProfile;
