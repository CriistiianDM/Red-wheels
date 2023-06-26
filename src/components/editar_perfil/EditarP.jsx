//import libs
import React from 'react';
import FormularioEditar from './FormularioEditar';
import './Editar.css'
import FooterLogin from '../login/FooterLogin';
//create a component
const EditarP = ({
    name
}) => {

     const [ data, setData ] = React.useState({
            name: ''
    })
    
    //la magia ocurre aqui :v
    React.useEffect(() => {
        setData({
            name: name? name : 'EDITAR PERFIL'
        })

    }, [ name])

     return (
        <>
           <main className="_container_profile_actions">
               <h1 className='_name_profile'>{data.name}</h1>
               <FormularioEditar />
               <FooterLogin />
           </main>
        </>
     )

};


export default EditarP;