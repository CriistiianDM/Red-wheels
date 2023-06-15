import React, { useState } from "react";

const FormLogin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [user_type, setUserType] = useState(null);

    const handleForm = (e) => {
        e.preventDefault();
    };

    /**
     * Gets the user credentials.
     */
    const handleChange = (e) => {
        switch (e.target.name) {
            case "username":
                setUsername(e.target.value);
                break;
            case "password":
                setPassword(e.target.value);
                break;
            case "user_type":
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
                <input name="username" type="text" placeholder="" onChange={handleChange} />

                <label>Tipo de usuario</label>
                <select name="user_type" defaultValue={"0"} onChange={handleChange}>
                    <option disabled value="0"></option>
                    <option value="1">Administrador</option>
                    <option value="2">Estudiante</option>
                </select>

                <label>Contraseña</label>
                <input name="password" type="password" placeholder="" onChange={handleChange} />

                <button type="submit">Ingresar</button>
                <a>Registrarse</a>
            </form>
        </div>
    );
};

export default FormLogin;
