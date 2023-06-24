//import librerias
import React from 'react';
import Header from '../header/Header';
import Navbar from '../menu/Navbar';
import NoLoginRepairs from '../noLoginRepair/NoLoginRepair';
import Footer from '../footer/footer';

const NoLoginRepar = () => {

    return (
        <>
          <Header />
          <Navbar />
          <NoLoginRepairs />
          <Footer  />
        </>
    )
}

export default NoLoginRepar;