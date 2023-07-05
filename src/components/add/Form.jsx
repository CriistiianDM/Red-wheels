//import libs
import React from "react";
import { useNavigate } from "react-router-dom";

//Here is the component
const FormProfile = ({ first_content, second_content }) => {
    const [data, setData] = React.useState({
        first_content: [],
        second_content: [],
    });

    React.useEffect(() => {
        setData({
            first_content: first_content ? first_content : [],
            second_content: second_content ? second_content : [],
        });
    }, [first_content, second_content]);

    const navigate = useNavigate();
    return (
        <>
            <form id="Agregarcentro">
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
                    <a onClick={() => navigate("/login")} className="buy-button" id="BotonAgregar">
                        AGREGAR
                    </a>
                </div>
            </form>
        </>
    );
};
export default FormProfile;
