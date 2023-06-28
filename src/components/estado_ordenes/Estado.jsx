import React from "react";
import { Link } from 'react-router-dom';
import orden from '/assets/icon/ordenes.svg';
import carro_ejemplo from '/assets/carro_icon/carro_ejemplo.svg';
import './estado.css';

const Estado = () => {
    return (
        <div>
            <div className="container-uno">
              <div className="container-titulo-orden">
                  <img src={orden} alt="" />
                  <h4>ESTADO ORDENES</h4>
              </div>
              <div className="container-numero-orden" id="norden">
                <a>No. ordenes confirmadas: </a>
                <p>5</p>
              </div>
            </div>
            <div className="container-por-orden" id="paraestado">
              <div className="circulo"></div>
               <img   className="imagenestado" src={carro_ejemplo} alt="" />
               <div className="descripcion" id="descripcionestado">
                    <h3>TESLA MODEL 3</h3>
                    <a>Diagnostico automotriz de un tesla model 3 </a>
                    <a>49.99 €</a>
                    <a>Fecha: 23/04/2023  5:00</a>
                </div>
                <div className="botones" id="paraestado">
                <label className="vainadelestado" htmlFor="name">ESTADO: </label>
                  <Link to="/estadorden"><button className="boton-denegar" id="botonactualizarestado">ACTUALIZAR ESTADO</button></Link>
                </div>
            </div>


            <div className="container-por-orden" id="paraestado">
              <div className="circulo"></div>
               <img className="imagenestado" src={carro_ejemplo} alt="" />
               <div className="descripcion" id="descripcionestado">
                    <h3>TESLA MODEL 3</h3>
                    <a>Diagnostico automotriz de un tesla model 3 </a>
                    <a>49.99 €</a>
                    <a>Fecha: 23/04/2023  5:00</a>
                </div>
                <div className="botones" id="paraestado">
                <label className="vainadelestado" htmlFor="name">ESTADO: </label>
                  <Link to="/estadorden"><button className="boton-denegar" id="botonactualizarestado">ACTUALIZAR ESTADO</button></Link>
                </div>
            </div>

            <div className="container-por-orden" id="paraestado">
              <div className="circulo"></div>
               <img  className="imagenestado" src={carro_ejemplo} alt="" />
               <div className="descripcion" id="descripcionestado">
                    <h3>TESLA MODEL 3</h3>
                    <a>Diagnostico automotriz de un tesla model 3 </a>
                    <a>49.99 €</a>
                    <a>Fecha: 23/04/2023  5:00</a>
                </div>
                <div className="botones" id="paraestado">
                <label className="vainadelestado" htmlFor="name">ESTADO: </label>
                  <Link to="/estadorden"><button className="boton-denegar" id="botonactualizarestado">ACTUALIZAR ESTADO</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Estado;