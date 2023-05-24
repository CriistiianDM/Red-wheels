import React from "react";


const PRODUCTS = [
    {
        id: 1,
        name: "FIAT 500 “Edición 1957”",
        price: 100,
        description: "Está equipado con el premiado motor Multiair® de 1.4 litros, capaz de desarrollar 101 caballos de fuerza y 98 lb-pie de torque, acoplado a una moderna transmisión automática de seis velocidades",
        img: "/src/assets/product_img/producto1.svg"
    },
    {
        id: 1,
        name: "FIAT 500 “Edición 1957”",
        price: 100,
        description: "Está equipado con el premiado motor Multiair® de 1.4 litros, capaz de desarrollar 101 caballos de fuerza y 98 lb-pie de torque, acoplado a una moderna transmisión automática de seis velocidades",
        img: "/src/assets/product_img/producto1.svg"
    },
    {
        id: 2,
        name: "FIAT 500 “Edición 1957”",
        price: 100,
        description: "Está equipado con el premiado motor Multiair® de 1.4 litros, capaz de desarrollar 101 caballos de fuerza y 98 lb-pie de torque, acoplado a una moderna transmisión automática de seis velocidades",
        img: "/src/assets/product_img/producto2.svg"
    },
    {
        id: 3,
        name: "FIAT 500 “Edición 1957”",
        price: 100,
        description: "Está equipado con el premiado motor Multiair® de 1.4 litros, capaz de desarrollar 101 caballos de fuerza y 98 lb-pie de torque, acoplado a una moderna transmisión automática de seis velocidades",
        img: "/src/assets/product_img/producto2.svg"
    },
    {
        id: 3,
        name: "FIAT 500 “Edición 1957”",
        price: 100,
        description: "Está equipado con el premiado motor Multiair® de 1.4 litros, capaz de desarrollar 101 caballos de fuerza y 98 lb-pie de torque, acoplado a una moderna transmisión automática de seis velocidades",
        img: "/src/assets/product_img/producto2.svg"
    }
]

const Products = () => {

    const [ products_, setProducts ] = React.useState(PRODUCTS);

    const addProducts = () => {
         setProducts([
            ...products_,
            {
                id: 3,
                name: "FIAT 500 “Edición 1957”",
                price: 100,
                description: "holi", 
                img: "/src/assets/product_img/producto2.svg"
            }
        ])
    }

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
                                        <a>DETALLES</a>
                                    </div>
                            </div>
                            
                        </div>

                    </div>

                ))  
            }
          </div>
          <a onClick={addProducts}>
            add products
          </a>
        </>
    )

}

export default Products;