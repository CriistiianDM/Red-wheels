import React, { useState } from "react";
import Header from '../header/Header';
import Footer from '../footer/footer';
import gestion from '/assets/icon/gestion.svg';
import '../utils/GestionUsuarios.css';

const GestionUsuarios = () => {
    const data = [
        { id: 1, nombre: 'rose', usuario: 'rossi_', email:'rose@gmail.com', tipo_usuario:'cliente'},
        { id: 2, nombre: 'stefhania', usuario: 'Yion_', email:'yion_@gmail.com', tipo_usuario:'jefe'},
        { id: 3, nombre: 'cristian', usuario: 'CristianK', email:'cristianK@gmail.com', tipo_usuario:'gerente'},
        { id: 4, nombre: 'daniel', usuario: 'Danmo', email:'danmo@gmail.com', tipo_usuario:'vendedor'},
        { id: 5, nombre: 'brayan', usuario: 'brayan', email:'brayan@gmail.com', tipo_usuario:'vendedor'},
    ];
 
    return (
        <div>
            <Header />
            <div className="container-titulo">
                <img src={gestion} alt="" />
                <h4>Gestion de Usuarios</h4>
            </div>
            <div className="container-usuario">
                <h2>Usuarios</h2>
            </div>
            <div className="boton-agregar">
                <a href="/register">Agregar</a>
            </div>
            <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Usuario</th>
              <th>Correo</th>
              <th>Tipo de Usuario</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row) => (
              <tr key={row.id}>
                <td>{row.id}</td>
                <td>{row.nombre}</td>
                <td>{row.usuario}</td>
                <td>{row.email}</td>
                <td>{row.tipo_usuario}</td>
              </tr>
            ))}
          </tbody>
        </table>
            <Footer  />
        </div>
    )
}

export default GestionUsuarios;