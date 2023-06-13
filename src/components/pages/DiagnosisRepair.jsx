//import librearies
import React from 'react';
import Header from '../header/Header';
import Navbar from '../menu/Navbar';
import Footer from '../footer/footer';
import NavHerranimientas from '../utils/NavHerranimientas';
import CardViewVh from '../utils/CardViewVh';

const UTILS = [
    {
        img: '/assets/herramientas/1.svg',
        title: 'DIAGNOSTICO'
    },
    {
        img: '/assets/herramientas/2.svg',
        title: 'MOTOR'
    },
    {
        img: '/assets/herramientas/3.svg',
        title: 'LIQUIDOS'
    },
    {
        img: '/assets/herramientas/4.svg',
        title: 'LLANTAS'
    },
    {
        img: '/assets/herramientas/5.svg',
        title: 'TRANSMISION'
    },
    {
        img: '/assets/herramientas/6.svg',
        title: 'BATERIAS'
    }
]


const DiagnosisRepair = () => {

    return (
        <>
          <Header />
          <Navbar />
          <NavHerranimientas data_={UTILS} />
          <CardViewVh data_vehicles={UTILS}  />
          <Footer  />
        </>
    )

}

export default DiagnosisRepair;