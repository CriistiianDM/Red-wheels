//import liraries
import React from 'react';


const Hr = ({
    name_product,
}) => {
    const name_product_ = name_product ? name_product : 'N/A';
    return (
        <>
            <div className='_container_hr'>
                <h1>{name_product_}</h1>
                <div className='border-bottom_'/>
            </div>
        </>
    )
}

export default Hr;