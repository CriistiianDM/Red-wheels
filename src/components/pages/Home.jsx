//import Libs
import React, { useEffect } from "react";
import Header from "../header/Header";
import Carrusel from "../carrusel/Carrusel";
import Footer from "../footer/footer";
import Products from "../products/Products";
import Navbar from "../menu/Navbar";
import UserContext from "../../context/user/UserContext";

export default function Home() {
    const { userEmail } = React.useContext(UserContext);
    const [sucursal, setSucursal] = React.useState(1);

    React.useEffect(() => {
        //scroll to top
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Header />
            <Navbar setSucursal={setSucursal} />
            <Carrusel />
            <Products sucursal={sucursal} setSucursal={setSucursal} />
            <Footer />
        </>
    );
}
