//import Libs
import React from 'react';
import Login from './components/pages/Login';
import Home from './components/pages/Home';
import Vehicles from './components/pages/Vehicles';
import NoLoginBuy from './components/pages/NoLoginBuy';
import {
    BrowserRouter as Router,
    Routes,
    Route
  } from 'react-router-dom';


import ViewProduct from './components/pages/ViewProduct';
import SpareParts from './components/pages/SpareParts';
import NoLoginRepar from './components/pages/NoLoginRepar';
import DiagnosisRepairCar from './components/pages/DiagnosisRepairCar';
import DiagnosisRepairMoto from './components/pages/DiagnosisRepairMoto';
import Profile from './components/pages/Profile';

export default function RenderApp() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/view-product" element={<ViewProduct />} />
          <Route path="/no-login-product" element={<NoLoginBuy />} />
          <Route path="/no-login-repair" element={<NoLoginRepar />} />
          <Route path="/respuestos" element={<SpareParts />} />
          <Route path="/diagnostico-carros" element={<DiagnosisRepairCar />} />
          <Route path="/diagnostico-motos" element={<DiagnosisRepairMoto />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<><h1>No Found Route</h1></>} />
        </Routes>
      </Router>
    </>
  );
}