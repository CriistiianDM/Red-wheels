import React, { useState } from "react";
import Header from '../header/Header';
import Footer from '../footer/footer';
import gestion from '/assets/icon/gestion.svg';
import '../utils/GestionUsuarios.css';
import { useNavigate } from "react-router-dom";
import { getGestionUser } from "../../services/gestionUser";

const GestionUsuarios = () => {

    const data = [
        { id: 1, nombre: 'rose', usuario: 'rossi_', email:'rose@gmail.com', rol: {nombre: 'cliente'}},
        { id: 2, nombre: 'stefhania', usuario: 'Yion_', email:'yion_@gmail.com' ,rol: {nombre: 'cliente'}},
        { id: 3, nombre: 'cristian', usuario: 'CristianK', email:'cristianK@gmail.com', rol: {nombre: 'cliente'}},
        { id: 4, nombre: 'daniel', usuario: 'Danmo', email:'danmo@gmail.com', rol: {nombre: 'cliente'}},
        { id: 5, nombre: 'brayan', usuario: 'brayan', email:'brayan@gmail.com', rol: {nombre: 'cliente'}},
    ];

    const [data_, setData_] = useState(data);
    const [isLogged, setIsLogged] = useState(false);
    const navigate = useNavigate();

    const getDataUser = async () => {

        try {
              const data = await getGestionUser();
              const data_ = data.data;
              console.log(data_);
              setData_(data_);
        }
        catch (error) {
          console.log(error , 'upps error');
        }

    }


    React.useEffect(() => {
  
      if (!window.localStorage.hasOwnProperty("logged")) {
        //verificasion en caso que no este logeado
        setIsLogged(false);
        navigate('/');
      } else {
        //verificasion en caso que este logeado
        const logged = (JSON.parse(window.localStorage.getItem("logged")))?.data;
  
        if (logged.tipoUsuario === 'gerente' && 
            logged.isAuth ) {
             setIsLogged(true);
             getDataUser();
        }
        else {
          setIsLogged(false);
          navigate('/');
        }
  
      } 
  
    }, []);

 
    return (
      <>
        {
          isLogged &&
         
          <div>
              <Header />
              <div className="container-titulo">
                  <img src={gestion} alt="" />
                  <h4>Gestion de Usuarios</h4>
              </div>
                <>
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
                  {data_?.map((row) => (
                    <tr key={row.id}>
                      <td>{row.id}</td>
                      <td>{row.nombre}</td>
                      <td>{row.nombre}</td>
                      <td>{row.email}</td>
                      <td>{((row.rol).nombre)}</td>
                    </tr>
                  ))}
                </tbody>
                  </table>
                </>
              <Footer  />
          </div>
         
        }
      </>
    )
}

export default GestionUsuarios;