import React from "react";
import Header from '../header/Header';
import Navbar from '../menu/Navbar';
import Footer from '../footer/footer';
import carro from '/assets/carro_icon/carro.svg';
import tesla from '/assets/carro_icon/tesla.svg';
import add from '/assets/icon/add.svg';
import remove from '/assets/icon/remove.svg';
import eliminar from '/assets/icon/delete.svg';
import '../utils/ShoppingCarts.css';

const Cart = () => {
    return (
        <div>
            <Header />
            <Navbar />
            <div className="container-carrito">
                <div className="imagen">
                <p><img src={carro} alt="" /></p>
                </div>
                <div className="Titulo">
                    <h4>Carrito</h4>
                    </div>
            </div>
            <div className="container">
            <div className="container-productos">
                    <div className="product-image"><p><img src={tesla} alt="" /></p></div>
                    <div className="producto">
                    <div className="product-name">
                        <b>TESLA MODEL 3</b>
                        <div className="boton-eliminar">
                        <b><img src={eliminar} alt="" /></b>
                        </div>
                        </div>
                    <div className="product-detalles">
                        <a href="/detalles">
                        <b>Detalles del prodcuto</b>
                        </a>
                        </div>
                    <div className="product-precio"><b>40.000 €</b></div>
                    <div className="product-cantidad">
                        <b>Cantidad</b>
                        <div className="product-amount-container">
                           <a><img src={add} alt="" /></a>
                           <div className="product-amount">2</div>
                           <a><img src={remove} alt="" /></a>
                        </div>
                        </div>
                    </div>
                </div>  
            <div className="container-summary">
                <div className="Titulo2">
                     <b>Resumen</b>
                     </div>
                <div className="columnas-pago">
                <div className="pago">
                    <b>Total a pagar:</b>
                </div>
                <div className="pago">
                    <b>COP 0.00</b>
                </div>
                </div>
                <div className="boton">
                    <a href="/pago">
                        <div className="pago2">
                        <b>PAGAR</b>
                        </div></a>
                </div>
            </div>
            </div> 
            <Footer  />
        </div>
    )
}

export default Cart;