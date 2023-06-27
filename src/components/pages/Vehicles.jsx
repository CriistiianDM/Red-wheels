//import Libs
import React from "react";
import Header from "../header/Header";
import Footer from "../footer/footer";
import PVehicles from "../vehicles/PVehicles";
import Navbar from "../menu/Navbar";

export default function Home() {
    return (
        <>
            <Header />
            <Navbar />
            <PVehicles />
            <Footer />
        </>
    );
}
