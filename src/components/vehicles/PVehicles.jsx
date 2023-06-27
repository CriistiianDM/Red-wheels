import React from "react";
import { specificVehicle } from "../../services/product";


const PVehicles = () => {
    const [products_, setProducts] = React.useState([]);
    const [isLoad , setLoad ] = React.useState(false)
    const [isNoFound , setNoFound ] = React.useState(false)

    const getCars = async () => {

        setLoad(false)

        let data = await specificVehicle({ type: 1 });

        //maximo 20 productos
        if (data.length > 20) {
            setProducts(data.data.slice(0, 20));
            setLoad(true)
        } else {

            if (data.data.length !== 0) {
             setProducts(data.data);
                setLoad(true)
            }
            else {
                setNoFound(true)
            }
        }
    };


    React.useEffect(() => {
        console.log("useEffect")
        getCars();
    }, []);

    return (
        <>
          {
            isLoad?
            <div className="_container_root_products">
                {products_?.map((item, index) => (
                    <div product-key={item.id} key={index} className="_container_products_view">
                        <div className="_container_secundary_product">
                            <div className="_container-img">
                                <img src={item.img || '/assets/pvehicles_img/pvehicle1.svg'} alt="img" />
                            </div>

                            <div className="_container-info">
                                <h1>{item?.nombre}</h1>
                                {/* <div className="_description"> */}
                                <p>{item?.description}</p>
                                {/* </div> */}
                                <div className="_actions">
                                    <a>DETALLES</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div> :
             <div className="_loader_data">
             {
                 isNoFound?
                 <h2> No Se Encontraron productos :3 </h2>
                 : <h1>Cargando</h1>
             }
         </div>
         }
        </>
    );
};

export default PVehicles;
