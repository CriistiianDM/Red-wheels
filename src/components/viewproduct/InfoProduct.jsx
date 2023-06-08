//import library
import React from 'react';


const InfoProduct = ({
    name_product,
    range,
    top_speed,
    acceleration
}) => {
    
    const [ data_info_product, setDataInfoProduct ] = React.useState({
        name_product: '',
        range: '',
        top_speed: '',
        acceleration: ''
    });

    //useEffect
    React.useEffect(() => {

        setDataInfoProduct({
            name_product:  name_product ? name_product : 'N/A',
            range: range ? range : 'N/A',
            top_speed: top_speed ? top_speed : 'N/A',
            acceleration: acceleration ? acceleration : 'N/A'
        });

    }, [name_product])

    React.useEffect(() => {
        console.log(    name_product,
            range,
            top_speed,
            acceleration , 'data_info_product');
    }, [data_info_product])

        
    return (
        <>
            <div className='_conatiner_info_product'>

                    <h1 className='_title_product'>{data_info_product.name_product}</h1>

                    <div className='_container_info_product__price'>

                        <div className='_item'>
                            <label>{data_info_product.range}<span>mi</span></label>
                            <span className='_span_'>Range (EPA est.)</span>
                        </div>

                        <div className='_item'>
                            <label>{data_info_product.top_speed}<span>mph</span></label>
                            <span className='_span_'>Top Speed</span>
                        </div>

                        <div className='_item'>
                            <label>{data_info_product.acceleration}<span>sec</span></label>
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