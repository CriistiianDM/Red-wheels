//import libreries
import React from 'react';
import login_img from '/assets/socialmedia_img/nologinbuy.svg';
import "./estado.css";
const NoLoginProduct = () => {
  return (
    <>
    <div>
    <img className='iconoreparacion' src="/assets/icon/reparacion.svg" alt="img" />
    <h1 className='Frase' id='tituloreparacion'>REPARACIONES</h1>
    </div>
      <section className="container-no-buy" id='paralareparacion'>
        <div className="content" id='lacaja'>
            <img className="IMG" id='imagenreparacion' src="/assets/reparacion/1.svg" alt="img" />
            <h1 className="titulo" id='tituloreparacion'>DIAGNOSTICO AUTOMOTRIZ</h1>
            <h1 className="texto_1" id='textoreparacion'>El diagnóstico automotriz en autos eléctricos es un proceso mediante el cual se realizan pruebas y análisis para identificar y solucionar problemas en los sistemas y componentes del vehículo eléctrico. </h1>     
            <h1 className="titulo" id='estadotitulo'>ESTADO:</h1>
            <label className="cuadro-en-proceso">En proceso</label>
          </div>
      </section>
      <section className="container-no-buy" id='paralareparacion'>
        <div className="content" id='lacaja'>
            <img className="IMG" id='imagenreparacion' src="/assets/reparacion/2.svg" alt="img" />
            <h1 className="titulo" id='tituloreparacion'>DIAGNOSTICO AUTOMOTRIZ</h1>
            <h1 className="texto_1" id='textoreparacion'>El diagnóstico automotriz en autos eléctricos es un proceso mediante el cual se realizan pruebas y análisis para identificar y solucionar problemas en los sistemas y componentes del vehículo eléctrico. </h1>     
            <h1 className="titulo" id='estadotitulo'>ESTADO:</h1>
            <label className="cuadro-en-proceso">En proceso</label>
          </div>
      </section>
    </>
  );
};


export default NoLoginProduct;