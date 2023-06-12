//import libreries
import React from 'react';
import login_img from '/assets/socialmedia_img/nologinbuy.svg';


const NoLoginProduct = () => {

    return (
       <>
         <section className="container-no-buy">
            <div>
                <img src={login_img} alt='no login'/>
                <h1> Servicio de ventas </h1>
            </div>
         </section>
       </>
    )
}


export default NoLoginProduct;