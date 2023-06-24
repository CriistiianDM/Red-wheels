//import libreries
import React from 'react';
import login_img from '/assets/socialmedia_img/nologinbuy.svg';
import "./NologinRepairs.css";
import { useNavigate } from 'react-router-dom';

const NologinRepair = () => {
  const navigate =useNavigate();
  return (
    <>
      <section className="container-no-buy">
        <div className="content">
            <img className="IMG" src={login_img} alt="no login" />
            <h1 className="titulo">SERVICIO DE REPARACION</h1>
            <h1 className="texto_1">RedWheels cuenta con un equipo interdisciplinario de técnicos e ingenieros con experiencia en remanufactura, reparación, reacondicionamiento y mantenimiento de vehículos y equipo industrial.</h1>
            <h1 className="texto_2"> Para acceder a este servicio, presione el botón de ingresar</h1>
            <a onClick={() => navigate("/login")} className="buy-button">INGRESAR</a>       
          </div>
      </section>
    </>
  );
};


export default NologinRepair;