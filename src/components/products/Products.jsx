import React , { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { vehicles } from "../../services/product";
import UserContext from "../../context/user/UserContext";


const Products = ({
    sucursal
}) => {
    const navigate = useNavigate();
    const [products_, setProducts] = React.useState([]);
    const [subsidiary, setSubsidiary] = React.useState(sucursal);
    const [isLoad , setLoad ] = React.useState(false)
    const { sucursalId } = useContext(UserContext);

    const getVehicles = async () => {
        try {
            setLoad(false)
            const vehicleList = await vehicles({ sucursal: subsidiary });

            //maximo 20 productos
            if (vehicleList.data.length > 20) {
                setProducts(vehicleList.slice(0, 20));
            } else {
                setProducts(vehicleList.data);
            }
            setLoad(true)
        } catch (error) {
            throw new Error(error);
        }
    };

    const handleViewDetails = (data_product) => {
        navigate("/view-product", { state: { data_product } });
    };

    React.useEffect(() => {
        getVehicles();
       setSubsidiary(sucursal)
    }, [sucursal]);

 
    return (
        <>
            {
            isLoad?
            <div className="_container_root_products">
                {products_?.map((item, index) => (
                    <div product-key={item.id} key={index} className="_container_products_view">
                        <div className="_container_secundary_product">
                            <div className="_container-img">
                                <img src="/assets/pvehicles_img/pvehicle3.svg" alt="img" />
                            </div>

                            <div className="_container-info">
                                <h1>{item?.nombre}</h1>
                                {/* <div className="_description"> */}
                                <p>{item?.descripcion}</p>
                                {/* </div> */}
                                <div className="_actions">
                                    <a
                                        onClick={() => {
                                            handleViewDetails(item);
                                        }}
                                    >
                                        DETALLES
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div> :
            <div className="_loader_data">
                <h1>Cargando</h1>
            </div>
            }
        </>
    );
};

export default Products;
