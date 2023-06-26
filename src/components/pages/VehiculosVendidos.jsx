import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../footer/footer';
import autos from '/assets/icon/autos.svg';
import '../utils/VehiculosVendidos.css';

const VehiculosVendidos = () => {
    const data_carros = [
        { id: 10, cliente: 'Sofía', producto: 'Tesla', descripcion:'544km', cantidad:'1', total:'40.000'},
        { id: 11, cliente: 'Mario', producto: 'Kia', descripcion:'310 miles', cantidad:'1', total:'7.500'},
        { id: 12, cliente: 'Ainara', producto: 'Chevrolet', descripcion:'200HP', cantidad:'1', total:'7.500'},
    ];
    
    return (
        <div>
            <Header />
              <div className="container-titulo">
                  <img src={autos} alt="" />
                  <h3>Vehículos vendidos</h3>
              </div>
            <div className="container-subtitulo">
                <h4>Historial de Vehículos Vendidos</h4>
            </div>
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
            <Footer  />
        </div>
    )
}

export default VehiculosVendidos;