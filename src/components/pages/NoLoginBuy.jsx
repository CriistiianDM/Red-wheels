//import librerias
import React from 'react';
import Header from '../header/Header';
import Navbar from '../menu/Navbar';
import NoLoginProduct from '../noLoginBuy/NoLoginProduct';
import Footer from '../footer/footer';

const NoLoginBuy = () => {

    return (
        <>
          <Header />
          <Navbar />
          <NoLoginProduct />
          <Footer  />
        </>
    )
}

export default NoLoginBuy;