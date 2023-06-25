import React from "react";
import { useNavigate } from "react-router-dom";
import { vehicles } from "../../services/product";

const PRODUCTS = [
    {
        id: 1,
        name: "FIAT 500 “Edición 1957”",
        price: 100,
        description:
            "Está equipado con el premiado motor Multiair® de 1.4 litros, capaz de desarrollar 101 caballos de fuerza y 98 lb-pie de torque, acoplado a una moderna transmisión automática de seis velocidades",
        img: "/assets/product_img/producto1.svg",
        characteristics: [
            "1 motor eléctrico (eje trasero)",
            "POTENCIA TOTAL 208 kW (283 CV)",
            "BATERÍA 60 kWh",
            "VELOCIDAD MÁXIMA 225 km/h",
            "ACELERACIÓN 6,1",
            "AUTONOMÍA (WLTP) 491 km",
            "DIMENSIONES (LARGO / ANCHO/ ALTO) 4.694 mm / 1.849 mm / 1.443 mm",
            "MALETERO TRASERO / DELANTERO 425 litros / 117 litros",
            "BATALLA 2.875 mm",
        ],
        data_color_ext: ["#FFFFFF", "#454343", "#242BC2", "#000000", "#FF0707"],
        data_color_int: ["#FFFFFF", "#454343", "#242BC2", "#000000", "#FF0707"],
        range: "200",
        top_speed: "400",
        acceleration: "80",
    },
    {
        id: 1,
        name: "FIAT 500 “Edición 1957”",
        price: 100,
        description:
            "Está equipado con el premiado motor Multiair® de 1.4 litros, capaz de desarrollar 101 caballos de fuerza y 98 lb-pie de torque, acoplado a una moderna transmisión automática de seis velocidades",
        img: "/assets/product_img/producto1.svg",
        characteristics: [
            "1 motor eléctrico (eje trasero)",
            "POTENCIA TOTAL 208 kW (283 CV)",
            "BATERÍA 60 kWh",
            "VELOCIDAD MÁXIMA 225 km/h",
            "ACELERACIÓN 6,1",
            "AUTONOMÍA (WLTP) 491 km",
            "DIMENSIONES (LARGO / ANCHO/ ALTO) 4.694 mm / 1.849 mm / 1.443 mm",
            "MALETERO TRASERO / DELANTERO 425 litros / 117 litros",
            "BATALLA 2.875 mm",
        ],
        data_color_ext: ["#FFFFFF", "#454343", "#242BC2", "#000000", "#FF0707"],
        data_color_int: ["#FFFFFF", "#454343", "#242BC2", "#000000", "#FF0707"],
        range: "220",
        top_speed: "300",
        acceleration: "80",
    },
    {
        id: 2,
        name: "FIAT 500 “Edición 1957”",
        price: 100,
        description:
            "Está equipado con el premiado motor Multiair® de 1.4 litros, capaz de desarrollar 101 caballos de fuerza y 98 lb-pie de torque, acoplado a una moderna transmisión automática de seis velocidades",
        img: "/assets/product_img/producto2.svg",
        characteristics: [
            "1 motor eléctrico (eje trasero)",
            "POTENCIA TOTAL 208 kW (283 CV)",
            "BATERÍA 60 kWh",
            "VELOCIDAD MÁXIMA 225 km/h",
            "ACELERACIÓN 6,1",
            "AUTONOMÍA (WLTP) 491 km",
            "DIMENSIONES (LARGO / ANCHO/ ALTO) 4.694 mm / 1.849 mm / 1.443 mm",
            "MALETERO TRASERO / DELANTERO 425 litros / 117 litros",
            "BATALLA 2.875 mm",
        ],
        data_color_ext: ["#FFFFFF", "#454343", "#242BC2", "#000000", "#FF0707"],
        data_color_int: ["#FFFFFF", "#454343", "#242BC2", "#000000", "#FF0707"],
        range: "400",
        top_speed: "500",
        acceleration: "30",
    },
    {
        id: 3,
        name: "FIAT 500 “Edición 1957”",
        price: 100,
        description:
            "Está equipado con el premiado motor Multiair® de 1.4 litros, capaz de desarrollar 101 caballos de fuerza y 98 lb-pie de torque, acoplado a una moderna transmisión automática de seis velocidades",
        img: "/assets/product_img/producto2.svg",
        characteristics: [
            "1 motor eléctrico (eje trasero)",
            "POTENCIA TOTAL 208 kW (283 CV)",
            "BATERÍA 60 kWh",
            "VELOCIDAD MÁXIMA 225 km/h",
            "ACELERACIÓN 6,1",
            "AUTONOMÍA (WLTP) 491 km",
            "DIMENSIONES (LARGO / ANCHO/ ALTO) 4.694 mm / 1.849 mm / 1.443 mm",
            "MALETERO TRASERO / DELANTERO 425 litros / 117 litros",
            "BATALLA 2.875 mm",
        ],
        data_color_ext: ["#FFFFFF", "#454343", "#242BC2", "#000000", "#FF0707"],
        data_color_int: ["#FFFFFF", "#454343", "#242BC2", "#000000", "#FF0707"],
        range: "200",
        top_speed: "400",
        acceleration: "80",
    },
    {
        id: 3,
        name: "FIAT 500 “Edición 1957”",
        price: 100,
        description:
            "Está equipado con el premiado motor Multiair® de 1.4 litros, capaz de desarrollar 101 caballos de fuerza y 98 lb-pie de torque, acoplado a una moderna transmisión automática de seis velocidades",
        img: "/assets/product_img/producto2.svg",
        characteristics: [
            "1 motor eléctrico (eje trasero)",
            "POTENCIA TOTAL 208 kW (283 CV)",
            "BATERÍA 60 kWh",
            "VELOCIDAD MÁXIMA 225 km/h",
            "ACELERACIÓN 6,1",
            "AUTONOMÍA (WLTP) 491 km",
            "DIMENSIONES (LARGO / ANCHO/ ALTO) 4.694 mm / 1.849 mm / 1.443 mm",
            "MALETERO TRASERO / DELANTERO 425 litros / 117 litros",
            "BATALLA 2.875 mm",
        ],
        data_color_ext: ["#FFFFFF", "#454343", "#242BC2", "#000000", "#FF0707"],
        data_color_int: ["#FFFFFF", "#454343", "#242BC2", "#000000", "#FF0707"],
        range: "200",
        top_speed: "400",
        acceleration: "80",
    },
];

const Products = () => {
    const navigate = useNavigate();
    const [products_, setProducts] = React.useState([]);
    const [subsidiary, setSubsidiary] = React.useState(0);

    const getVehicles = async () => {
        const vehicules = await vehicles({ sucursal: subsidiary });
        Array.isArray(vehicules.data) && setProducts(vehicules.data);
    };

    const addProducts = () => {
        setProducts([
            ...products_,
            {
                id: 3,
                name: "FIAT 500 “Edición 1957”",
                price: 100,
                description: "holi",
                img: "/assets/product_img/producto2.svg",
            },
        ]);
    };

    const handleChange = (e) => {
        setSubsidiary(e.target.value);
    };

    const handleViewDetails = (data_product) => {
        navigate("/view-product", { state: { data_product } });
    };

    React.useEffect(() => {
        getVehicles();

        //maximo 20 productos
        if (products_.length > 20) {
            setProducts(products_.slice(0, 20));
        }
    }, [subsidiary]);

    return (
        <>
            <h1>VEHICULOS</h1>
            <select name="sucursal" defaultValue={"0"} onChange={handleChange}>
                <option disabled value="0"></option>
                <option value="1">Gerente</option>
                <option value="2">Vendedor</option>
                <option value="3">Jefe de taller</option>
                <option value="4">Cliente</option>
            </select>

            <div className="_container_root_products">
                {products_?.map((item, index) => (
                    <div product-key={item.id} key={index} className="_container_products_view">
                        <div className="_container_secundary_product">
                            <div className="_container-img">
                                <img src="/assets/pvehicles_img/pvehicle3.svg" alt="img" />
                            </div>

                            <div className="_container-info">
                                <h1>{item.stock}</h1>
                                {/* <div className="_description"> */}
                                <p>{item.precio}</p>
                                {/* </div> */}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Products;
