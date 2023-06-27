import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/footer';
import orden from '/assets/icon/ordenes.svg';
import carro_ejemplo from '/assets/carro_icon/carro_ejemplo.svg';
import '../utils/Ordenes_trabajo.css';

const Ordenes_trabajo = () => {
    return (
        <div>
            <Header />
            <div className="container-uno">
              <div className="container-titulo-orden">
                  <img src={orden} alt="" />
                  <h4>Ordenes de Trabajo</h4>
              </div>
              <div className="container-numero-orden">
                <a>No. ordenes a confirmar: </a>
                <p>5</p>
              </div>
            </div>
            <div className="container-por-orden">
               <img src={carro_ejemplo} alt="" />
               <div className="descripcion">
                    <h3>TESLA MODEL 3</h3>
                    <a>Diagnostico automotriz de un tesla model 3 </a>
                    <a>49.99 €</a>
                    <a>Fecha: 23/04/2023  5:00</a>
                </div>
                <div className="botones">
                  <Link to="/estado-orden"><button className="boton-agregar"><a>AGREGAR</a></button></Link>
                  <Link to="/estado-orden"><button className="boton-denegar">DENEGAR</button></Link>
                </div>
            </div>
            <Footer  />
        </div>
    )
}

export default Ordenes_trabajo;