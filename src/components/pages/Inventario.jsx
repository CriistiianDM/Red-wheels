import React, { useState } from "react";
import Header from '../header/Header';
import Footer from '../footer/footer';
import inventario from '/assets/icon/inventario.svg';
import '../utils/Inventario.css';
import { specificVehicle } from "../../services/product";
import { allReplacements } from "../../services/replacement";


const Inventario = () => {

    const [isLogged, setIsLogged] = useState(false);

    const data_carros = [
        { id: 1542, nombre: 'Tesla Model 3', marca: 'Tesla', descripcion:'544km', cantidad:'5', precio:'40.000'},
        { id: 1543, nombre: 'Kia EV6', marca: 'Kia', descripcion:'498km', cantidad:'8', precio:'7.500'},
        { id: 1544, nombre: 'BOLT EV', marca: 'Chevrolet', descripcion:'200HP', cantidad:'7', precio:'7.500'},
    ];
    
    const data_motos = [
        { id: 1542, nombre: 'SUPER SOCO - TC MAX', marca: 'SUPER SOCO', descripcion:'100km', cantidad:'10', precio:'4.000'},
        { id: 1542, nombre: 'SEGWAY X160', marca: 'SEGWAY', descripcion:'35km', cantidad:'8', precio:'3.586'},
    ];

    const data_repuestos = [
        { id: 1542, nombre: 'Hart Brakes', marca: 'Hart Brakes', descripcion:'frenos', cantidad:'10', precio:'144'},
        { id: 1542, nombre: 'Kia Soul Goodyear', marca: 'Kia Soul Goodyear', descripcion:'frenos', cantidad:'20', precio:'140'},
        { id: 1542, nombre: 'MRELC', marca: 'MRELC', descripcion:'frenos', cantidad:'14', precio:'35,99'},
    ];

    React.useEffect(async () => {

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
              
                const getDataMoto = await specificVehicle({ type: 2 });
                const getDataCar  = await specificVehicle({ type: 1 });
                const getDataCar1 = await allReplacements();
                console.log(getDataMoto, getDataCar, getDataCar1 , 'data');
                
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
                  <img src={inventario} alt="" />
                  <h4>Inventario</h4>
              </div>
              <div className="container-vehiculo">
                  <h2>Vehículos</h2>
              </div>
              <div className="carros">
                <div className="sub-titulo">
                    <a>Carros</a>
                </div>
                <div className="boton-agregar">
                  <a href="/Add">Agregar</a>
                </div>
              </div>
              <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Marca</th>
                <th>Descripción</th>
                <th>Cantidad</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              {data_carros.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.nombre}</td>
                  <td>{row.marca}</td>
                  <td>{row.descripcion}</td>
                  <td>{row.cantidad}</td>
                  <td>{row.precio}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="motos">
                <div className="sub-titulo">
                    <a>Motos</a>
                </div>
                <div className="boton-agregar">
                    <a href="/Add">Agregar</a>
                </div>
              </div>   
              <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Marca</th>
                <th>Descripción</th>
                <th>Cantidad</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              {data_motos.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.nombre}</td>
                  <td>{row.marca}</td>
                  <td>{row.descripcion}</td>
                  <td>{row.cantidad}</td>
                  <td>{row.precio}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="repuestos">
                <div className="container-repuestos">
                    <h2>Repuestos</h2>
                </div>
                <div className="boton-agregar">
                    <a href="/Add">Agregar</a>
                </div>
              </div>   
              <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Marca</th>
                <th>Descripción</th>
                <th>Cantidad</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              {data_repuestos.map((row) => (
                <tr key={row.id}>
                  <td>{row.id}</td>
                  <td>{row.nombre}</td>
                  <td>{row.marca}</td>
                  <td>{row.descripcion}</td>
                  <td>{row.cantidad}</td>
                  <td>{row.precio}</td>
                </tr>
              ))}
            </tbody>
          </table>
              <Footer  />
          </div>
        }
      </>
    )
}

export default Inventario;