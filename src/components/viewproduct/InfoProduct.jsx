//import library
import React from 'react';


const InfoProduct = ({
    name_product,
    range,
    top_speed,
    acceleration
}) => {

    const name_product_ = name_product ? name_product : 'N/A';
    const range_ = range ? range : 'N/A';
    const top_speed_ = top_speed ? top_speed : 'N/A';
    const acceleration_ = acceleration ? acceleration : 'N/A';
        
    return (
        <>
            <div className='_conatiner_info_product'>

                    <h1 className='_title_product'>{name_product_}</h1>

                    <div className='_container_info_product__price'>

                        <div className='_item'>
                            <label>{range_}<span>mi</span></label>
                            <span className='_span_'>Range (EPA est.)</span>
                        </div>

                        <div className='_item'>
                            <label>{top_speed_}<span>mph</span></label>
                            <span className='_span_'>Top Speed</span>
                        </div>

                        <div className='_item'>
                            <label>{acceleration_}<span>sec</span></label>
                            <span className='_span_'>0-60 mph</span>
                        </div>

                    </div>

                    <div className='__actions'>
                        <a>COMPRAR</a>
                    </div>
            </div>
        </>
     )
        
}


export default InfoProduct;