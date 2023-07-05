import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../services/user";
import UserContext from "../../context/user/UserContext";

const FormLogin = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [rolId, setUserType] = useState(null);
    const [ havePermission, setHavePermission ] = useState(false);
    const [ isLogged, setIsLogged ] = useState(true);

    const navigate = useNavigate();

    const { setAuth, setUserId, setUser } = useContext(UserContext);

    const handleForm = async (e) => {
        e.preventDefault();

        try {
            const data = await register({ rol: rolId, nombre, email, contraseña });

            if (data.status === 200 || data.status === 201) {
                setAuth(data.isAuth);
                setUserId(data.id);
                setUser(data.email);
                setNombre("");
                setEmail("");
                setContraseña("");
                navigate("/");

                // Saves the token to the local storage.
                window.localStorage.setItem("logged", JSON.stringify(data));
            }
        } catch (error) {
            throw new Error(error.response.data);
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

    const handleVerificationRol = () => {

        try {

            if (window.localStorage.hasOwnProperty("logged")) {

                const logged = (JSON.parse(window.localStorage.getItem("logged")))?.data;

                if (logged?.isAuth && logged?.tipoUsuario === 'gerente') {
                    setHavePermission(true);
                    setIsLogged(true);
                }
                else {

                    if (logged?.isAuth) {
                        setHavePermission(false);
                        setIsLogged(false);
                        navigate('/');
                    }

                }
               
            }
            else {
                console.log('no existe');
                setHavePermission(false);
                setIsLogged(true);
            }

        }
        catch (error) {
            console.log(error);
        }

    }

    React.useEffect(() => {
        handleVerificationRol();
    }, []);

    return (
        <>
        {
            isLogged &&
            <div className="_container_form_login">
                <form onSubmit={handleForm} className="_form_login">
                    <div className="_img_circle">
                        <img src="/assets/icon/profile.svg" alt="circle" />
                    </div>

                    <label>Tipo de usuario</label>
                    <select name="rolId" defaultValue={"0"} onChange={handleChange}>
                        <option disabled value="0"></option>
                        <option value="4">Cliente</option>
                        {
                        havePermission &&
                        <>
                            <option value="2">Vendedor</option>
                            <option value="3">Jefe de taller</option>
                            <option value="1">Gerente</option>
                        </>
                        }
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

                    <button style={{ cursor: 'pointer'}} type="submit">Crear Cuenta</button>
                    <Link to="/login">Iniciar sesión</Link>
                </form>
            </div>
        }
        </>
    );
};

export default FormLogin;
