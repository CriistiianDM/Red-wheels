import React, { useState, useContext, useRef} from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../services/user";
import UserContext from "../../context/user/UserContext";
import ReCAPTCHA from "react-google-recaptcha";

//INSTALAR PARA EL CAPTCHA  "npm install --save react-google-recaptcha"

const FormLogin = () => {
    const [email, setEmail] = useState("");
    const [contraseña, setContraseña] = useState("");
    const [rolId, setUserType] = useState(null);

    const navigate = useNavigate();

    const [ captchaValido,cambiarCaptchaValido] = useState(null);
    const [usuarioValido, cambiarUsuarioValido] = useState(false);     
    const captcha = useRef(null);

    const onChange = async()  => {
        console.log(captcha.current);
        if (captcha.current.getValue()){
            cambiarCaptchaValido(true);
            cambiarUsuarioValido(true);
        }else {
            cambiarCaptchaValido(false);
            cambiarUsuarioValido(false);
        }
    }

    const { setAuth, setUserId, setUserRole, setUserEmail, setUsername } = useContext(UserContext);

    const handleForm = async (e) => {
        e.preventDefault();
        console.log(email, contraseña, rolId);
        try {
            const data = await login({ email, contraseña, rol: rolId });

            if (data.status === 200 || data.status === 201) {
                setAuth(data.isAuth);
                setUserId(data.id);
                setUserRole(data.tipoUsuario);
                setUsername(data.username);
                setUserEmail(data.email);
                setEmail("");
                setContraseña("");

                // Saves the token to the local storage.
                window.localStorage.setItem("logged", JSON.stringify(data));

                navigate("/");

            }
            else {
                alert(`Revisa tus credenciales o tu tipo de usuario y vuelve a intentarlo. 
                        Si el problema persiste, contacta con el administrador. O Crea una cuenta si no tienes una.`);
            }

        } catch (error) {
            alert(`Mensaje de error: ${error.response.data.message}
                  \n Revisa tus credenciales o tu tipo de usuario y vuelve a intentarlo. 
                  Si el problema persiste, contacta con el administrador. O Crea una cuenta si no tienes una.`);
            
            throw new Error(error.response.data.message);
        }
    };

    /**
     * Gets the user credentials.
     */
    const handleChange = (e) => {
        switch (e.target.name) {
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
            <form onSubmit={handleForm}  className="_form_login">
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

                <label>Email</label>
                <input
                    name="email"
                    type="text"
                    placeholder=""
                    onChange={handleChange}
                    value={email}
                />

                <label>Contraseña</label>
                <input
                    name="contraseña"
                    type="password"
                    placeholder=""
                    onChange={handleChange}
                    value={contraseña}
                />

                <div className="recaptcha">
                <ReCAPTCHA
                    ref={captcha}
                    sitekey="6LeaWPcmAAAAAHGmH2oRM_GGnc196BXhPfFsW0FH"
                    onChange={onChange}
                />
                </div>

                {usuarioValido == false && <div className="error-captcha">Por favor acepta el captcha</div>}
                <button style={{ cursor: 'pointer'}} type="submit" disabled={!usuarioValido}>Ingresar</button>
                <Link to="/register">Registrarse</Link>
            </form>
        </div>
    );
};

export default FormLogin;
