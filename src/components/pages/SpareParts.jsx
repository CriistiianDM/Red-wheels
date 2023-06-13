//import libraries
import React, { Component } from "react";
import Header from '../header/Header';
import Navbar from '../menu/Navbar';
import Footer from '../footer/footer';
import FilterSpareParts from '../utils/FilterSpareParts';
import CardSpareParts from '../utils/CardSpareParts';

const DATA_RESPUESTOS = [
    {
        img: '/assets/repuestos/carros/1.svg',
        title: 'Bomba de freno',
        precio: '100.000'
    },
    {
        img: '/assets/repuestos/carros/2.svg',
        title: 'Bomba de freno',
        precio: '100.000'
    },
    {
        img: '/assets/repuestos/carros/3.svg',
        title: 'Bomba de freno',
        precio: '100.000'
    },
    {
        img: '/assets/repuestos/carros/4.svg',
        title: 'Bomba de freno',
        precio: '100.000'
    },
    {
        img: '/assets/repuestos/carros/1.svg',
        title: 'Bomba de freno',
        precio: '100.000'
    },
    {
        img: '/assets/repuestos/carros/2.svg',
        title: 'Bomba de freno',
        precio: '100.000'
    }
]


const SpareParts = () => {

     return (
        <>
          <Header />
          <Navbar />
          <FilterSpareParts />
          <CardSpareParts data_respuestos={DATA_RESPUESTOS} />
          <Footer  />
        </>
     )

}


export default SpareParts;