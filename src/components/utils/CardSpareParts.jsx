//import libraries
import React from "react";
import { useNavigate } from "react-router-dom";

const CardSpareParts = ({ data_respuestos, target }) => {
    const [data, setData] = React.useState([]);
    const navigate = useNavigate();

    const handleDetails = () => {
        navigate(target);
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
              
            ],
            data_color_int: [
              
            ],
            range: '200',
            top_speed: '400',
            acceleration: '80'
        };
        navigate("/view-product", { state: { data_product: edad_ } });
    };


    //actualizar los productos
    React.useEffect(() => {
        setData(data_respuestos);
    }, [data_respuestos]);

    React.useEffect(() => {
        console.log(data);
    }, [data]);

    //renderizar los productos
    return (
        <>
            {
             data.length !== 0 ?
            <section className="_container-card-spareparts">
                {data?.map((item, index) => {
                    return (
                        <div className="_card-spareparts" key={index}>
                            <div className="_card-spareparts__img">
                                <img src={'/assets/repuestos/motos/1.svg'} alt="img" />
                            </div>
                            <span>
                                <h1>{item.nombre}</h1>
                                <p>$ {item.precio}</p>
                            </span>
                            <a onClick={ () => {handleViewDetails(item,'/assets/repuestos/motos/1.svg')}}>DETALLES</a>
                        </div>
                    );
                })}
            </section> :
             (
                <div className="_loader_data">
                        <h1>Cargando</h1>
                </div>
            )}
        </>
    );
};

export default CardSpareParts;
