//import libraries
import React from "react";
import { useNavigate } from "react-router-dom";

const CardSpareParts = ({ data_respuestos, target }) => {
    const [data, setData] = React.useState([]);
    const navigate = useNavigate();

    const handleDetails = () => {
        navigate(target);
    };

    //actualizar los productos
    React.useEffect(() => {
        setData(data_respuestos);
    }, [data_respuestos]);

    //renderizar los productos
    return (
        <>
            <section className="_container-card-spareparts">
                {data?.map((item, index) => {
                    return (
                        <div className="_card-spareparts" key={index}>
                            <div className="_card-spareparts__img">
                                <img src={item.img} alt="img" />
                            </div>
                            <span>
                                <h1>{item.title}</h1>
                                <p>$ {item.precio}</p>
                            </span>
                            <a onClick={handleDetails}>DETALLES</a>
                        </div>
                    );
                })}
            </section>
        </>
    );
};

export default CardSpareParts;
