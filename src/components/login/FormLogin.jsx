import React from "react";


const FormLogin = () => {

    const handleForm = (e) => {
        e.preventDefault();
    };

    return (
        <>
            <div className="_container_form_login">
                <form onSubmit={handleForm} className="_form_login">

                    <div className="_img_circle">
                        <img src="/assets/icon/profile.svg" alt="circle" />
                    </div>

                    <label>
                        Nombre de usuario
                    </label>
                    <input type="text" placeholder="" />

                    <label>
                        Tipo de usuario
                    </label>
                    <select>
                        <option disabled selected value="0"></option>
                        <option value="1">Administrador</option>
                        <option value="2">Estudiante</option>
                    </select>

                    <label>
                        Contraseña
                    </label>
                    <input type="password" placeholder="" />

                    <button type="submit">
                        Ingresar
                    </button>
                    <a>
                        Registrarse
                    </a>
                </form>
            </div>
        </>
    )

};

export default FormLogin;