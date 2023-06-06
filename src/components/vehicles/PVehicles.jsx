import React from "react";


const VEHICLES = [
    {
        id: 1,
        name: "DACIA SPRIING ",
        price: 100,
        description: "Dacia Spring se distingue por su estilo SUV con motor 100% eléctrico. Fiel a los códigos de la marca Dacia, este vehículo urbano te ofrece un nuevo placer de conducción durante tus trayectos diarios.",
        img: "/src/assets/pvehicles_img/pvehicle1.svg"
    },
    {
        id: 2,
        name: "TESLA MODEL 3",
        price: 100,
        description: "se caracteriza por contar con una gran batería de iones de litio que le proporciona una autonomía entre 415 y 544 kilómetros, dependiendo de la versión",
        img: "/src/assets/pvehicles_img/pvehicle2.svg"
    },
    {
        id: 3,
        name: "Mazda MX-30",
        price: 100,
        description: "Mazda MX-30.Vive la evolución en la experiencia de conducción y disfruta de su interior diseñado con materiales amigables con el medio ambiente. Abre sus innovadoras puertas freestyle y deja que empiece una nueva historia.",
        img: "/src/assets/pvehicles_img/pvehicle3.svg"
    }
]


const PVehicles = () => {

    const [ products_, setProducts ] = React.useState(VEHICLES);

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
          <a onClick={addProducts}>
            add products
          </a>
        </>
    )

}

export default PVehicles;