//import libs
import React from 'react';
import { useNavigate } from 'react-router-dom';

//Here is the component
const FormProfile = ({
    first_content,
    second_content,
}) => {

    const [ data, setData ] = React.useState({
        first_content: [],
        second_content: []
    })


    React.useEffect(() => {
        setData({
            first_content: first_content? first_content : [],
            second_content: second_content? second_content : []
        })
    }, [first_content, second_content])

    const navigate =useNavigate();
    return (
        <>
            
                    <form id='Agregarcentro'>
                                <div className="_container_form_inpust__item" id='actualizar_perfil'>
                                        <div className="_all_input">
                                            <label htmlFor="name">DATOS PERSONALES</label>
                                            <label htmlFor="name">NOMBRE DE USUSARIO</label>
                                            <input 
                                            placeholder="CristianK" 
                                            type="text" 
                                            name="usuario" 
                                            id="usuario" />
                                            <label htmlFor="name">CORREO ELECTRONICO</label>
                                        <input 
                                            placeholder="cristiank@gmail.com"
                                            type="email" 
                                            name="correo" 
                                            id="correo" />
                                            <label htmlFor="name">NOMBRE COMPLETO</label>
                                        <input
                                            placeholder="Cristian"
                                            type="text"
                                            name="nombre"
                                            id="nombre" />
                                        <label htmlFor="name">TIPO DE USUARIO</label>
                                        <input
                                            placeholder="Usuario"
                                            type="text"
                                            name="tipo_usuario"
                                            id="tipo_usuario" />
                                        <label htmlFor="name">CONTRASEÑA</label>
                                        <input 
                                            placeholder="Contraseña"
                                            type="password"
                                            name="contra"
                                            id="contra" />
                                        </div>
                                </div>
                                <div className="Actualizar">
                                <a onClick={() => navigate("/profile")} className="buy-button" id='BotonActualizar'>ACTUALIZAR</a> 
                                </div>
                    </form>
        
        </>
    )

};
export default FormProfile;