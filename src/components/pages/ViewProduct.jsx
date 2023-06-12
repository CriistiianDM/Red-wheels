//import librearies
import React from 'react';
import Header from '../header/Header';
import DestailsPrimary from '../viewproduct/DestailsPrimary';
import Characteristics from '../viewproduct/Characteristics';
import Personalization from '../viewproduct/Personalization';
import Hr from '../viewproduct/Hr';
import {  
    useLocation,
    useNavigate
} from 'react-router-dom';

//RUTE IMG
const IMAGES = ([
    {
        img_: '/assets/carrusel_img/view_product/1.svg',
        alt_: '1_',
        haveLabel_: true,
    },
    {
        img_: '/assets/carrusel_img/view_product/2.svg',
        alt_: '2_',
        haveLabel_: false,
    },
    {
        img_: '/assets/carrusel_img/view_product/3.svg',
        alt_: '3_',
        haveLabel_: false,
    }
]);



/**
 * 
 * @returns 
*/
const ViewProduct = () => {

    //logica para sacar la info de la ruta anterior
    const location = useLocation();
    const data_product_selected = location.state?.data_product;

    const na = useNavigate();

    //matar la pagina si no hay data_product_selected
    React.useEffect(() => {
        if (!data_product_selected) {
          na('/');
        }
    }, [data_product_selected, na]);


    console.log(data_product_selected);
    const [ data_product, setDataProduct ] = React.useState({});
    const [ ___image , set___image ] = React.useState([{ img_: data_product_selected?.img || '' }]);



    console.log(data_product_selected , 'data_all');

    React.useEffect(() => {
       setDataProduct(data_product_selected);
       let image__ = [...___image , ...IMAGES];
       //quitar los img_ que sean ''
       image__ = image__.filter((item) => item.img_ !== '');
       set___image(image__);
       setDataProduct(data_product_selected);

       //colocar el scroll en 0
       window.scrollTo(0, 0);
    }, [])

    React.useEffect(() => {
        console.log(data_product , '_-___-_-_');
    }, [data_product])

    return (
        <>
          <Header />
          <nav className="_container_product_view">
            <DestailsPrimary data_product={data_product} data_img={___image} />
            <Hr name_product="CARACTERISTICAS" />
            <Characteristics 
                data_product_selected={data_product.characteristics} 
            />
            <Hr name_product="COLOR" />
            <Personalization 
                 data_color_ext={data_product?.data_color_ext}
                 data_color_int={data_product?.data_color_ext}
            />
          </nav>
        </>
    )

}

export default ViewProduct;