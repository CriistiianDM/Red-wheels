//import libs
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { updateUser } from '../../services/gestionUser';


//Here is the component
const FormProfile = ({
    first_content,
    second_content,
}) => {

    const [ data, setData ] = React.useState({
        first_content: [],
        second_content: []
    })

    const onSubmit = async (e) => {
        e.preventDefault();

        const data_id_type = {
            'gerente': 1,
            'vendedor': 2,
            'jefe-taller': 3,
            'cliente': 4    
        }

        //sacar los datos del formulario
        const nombre = document.getElementById('nombreEditar').value;
        const correo = document.getElementById('correoEditar').value;
        const contra = document.getElementById('contraEditar').value;

        console.log(nombre, correo, contra);
        if (nombre === '' || correo === '' || contra === '') {
            console.log('error');
            return;
        }
        else {

            try {
                const logged = (JSON.parse(window.localStorage.getItem("logged")))?.data;
                const dataUpdate = {
                    'rol': data_id_type[logged.tipoUsuario],
                    'nombre': nombre,
                    'email': correo,
                    'contraseña': contra,
                    'id': logged.id
                }
    
                const response = await updateUser(dataUpdate);
                console.log(response);
            }
            catch (error) {
                console.log(error);
            }

        }
    
    }

    React.useEffect(() => {
        setData({
            first_content: first_content? first_content : [],
            second_content: second_content? second_content : []
        })
    }, [first_content, second_content])

    const navigate =useNavigate();

    return (
        <>
            <form onSubmit={onSubmit} id='Agregarcentro'>
                <div className="_container_form_inpust__item" id='actualizar_perfil'>
                        <div className="_all_input">
                            <label htmlFor="name">NOMBRE COMPLETO</label>
                                <input
                                    placeholder="Nombre"
                                    type="text"
                                    name="nombre"
                                    id="nombreEditar" />
                            <label htmlFor="name">CORREO ELECTRONICO</label>
                                <input 
                                    placeholder="Email"
                                    type="email" 
                                    name="correo" 
                                    id="correoEditar" />
                            <label htmlFor="name">CONTRASEÑA</label>
                                <input 
                                    placeholder="Contraseña"
                                    type="password"
                                    name="contra"
                                    id="contraEditar" />
                            <div style={{ display: 'grid', placeItems: 'center'}} className="Actualizar">
                                <button style={{ border: "none"}} type='submit' className="buy-button" id='BotonCancelar'>Actualizar</button>
                            </div>
                        </div>
                </div>
            </form>
        </>
    )

};
export default FormProfile;