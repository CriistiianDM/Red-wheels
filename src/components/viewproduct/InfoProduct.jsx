//import library
import React from 'react';
import { useNavigate } from 'react-router-dom';


const InfoProduct = ({
    name_product,
    range,
    top_speed,
    acceleration,
    allData
}) => {
    
    const [ data_info_product, setDataInfoProduct ] = React.useState({
        name_product: '',
        range: '',
        top_speed: '',
        acceleration: ''
    });

    const [ sendData , setSendData ] = React.useState({});

    const navigate =useNavigate();

    const handleViewDetails = (data_product) => {

        if (!window.localStorage.hasOwnProperty("logged")) {
            navigate("/no-login-product");
        } else {

            const logged = (JSON.parse(window.localStorage.getItem("logged"))).data;

            if (logged.isAuth) {

                const data_mini_cart = [];

                if (!sessionStorage.hasOwnProperty("mini-cart")) {
                    data_mini_cart.push(sendData);
                    sessionStorage.setItem("mini-cart", JSON.stringify(data_mini_cart));
                }
                else {
                    const array_ = JSON.parse(sessionStorage.getItem("mini-cart"))
                    data_mini_cart.push(sendData);
                    const arregloCombinado = data_mini_cart.concat(array_);
                    sessionStorage.setItem("mini-cart", JSON.stringify(arregloCombinado));
                }
                         
                navigate("/carrito");
            }
            
        } 

    }

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

    React.useEffect(() => {
        
        if (sendData !== {}) {
            setSendData(allData);
        }

    }, [allData])

        
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
                        <a onClick={handleViewDetails}>COMPRAR</a>
                    </div>
            </div>
        </>
     )
        
}


export default InfoProduct;