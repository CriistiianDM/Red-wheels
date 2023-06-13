//import libraries
import React from "react";
import Header from '../header/Header';
import Navbar from '../menu/Navbar';
import Footer from '../footer/footer';
import FilterSpareParts from '../utils/FilterSpareParts';
import CardSpareParts from '../utils/CardSpareParts';

const SpareParts = () => {

    const [ data_select, setDataSelect ] = React.useState([]);

     return (
        <>
          <Header />
          <Navbar />
          <FilterSpareParts setDataSelect={setDataSelect} />
          <CardSpareParts data_respuestos={data_select} />
          <Footer  />
        </>
     )

}


export default SpareParts;