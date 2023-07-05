import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { vehicles } from "../../services/product";

const Products = ({ sucursal }) => {
    const navigate = useNavigate();
    const [products_, setProducts] = React.useState([]);
    const [subsidiary, setSubsidiary] = React.useState(sucursal);
    const [isLoad, setLoad] = React.useState(false);
    const [isNoFound, setNoFound] = React.useState(false);

    const getVehicles = async () => {
        try {
            setLoad(false);
            setNoFound(false);
            const vehicleList = await vehicles({ sucursal: subsidiary });
            console.log(vehicleList);
            //maximo 20 productos

            if (vehicleList.data.length > 20) {
                setProducts(vehicleList.slice(0, 20));
                setLoad(true);
            } else {
                if (vehicleList.data.length !== 0) {
                    setProducts(vehicleList.data);
                    setLoad(true);
                } else {
                    console.log("no hay productos");
                    setNoFound(true);
                    setLoad(false);
                }
            }
        } catch (error) {
            throw new Error(error);
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
        };
        navigate("/view-product", { state: { data_product: edad_ } });
    };

    React.useEffect(() => {
        setSubsidiary(sucursal);
    }, [sucursal]);

    React.useEffect(() => {
        getVehicles();
    }, [subsidiary]); // Update getVehicles when subsidiary changes

    return (
        <>
            {isLoad ? (
                <div className="_container_root_products">
                    {products_?.map((item, index) => (
                        <div product-key={item.id} key={index} className="_container_products_view">
                            <div className="_container_secundary_product">
                                <div className="_container-img">
                                    <img src="/assets/pvehicles_img/pvehicle3.svg" alt="img" />
                                </div>

                                <div className="_container-info">
                                    <h1>{item?.nombre}</h1>
                                    <div className="_description">
                                        <p>{item?.descripcion}</p>
                                    </div>
                                    <div className="_actions">
                                        <a
                                            onClick={() => {
                                                handleViewDetails(item , '/assets/pvehicles_img/pvehicle3.svg');
                                            }}
                                        >
                                            DETALLES
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="_loader_data">
                    {isNoFound ? (
                        <h2> No Se Encontraron productos En la sucursal </h2>
                    ) : (
                        <h1>Cargando</h1>
                    )}
                </div>
            )}
        </>
    );
};

export default Products;
