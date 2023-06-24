//import Libs
import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/footer';
import PVehicles from '../vehicles/PVehicles';
import Navbar from '../menu/Navbar';
import FilterSpareParts from '../utils/FilterSpareParts';
// const product = {
//    price: 100,
// }

// product.filter((item) => item.price > 100)

export default function Home() {
  const [ data_select, setDataSelect ] = React.useState([]);
  const [ target, setTarget ] = React.useState([]);
  return (
    <>
      <Header />
      <Navbar />
      <FilterSpareParts setTarget={setTarget} setDataSelect={setDataSelect} />
      <PVehicles />
      <Footer  />
    </>
  );
}