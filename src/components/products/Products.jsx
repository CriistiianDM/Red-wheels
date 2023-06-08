import React from "react";
import { useNavigate } from 'react-router-dom';

const PRODUCTS = [
    {
        id: 1,
        name: "FIAT 500 “Edición 1957”",
        price: 100,
        description: "Está equipado con el premiado motor Multiair® de 1.4 litros, capaz de desarrollar 101 caballos de fuerza y 98 lb-pie de torque, acoplado a una moderna transmisión automática de seis velocidades",
        img: "/public/assets/product_img/producto1.svg",
        characteristics: [
            '1 motor eléctrico (eje trasero)',
            'POTENCIA TOTAL 208 kW (283 CV)',
            'BATERÍA 60 kWh',
            'VELOCIDAD MÁXIMA 225 km/h',
            'ACELERACIÓN 6,1',
            'AUTONOMÍA (WLTP) 491 km',
            'DIMENSIONES (LARGO / ANCHO/ ALTO) 4.694 mm / 1.849 mm / 1.443 mm',
            'MALETERO TRASERO / DELANTERO 425 litros / 117 litros',
            'BATALLA 2.875 mm',
        ],
        data_color_ext: [
            '#FFFFFF',
            '#454343',
            '#242BC2',
            '#000000',
            '#FF0707',
        ],
        data_color_int: [
            '#FFFFFF',
            '#454343',
            '#242BC2',
            '#000000',
            '#FF0707',
        ],
        range: '200',
        top_speed: '400',
        acceleration: '80'
    },
    {
        id: 1,
        name: "FIAT 500 “Edición 1957”",
        price: 100,
        description: "Está equipado con el premiado motor Multiair® de 1.4 litros, capaz de desarrollar 101 caballos de fuerza y 98 lb-pie de torque, acoplado a una moderna transmisión automática de seis velocidades",
        img: "/public/assets/product_img/producto1.svg",
        characteristics: [
            '1 motor eléctrico (eje trasero)',
            'POTENCIA TOTAL 208 kW (283 CV)',
            'BATERÍA 60 kWh',
            'VELOCIDAD MÁXIMA 225 km/h',
            'ACELERACIÓN 6,1',
            'AUTONOMÍA (WLTP) 491 km',
            'DIMENSIONES (LARGO / ANCHO/ ALTO) 4.694 mm / 1.849 mm / 1.443 mm',
            'MALETERO TRASERO / DELANTERO 425 litros / 117 litros',
            'BATALLA 2.875 mm',
        ],
        data_color_ext: [
            '#FFFFFF',
            '#454343',
            '#242BC2',
            '#000000',
            '#FF0707',
        ],
        data_color_int: [
            '#FFFFFF',
            '#454343',
            '#242BC2',
            '#000000',
            '#FF0707',
        ],
        range: '220',
        top_speed: '300',
        acceleration: '80'
    },
    {
        id: 2,
        name: "FIAT 500 “Edición 1957”",
        price: 100,
        description: "Está equipado con el premiado motor Multiair® de 1.4 litros, capaz de desarrollar 101 caballos de fuerza y 98 lb-pie de torque, acoplado a una moderna transmisión automática de seis velocidades",
        img: "/public/assets/product_img/producto2.svg",
        characteristics: [
            '1 motor eléctrico (eje trasero)',
            'POTENCIA TOTAL 208 kW (283 CV)',
            'BATERÍA 60 kWh',
            'VELOCIDAD MÁXIMA 225 km/h',
            'ACELERACIÓN 6,1',
            'AUTONOMÍA (WLTP) 491 km',
            'DIMENSIONES (LARGO / ANCHO/ ALTO) 4.694 mm / 1.849 mm / 1.443 mm',
            'MALETERO TRASERO / DELANTERO 425 litros / 117 litros',
            'BATALLA 2.875 mm',
        ],
        data_color_ext: [
            '#FFFFFF',
            '#454343',
            '#242BC2',
            '#000000',
            '#FF0707',
        ],
        data_color_int: [
            '#FFFFFF',
            '#454343',
            '#242BC2',
            '#000000',
            '#FF0707',
        ],
        range: '400',
        top_speed: '500',
        acceleration: '30'
    },
    {
        id: 3,
        name: "FIAT 500 “Edición 1957”",
        price: 100,
        description: "Está equipado con el premiado motor Multiair® de 1.4 litros, capaz de desarrollar 101 caballos de fuerza y 98 lb-pie de torque, acoplado a una moderna transmisión automática de seis velocidades",
        img: "/public/assets/product_img/producto2.svg",
        characteristics: [
            '1 motor eléctrico (eje trasero)',
            'POTENCIA TOTAL 208 kW (283 CV)',
            'BATERÍA 60 kWh',
            'VELOCIDAD MÁXIMA 225 km/h',
            'ACELERACIÓN 6,1',
            'AUTONOMÍA (WLTP) 491 km',
            'DIMENSIONES (LARGO / ANCHO/ ALTO) 4.694 mm / 1.849 mm / 1.443 mm',
            'MALETERO TRASERO / DELANTERO 425 litros / 117 litros',
            'BATALLA 2.875 mm',
        ],
        data_color_ext: [
            '#FFFFFF',
            '#454343',
            '#242BC2',
            '#000000',
            '#FF0707',
        ],
        data_color_int: [
            '#FFFFFF',
            '#454343',
            '#242BC2',
            '#000000',
            '#FF0707',
        ],
        range: '200',
        top_speed: '400',
        acceleration: '80'
    },
    {
        id: 3,
        name: "FIAT 500 “Edición 1957”",
        price: 100,
        description: "Está equipado con el premiado motor Multiair® de 1.4 litros, capaz de desarrollar 101 caballos de fuerza y 98 lb-pie de torque, acoplado a una moderna transmisión automática de seis velocidades",
        img: "/public/assets/product_img/producto2.svg",
        characteristics: [
            '1 motor eléctrico (eje trasero)',
            'POTENCIA TOTAL 208 kW (283 CV)',
            'BATERÍA 60 kWh',
            'VELOCIDAD MÁXIMA 225 km/h',
            'ACELERACIÓN 6,1',
            'AUTONOMÍA (WLTP) 491 km',
            'DIMENSIONES (LARGO / ANCHO/ ALTO) 4.694 mm / 1.849 mm / 1.443 mm',
            'MALETERO TRASERO / DELANTERO 425 litros / 117 litros',
            'BATALLA 2.875 mm',
        ],
        data_color_ext: [
            '#FFFFFF',
            '#454343',
            '#242BC2',
            '#000000',
            '#FF0707',
        ],
        data_color_int: [
            '#FFFFFF',
            '#454343',
            '#242BC2',
            '#000000',
            '#FF0707',
        ],
        range: '200',
        top_speed: '400',
        acceleration: '80'
    }
]


const Products = () => {

    const navigate = useNavigate();
    const [ products_, setProducts ] = React.useState(PRODUCTS);

    const addProducts = () => {
         setProducts([
            ...products_,
            {
                id: 3,
                name: "FIAT 500 “Edición 1957”",
                price: 100,
                description: "holi", 
                img: "/public/assets/product_img/producto2.svg"
            }
        ])
    }

    const handleViewDetails = (data_product) => {
        navigate('/view-product', {  state: { data_product } });
    }

    React.useEffect(() => {
        
        //maximo 20 productos
        if(products_.length > 20){
            setProducts(products_.slice(0, 20))
        }

    }, [products_])

    return (
        <>
         <div className="_container_root_products">
            {
                
                products_.map((item , index) => (

                    <div product-key={item.id} key={index} className="_container_products_view">

                        <div  className="_container_secundary_product">

                            <div className="_container-img">
                                <img src={item.img} alt="img" />
                            </div>

                            <div className="_container-info">
                                    <h1>{item.name}</h1>
                                    {/* <div className="_description"> */}
                                        <p>{item.description}</p>
                                    {/* </div> */}
                                    <div className="_actions">
                                        <a onClick={() => { handleViewDetails({
                                            id: item.id,
                                            price: item.price,
                                            description: item.description,
                                            img: item.img,
                                            characteristics: item.characteristics,
                                            data_color_ext: item.data_color_ext,
                                            data_color_int: item.data_color_int,
                                            name_product: item.name,
                                            range: item.range,
                                            top_speed: item.top_speed,
                                            acceleration: item.acceleration

                                        }) }}>DETALLES</a>
                                    </div>
                            </div>
                            
                        </div>

                    </div>

                ))  
            }
          </div>
        </>
    )

}

export default Products;