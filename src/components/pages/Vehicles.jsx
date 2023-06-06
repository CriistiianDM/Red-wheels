//import Libs
import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/footer';
import PVehicles from '../vehicles/PVehicles';

// const product = {
//    price: 100,
// }

// product.filter((item) => item.price > 100)

export default function Home() {
  return (
    <>
      <Header />
      <PVehicles />
      <Footer  />
    </>
  );
}