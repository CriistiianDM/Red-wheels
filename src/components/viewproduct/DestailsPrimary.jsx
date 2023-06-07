//import libraries
import React from 'react';
import Carrusel from '../carrusel/Carrusel';
import InfoProduct from './InfoProduct';

//first page
const DestailsPrimary = ({
    data_img
}) => {

    return (
        <>
          <div className='_container_details_product'>
            <Carrusel 
                  images_={data_img}
                  class_primary_='_primary_view_product'
            />
            <InfoProduct />
          </div>
        </>
    )

}

export default DestailsPrimary;