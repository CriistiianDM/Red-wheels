//import libraries
import React from "react";
import Header from "../header/Header";
import Navbar from "../menu/Navbar";
import Acciones from "../add/Acciones";
import { useParams } from "react-router-dom";

const Add = () => {
    const { product } = useParams();

    return (
        <>
            <Header />
            <Navbar />
            <Acciones title={product} />
        </>
    );
};

export default Add;
