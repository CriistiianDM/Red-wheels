import React, { useState } from "react";
import { login } from "../../services/user";

const FormLogin = () => {
    const [username, setUsername] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [rolId, setUserType] = useState(null);

    const handleForm = async (e) => {
        e.preventDefault();

        try {
            const res = await login({ username, contraseña, id_rol: rolId });
            console.log(res);
        } catch (error) {
            console.log(error.response.data);
        }
    };

    /**
     * Gets the user credentials.
     */
    const handleChange = (e) => {
        switch (e.target.name) {
            case "username":
                setUsername(e.target.value);
                break;
            case "contraseña":
                setContraseña(e.target.value);
                break;
            case "rolId":
                setUserType(e.target.value);
            default:
        }
    };

    return (
        <div className="_container_form_login">
            <form onSubmit={handleForm} className="_form_login">
                <div className="_img_circle">
                    <img src="/assets/icon/profile.svg" alt="circle" />
                </div>

                <label>Nombre de usuario</label>
                <input
                    name="username"
                    type="text"
                    placeholder=""
                    onChange={handleChange}
                    value={username}
                />

                <label>Tipo de usuario</label>
                <select name="rolId" defaultValue={"0"} onChange={handleChange}>
                    <option disabled value="0"></option>
                    <option value="1">Gerente</option>
                    <option value="2">Vendedor</option>
                    <option value="3">Jefe de taller</option>
                    <option value="4">Cliente</option>
                </select>

                <label>Contraseña</label>
                <input
                    name="contraseña"
                    type="password"
                    placeholder=""
                    onChange={handleChange}
                    value={contraseña}
                />

                <button type="submit">Ingresar</button>
                <a>Registrarse</a>
            </form>
        </div>
    );
};

export default FormLogin;
