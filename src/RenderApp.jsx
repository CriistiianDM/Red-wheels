//import Libs
import React from "react";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Vehicles from "./components/pages/Vehicles";
import NoLoginBuy from "./components/pages/NoLoginBuy";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserState from "./context/user/UserState";
import ViewProduct from "./components/pages/ViewProduct";
import SpareParts from "./components/pages/SpareParts";
import NoLoginRepar from "./components/pages/NoLoginRepar";
import DiagnosisRepairCar from "./components/pages/DiagnosisRepairCar";
import DiagnosisRepairMoto from "./components/pages/DiagnosisRepairMoto";
import Profile from "./components/pages/Profile";
import ShoppingCart from './components/pages/ShoppingCart';
import Pago from './components/pages/Pago';
import Agradecimiento from './components/pages/Agradecimiento';
import Moto from './components/pages/Motos';
import GestionUsuarios from "./components/pages/GestionUsuarios";
import Add from "./components/pages/Add";
import Inventario from "./components/pages/Inventario";
import Cotizaciones_consultas from "./components/pages/Cotiazaciones_consultas";
import VehiculosVendidos from "./components/pages/VehiculosVendidos";
import Editar from "./components/pages/Editar";
import Reparacion from "./components/pages/Reparacion";
import Ordenes_trabajo from "./components/pages/Ordenes_trabajo";
import Cotizaciones from "./components/pages/Cotizaciones";
export default function RenderApp() {
  return (
    <>
      <UserState>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/view-product" element={<ViewProduct />} />
            <Route path="/no-login-product" element={<NoLoginBuy />} />
            <Route path="/no-login-repair" element={<NoLoginRepar />} />
            <Route path="/respuestos" element={<SpareParts />} />
            <Route path="/diagnostico-carros" element={<DiagnosisRepairCar />} />
            <Route path="/diagnostico-motos" element={<DiagnosisRepairMoto />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/carrito" element={<ShoppingCart/>} /> 
            <Route path="/pago" element={<Pago/>} /> 
            <Route path="/gracias" element={<Agradecimiento/>} />
            <Route path="/Motos" element={<Moto/>} />
            <Route path="/inventario" element={<Inventario/>} />
            <Route path="/gestionUsuarios" element={<GestionUsuarios/>} />
            <Route path="/cotizacion-consultas" element={<Cotizaciones_consultas/>} />
            <Route path="/vehiculos-vendidos" element={<VehiculosVendidos/>} />
            <Route path="/Add" element={<Add/>} />
            <Route path="/EstadoReparacion" element={<Reparacion/>} />
            <Route path="/Editar" element={<Editar/>} />
            <Route path="/ordenes-trabajo" element={<Ordenes_trabajo/>} />
            <Route path="/Cotizaciones" element={<Cotizaciones/>} />
            <Route
              path="*"
              element={
                <>
                  <h1>No Found Route</h1>
                </>
              }
            />
          </Routes>
        </Router>
      </UserState>
    </>
  );
}
