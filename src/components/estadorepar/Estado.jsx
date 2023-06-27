//import libs
import React from 'react';
import Reparando from './Reparando';
import './estado.css'
import FooterLogin from '../login/FooterLogin';
//create a component
const Estado = () => {
     return (
        <>
           <main className="_container_profile_actions">
               <Reparando />
               <FooterLogin />
           </main>
        </>
     )

};


export default Estado;