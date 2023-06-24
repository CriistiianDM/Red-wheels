import React from 'react';
import Header from '../header/Header';
import Navbar from '../menu/Navbar';
import Footer from '../footer/footer';
import '../utils/Pago.css';
import jcb from '/assets/card_icon/jcb.svg';
import visa from '/assets/card_icon/visa.svg';
import mastercard from '/assets/card_icon/mastercard.svg';

const Pagos = () => {

    return (
        <>
          <Header />
          <Navbar />
          <div className='container-pago'>
            <div className='container-rectangulo'>
                <div className='titulo'>
                <h4>Procesamiento de Pago</h4>
                </div>
                <div className="imagenes">
                    <a><img src={jcb} alt="" /></a>
                    <a><img src={visa} alt="" /></a>
                    <a><img src={mastercard} alt="" /></a>
                </div>
                <div className='datos-tarjeta'>
                    <label>
                        Datos de la tarjeta
                    </label>
                </div>
                  <div className='nombre-titular'>
                      <label>Nombre Titular</label>
                      <p><input type="text" placeholder="" /></p>
                  </div>    
                  <div className='num-tarjeta'>
                      <label>Numero Tarjeta</label>
                      <p><input type="text" placeholder="" /></p>
                  </div>  
                  <div className='fecha'>
                      <label>MM/YY</label>
                      <p><input type="text" placeholder="" /></p>
                  </div> 
                  <div className='cvv'>
                      <label>CVV</label>
                      <p><input type="text" placeholder="" /></p>
                  </div> 
                  <div className="boton2">
                    <a href="/gracias">
                        <div className="finalizar-compra">
                        <b>FINALIZAR COMPRA</b>
                        </div></a>
                  </div>
            </div>
          </div>
          <Footer  />
        </>
    )
}

export default Pagos;
