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

    React.useEffect(() => {
        console.log(userEmail);
    }, [userEmail]);

    return (
        <>
            <Header />
            <Navbar />
            <Carrusel />
            <Products />
            <Footer />
        </>
    );
}
