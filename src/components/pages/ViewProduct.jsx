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
    '1 motor eléctrico (eje trasero)',
    'POTENCIA TOTAL 208 kW (283 CV)',
    'BATERÍA 60 kWh',
    'VELOCIDAD MÁXIMA 225 km/h',
    'ACELERACIÓN 6,1',
    'AUTONOMÍA (WLTP) 491 km',
    'DIMENSIONES (LARGO / ANCHO/ ALTO) 4.694 mm / 1.849 mm / 1.443 mm',
    'MALETERO TRASERO / DELANTERO 425 litros / 117 litros',
    'BATALLA 2.875 mm',
]

const data_color_ext = [
    '#FFFFFF',
    '#454343',
    '#242BC2',
    '#000000',
    '#FF0707',
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
            <Characteristics 
                data_product_selected={characteristics} 
            />
            <Hr name_product="COLOR" />
            <Personalization 
                 data_color_ext={data_color_ext}
                 data_color_int={data_color_ext}
            />
          </nav>
        </>
    )

}

export default ViewProduct;