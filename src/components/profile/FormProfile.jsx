//import libs
import React from 'react';


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

    return (
        <>
            <main className="_container_form_profile">
                <div className="_container_form_profile__item">
                    <form>
                        <div className="_container_form_inpust">

                                <div className="_container_form_inpust__item">

                                    <h1 htmlFor="name">Datos de Cuenta</h1>
                                    <div className="_all_input">
                                        <label htmlFor="name">Nombre usuario</label>
                                        <input 
                                            placeholder="CristianK" 
                                            type="text" 
                                            name="usuario" 
                                            id="usuario" />
                                        <label htmlFor="name">Correo electrónico</label>
                                        <input 
                                            placeholder="cristiank@gmail.com"
                                            type="text" 
                                            name="correo" 
                                            id="correo" />
                                    </div>

                                    <h1 htmlFor="name">Seguridad</h1>
                                    <div className="_all_input">
                                        <input 
                                                placeholder="Contraseña"
                                                type="password"
                                                name="contra"
                                                id="contra" />
                                    </div>

                                </div>

                                <div className="_container_form_inpust__item">
                                    
                                    <h1 htmlFor="name">Datos Personales</h1>
                                        <div className="_all_input">
                                            <label htmlFor="name">Nombre</label>
                                            <input
                                                placeholder="Cristian"
                                                type="text"
                                                name="nombre"
                                                id="nombre" />
                                            <label htmlFor="name">Apellido</label>
                                            <input
                                                placeholder="Machado"
                                                type="text"
                                                name="apellido"
                                                id="apellido" />
                                            <label htmlFor="name">Identificación</label>
                                            <input
                                                placeholder="111122223"
                                                type="text"
                                                name="identidad"
                                                id="identidad" />
                                            <label htmlFor="name">Celular</label>
                                            <input
                                                placeholder="3004582269"
                                                type="text"
                                                name="celular"
                                                id="celular" />
                                        </div>
                                </div>

                        </div>
                    </form>
                </div>
            </main> 
        </>
    )

};



export default FormProfile;