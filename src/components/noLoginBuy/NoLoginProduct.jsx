//import libreries
import React from 'react';
import login_img from '/assets/socialmedia_img/nologinbuy.svg';
import "./Nologinproduct.css";

const NoLoginProduct = () => {
  return (
    <>
      <section className="container-no-buy">
        <div className="content">
            <img src={login_img} alt="no login" />
            <h1>RedWheels cuenta con un equipo de vendedores experimentados que le brindaran la mejor ascesoria para la compra de su vehiculo.</h1>
            <h1> Para acceder a este servicio, presione el botón de ingresar</h1>
        </div>
      </section>
    </>
  );
};


export default NoLoginProduct;