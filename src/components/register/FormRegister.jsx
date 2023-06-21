import React, { useState, useContext } from "react";
import { register } from "../../services/user";
import UserContext from "../../context/user/UserContext";

const FormLogin = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [rolId, setUserType] = useState(null);

    const { setAuth, setUserId, setUser } = useContext(UserContext);

    const handleForm = async (e) => {
        e.preventDefault();

        try {
            const data = await register({ rol: rolId, nombre, email, contraseña });

            setAuth(data.isAuth);
            setUserId(data.id);
            setUser(data.email);
            setNombre("");
            setEmail("");
            setContraseña("");

            // Saves the token to the local storage.
            window.localStorage.setItem("logged", JSON.stringify(data));
        } catch (error) {
            throw new Error(error.response.data.message);
        }
    };

    /**
     * Gets the user credentials.
     */
    const handleChange = (e) => {
        switch (e.target.name) {
            case "nombre":
                setNombre(e.target.value);
                break;
            case "email":
                setEmail(e.target.value);
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

                <label>Tipo de usuario</label>
                <select name="rolId" defaultValue={"0"} onChange={handleChange}>
                    <option disabled value="0"></option>
                    <option value="1">Gerente</option>
                    <option value="2">Vendedor</option>
                    <option value="3">Jefe de taller</option>
                    <option value="4">Cliente</option>
                </select>

                <label htmlFor="nombre">Nombre</label>
                <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    onChange={handleChange}
                    value={nombre}
                />

                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="text" onChange={handleChange} value={email} />

                <label htmlFor="contraseña">Contraseña</label>
                <input
                    id="contraseña"
                    name="contraseña"
                    type="password"
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
