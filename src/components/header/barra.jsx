import React from "react";
import "./barra.css";
import busqueda from '/assets/icon/barrita.svg';
import { Link } from 'react-router-dom';

function barra() {
  return (
    <section className="barradebusqueda">
        <Link to="/vehicles"><img src={busqueda} alt=""  className="imagenbusqueda"/></Link>
        <input className="busqueda"
            placeholder=""
            type="text"
            name="Busqueda"
            id="Busqueda" />
    </section>
  );
}

export default barra;