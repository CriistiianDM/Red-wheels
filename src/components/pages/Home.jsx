//import Libs
import React, { useEffect } from "react";
import Header from "../header/Header";
import Carrusel from "../carrusel/Carrusel";
import Footer from "../footer/footer";
import Products from "../products/Products";
import Navbar from "../menu/Navbar";
import UserContext from "../../context/user/UserContext";
// const product = {
//    price: 100,
// }
// product.filter((item) => item.price > 100)

//prueba
export default function Home() {
    const { userEmail } = React.useContext(UserContext);
    const  [sucursal , setSucursal ] = React.useState(0)

    React.useEffect(() => {
        console.log(userEmail);
    }, [userEmail]);

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
