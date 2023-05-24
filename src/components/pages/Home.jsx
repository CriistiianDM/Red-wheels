//import Libs
import React from 'react';
import Header from '../header/Header';
import Carrusel from '../carrusel/Carrusel';
import Footer from '../footer/footer';
import Products from '../products/Products';


// const product = {
//    price: 100,
// }

// product.filter((item) => item.price > 100)

export default function Home() {
  return (
    <>
      <Header />
      <Carrusel />
      <Products />
      <Footer  />
    </>
  );
}