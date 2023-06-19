//import Libs
import React from "react";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Vehicles from "./components/pages/Vehicles";
import NoLoginBuy from "./components/pages/NoLoginBuy";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserState from "./context/user/UserState";
import ViewProduct from "./components/pages/ViewProduct";
import SpareParts from "./components/pages/SpareParts";

export default function RenderApp() {
    return (
        <UserState>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/vehicles" element={<Vehicles />} />
                    <Route path="/view-product" element={<ViewProduct />} />
                    <Route path="/no-login-product" element={<NoLoginBuy />} />
                    <Route path="/respuestos" element={<SpareParts />} />
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
    );
}
