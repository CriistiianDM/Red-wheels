import React, { useState } from "react";
import { Link } from 'react-router-dom';
import cotizaciones from '/assets/icon/cotizaciones.svg';
import './cotizaciones.css';

const cotizacion = () => {
    const data_carros = [
        { id: 10, cliente: 'Sofía', producto: 'Tesla', descripcion:'544km', cantidad:'1', total:'40.000'},
        { id: 11, cliente: 'Mario', producto: 'Kia', descripcion:'310 miles', cantidad:'1', total:'7.500'},
        { id: 12, cliente: 'Ainara', producto: 'Chevrolet', descripcion:'200HP', cantidad:'1', total:'7.500'},
    ];
    
    return (
        <div>
            <div className="container-titulo-botones">
              <Link to="/cotizaciones"><button className="boton-ingresar">Ingresar</button></Link>
              <Link to="/cotizacion-consultas"><button className="boton-consultar">Consultar</button></Link>
              <div className="container-titulo">
                  <img src={cotizaciones} alt="" />
                  <h3>Cotizaciones</h3>
              </div>
            </div>

          <section className="fondodetodo">
            <div className="container-subtitulo">
                <h4> Historial de Cotizaciones</h4>
            </div>
            <div className="_container_form_inpust__item" id="paracotizacion">
            <label className="estilotit" htmlFor="name">REMITENTE</label>
              <input className="infocotizacion"
              placeholder=""
              type="text"
              name="remitente"
              id="remitente" />

            <label className="estilotit" htmlFor="name" id="fechaemision">FECHA EMISION</label>
              <input className="infocotizacion"
              placeholder="Cristian"
              type="Date"
              name="fechaemision"
              id="fechaemision" />

            </div>

            <div className="_container_form_inpust__item" id="paracotizacion">
            <label className="estilotit"  htmlFor="name" >CLIENTE</label>
              <input className="infocotizacion" 
              placeholder=""
              type="text"
              name="cliente"
              id="cliente" /></div>


            <div className="container-subtitulo" id="productocotizar"> 
            <label className="estilotit" htmlFor="name" id="productoacotizar">PRODUCTO A COTIZAR</label>
            <Link to="/login"><button className="boton-consultar" id="botonagregar">AGREGAR</button></Link>
            </div>


          <div>
            <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Cliente</th>
              <th>Producto</th>
              <th>Descripción</th>
              <th>Cantidad</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {data_carros.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.cliente}</td>
                <td>{row.producto}</td>
                <td>{row.descripcion}</td>
                <td>{row.cantidad}</td>
                <td>{row.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>          
        <div className="container-subtitulo">
        
        <div className="container-subtitulo" id="totalcotizacion"> 
        <label className="estilotit" htmlFor="name">TOTAL</label>
              <input className="infocotizacion"
              placeholder=""
              type="text"
              name="total"
              id="total"/>
              </div>
              <Link to="/cotizacion-consultas"><button className="boton-consultar" id="cotiz">REALIZAR COTIZACION</button></Link>
        </div>
        </section>
        </div>
    )
}

export default cotizacion;