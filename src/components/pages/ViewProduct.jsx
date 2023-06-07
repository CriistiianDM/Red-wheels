//import librearies
import React from 'react';
import Header from '../header/Header';
import DestailsPrimary from '../viewproduct/DestailsPrimary';
import Characteristics from '../viewproduct/Characteristics';
import Personalization from '../viewproduct/Personalization';
import Hr from '../viewproduct/Hr';

//RUTE IMG
const IMAGES = ([
    {
        img_: '/src/assets/carrusel_img/view_product/1.svg',
        alt_: '1_',
        haveLabel_: true,
    },
    {
        img_: '/src/assets/carrusel_img/view_product/2.svg',
        alt_: '2_',
        haveLabel_: false,
    },
    {
        img_: '/src/assets/carrusel_img/view_product/3.svg',
        alt_: '3_',
        haveLabel_: false,
    }
]);


const characteristics = [
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    ''
]

/**
 * 
 * @returns 
*/
const ViewProduct = ({
    data_product_selected
}) => {
    console.log(data_product_selected);
    return (
        <>
          <Header />
          <nav className="_container_product_view">
            <DestailsPrimary data_img={IMAGES} />
            <Hr name_product="CARACTERISTICAS" />
            <Characteristics data_product_selected={characteristics} />
            <Hr name_product="COLOR" />
            <Personalization />
          </nav>
        </>
    )

}

export default ViewProduct;