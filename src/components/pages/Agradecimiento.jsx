import React from 'react';
import Header from '../header/Header';
import Navbar from '../menu/Navbar';
import Footer from '../footer/footer';
import '../utils/agradecimiento.css';
import logo from '/assets/icon/logotipo.png';
const gracias = () => {

    return (
        <>
          <Header />
          <Navbar />
          <div className='container-gracias'>
            <p><img src={logo} alt="" /></p>
            <h6>¡GRACIAS POR TU COMPRA!</h6>
            <div className='boton3'>
              <a href="/carrito">
              <a>CERRAR</a>
              </a>
            </div>
          </div>
          <Footer  />
        </>
    )
}

export default gracias;
