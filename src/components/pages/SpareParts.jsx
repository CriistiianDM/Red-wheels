//import libraries
import React, { Component } from "react";
import Header from '../header/Header';
import Navbar from '../menu/Navbar';
import Footer from '../footer/footer';
import FilterSpareParts from '../utils/FilterSpareParts';

const SpareParts = () => {

     return (
        <>
          <Header />
          <Navbar />
          <FilterSpareParts />
          <Footer  />
        </>
     )

}


export default SpareParts;