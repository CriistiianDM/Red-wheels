import React from "react";
import { specificVehicle } from "../../services/product";
import { useNavigate } from "react-router-dom";

const PVehicles = () => {
    const [products_, setProducts] = React.useState([]);
    const [isLoad , setLoad ] = React.useState(false)
    const [isNoFound , setNoFound ] = React.useState(false)
    const navigate = useNavigate();

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

    const handleViewDetails = (data_product, img) => {
        console.log(data_product , 'data_product');
        const edad_ = {
            id: data_product.id,
            img: img,
            name_product: data_product.nombre,
            price: data_product.precio,
            characteristics: [
                data_product.descripcion,
            ],
            data_color_ext: [
                '#FFFFFF',
                '#454343',
                '#242BC2',
            ],
            data_color_int: [
                '#FFFFFF',
                '#454343',
                '#242BC2',
            ],
            range: Math.floor(Math.random() * (200 - 19 + 1)) + 19,
            top_speed: Math.floor(Math.random() * (400 - 19 + 1)) + 19,
            acceleration: Math.floor(Math.random() * (80 - 19 + 1)) + 19
        };
        navigate("/view-product", { state: { data_product: edad_ } });
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
                                <div className="_description">
                                <p>{item?.descripcion}</p>
                                </div>
                                <div onClick={ () => { handleViewDetails(item, '/assets/pvehicles_img/pvehicle1.svg')}} className="_actions">
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
