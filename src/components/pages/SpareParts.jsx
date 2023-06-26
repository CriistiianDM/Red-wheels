//import libraries
import React from "react";
import Header from "../header/Header";
import Navbar from "../menu/Navbar";
import Footer from "../footer/footer";
import FilterSpareParts from "../utils/FilterSpareParts";
import CardSpareParts from "../utils/CardSpareParts";

const SpareParts = () => {
    const [data_select, setDataSelect] = React.useState([]);
    const [target, setTarget] = React.useState("/diagnostico-carros");

    return (
        <>
            <Header />
            <Navbar />
            <FilterSpareParts target={target} setTarget={setTarget} setDataSelect={setDataSelect} />
            <CardSpareParts target={target} data_respuestos={data_select} />
            <Footer />
        </>
    );
};

export default SpareParts;
