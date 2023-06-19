//import libraries
import React from 'react';
import Carrusel from '../carrusel/Carrusel';
import InfoProduct from './InfoProduct';

//first page
const DestailsPrimary = ({
    data_img,
    data_product
}) => {
    const [ data, setData ] = React.useState({});

    //useEffect
    React.useEffect(() => {
        setData(data_product);
        console.log(data_product, 'data_product');
    }, [data_product])

    return (
        <>
          <div className='_container_details_product'>
            <Carrusel 
                  images_={data_img}
                  class_primary_='_primary_view_product'
            />
            <InfoProduct 
                  name_product={data.name_product}
                  range={data.range}
                  top_speed={data.top_speed}
                  acceleration={data.acceleration}
            />
          </div>
        </>
    )

}

export default DestailsPrimary;