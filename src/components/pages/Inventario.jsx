import React, { useState, useContext } from "react";
import Header from "../header/Header";
import Footer from "../footer/footer";
import inventario from "/assets/icon/inventario.svg";
import "../utils/Inventario.css";
import { specificVehicle } from "../../services/product";
import { allReplacements } from "../../services/replacement";
import UserContext from "../../context/user/UserContext";
import { useNavigate } from "react-router-dom";

const Inventario = () => {
    const { auth, userRole } = useContext(UserContext);
    const [isNoFound, setIsNoFound] = useState(false);
    const navigate = useNavigate();

    const [data_, setData_] = useState({
        data_carros: [],
        data_motos: [],
        data_repuestos: [],
    });

    const handleConvertInfo = (data) => {
        return data.map((element, index) => {
            return {
                id: element.id,
                nombre: element.nombre,
                marca: element.marca ? element.marca.marca : element.vehiculo.marca.marca,
                descripcion: element.descripcion,
                cantidad: element.stock,
                precio: element.precio,
            };
        });
    };

    const handleDataInfoInventario = async () => {
        const getDataMoto = await specificVehicle({ type: 2 });
        const getDataCar = await specificVehicle({ type: 1 });
        const getDataCar1 = await allReplacements();

        const data_new_motos = handleConvertInfo(getDataMoto.data);
        const data_new_carros = handleConvertInfo(getDataCar.data);
        const data_new_repuestos = handleConvertInfo(getDataCar1.data);

        setData_({
            data_carros: data_new_carros,
            data_motos: data_new_motos,
            data_repuestos: data_new_repuestos,
        });
        setIsNoFound(true);
    };

    React.useEffect(() => {
        if (!auth) {
            //verificasion en caso que no este logeado
            navigate("/");
        } else {
            //verificasion en caso que este logeado
            if (userRole === "gerente" && auth) {
                setIsNoFound(false);

                handleDataInfoInventario();
            } else {
                navigate("/");
            }
        }
    }, []);

    return (
        <>
            {auth &&
                (isNoFound ? (
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
                                {data_.data_carros.map((row) => (
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
                                {data_.data_motos.map((row) => (
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
                                {data_.data_repuestos.map((row) => (
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
                        <Footer />
                    </div>
                ) : (
                    <div className="_loader_data">
                        {isNoFound ? <h2> No Se Encontro un inventario</h2> : <h1>Cargando</h1>}
                    </div>
                ))}
        </>
    );
};

export default Inventario;
