import React from "react";

const MOTOS = [
    {
        id: 4,
        name: "VESPA ELETTRICA L3",
        price: 6790,
        description: "La  Vespa Elettrica L3 del mítico grupo Piaggio es una opción ideal para moverse por la ciudad con el estilazo de una mítica de diseño italiano",
        img: "/assets/pvehicles_img/VESPA.svg"
    },
    {
        id: 5,
        name: "SILENCE PLUS 01",
        price: 6250,
        description: "La factoría española lanza ahora la Plus 01 con un mayor rendimiento y autonomía de 133 kilómetros. Su aceptación tiene mucho que ver con el cómodo sistema de batería extraíble",
        img: "/assets/pvehicles_img/SILENCE.svg"
    },
    {
        id: 6,
        name: "OX MOTORCYCLES PATAGONIA",
        price: 6900,
        description: "La marca española OX Motorcycles, tras el gran éxito que supuso su modelo One con su autonomía de 100 kilómetros a velocidades de hasta 110km/h, lanza la espectacular Patagonia, un modelo con más potencia, tracción y un diseño tan robusto como compacto",
        img: "/assets/pvehicles_img/MOTOR.svg"
    }
]


const Motos = () => {
    const [ products_, setProducts ] = React.useState(MOTOS);

    const addProducts = () => {
    
         setProducts([
            ...products_,
            {
                id: 6,
                name: "FIAT 500 “Edición 1957”",
                price: 100,
                description: "holi", 
                img: "/assets/product_img/producto2.svg"
            }
        ])
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
                                        <a>DETALLES</a>
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

export default Motos;