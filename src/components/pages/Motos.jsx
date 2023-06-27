//import Libs
import React from "react";
import Header from "../header/Header";
import Footer from "../footer/footer";
import Motos from "../motos/Motos";
import Navbar from "../menu/Navbar";

export default function Home() {
    return (
        <>
            <Header />
            <Navbar />
            <Motos />
            <Footer />
        </>
    );
}
