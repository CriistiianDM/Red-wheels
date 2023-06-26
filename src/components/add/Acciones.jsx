//import libs
import React from 'react';
import FormProfile from './Form';
import './Prod.css'
import FooterLogin from '../login/FooterLogin';
//create a component
const Acciones = ({
    name
}) => {

     const [ data, setData ] = React.useState({
            name: ''
    })
    
    //la magia ocurre aqui :v
    React.useEffect(() => {
        setData({
            name: name? name : 'AGREGAR PRODUCTO'
        })

    }, [ name])

     return (
        <>
           <main className="_container_profile_actions">
               <h1 className='_name_profile'>{data.name}</h1>
               <FormProfile />
               <FooterLogin />
           </main>
        </>
     )

};


export default Acciones;