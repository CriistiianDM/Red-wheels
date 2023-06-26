import React, { useState } from "react";
import Header from '../header/Header';
import Navbar from '../menu/Navbar';
import Footer from '../footer/footer';
import carro from '/assets/carro_icon/carro.svg';
import tesla from '/assets/carro_icon/tesla.svg';
import add from '/assets/icon/add.svg';
import remove from '/assets/icon/remove.svg';
import eliminar from '/assets/icon/delete.svg';
import '../utils/ShoppingCarts.css';
import { useNavigate } from "react-router-dom";


const Cart = () => {
    const eliminarProducto = () => {
        const containerProducto = document.querySelector('.container-producto');
        containerProducto.remove();
      };

    const [amount, setAmount] = useState(0);
    const [total, setTotal] = useState(0); // Precio inicial del producto
    
    const increaseAmount = () => {
        if (amount < 10) {
          setAmount(amount + 1);
          calculateTotal(amount + 1);
        }
    };
    
    const decreaseAmount = () => {
        if (amount > 0) {
          setAmount(amount - 1);
          calculateTotal(amount - 1);
        }
    };
    
    const calculateTotal = (newAmount) => {
        const price = 40000; // Precio del producto
        const newTotal = price * newAmount;
        setTotal(newTotal);
    };

    React.useEffect(() => {

        if (!window.localStorage.hasOwnProperty("logged")) {
          navigate('/login');
        } else {
          const logged = (JSON.parse(window.localStorage.getItem("logged"))).data;
    
          if (!logged.isAuth) {
            navigate('/login');
          }
    
        }

    },  []);

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
             <div className="container-producto">
                    <div className="product-image"><p><img src={tesla} alt="" /></p></div>
                    <div className="producto">
                    <div className="product-name">
                        <b>TESLA MODEL 3</b>
                        <div className="boton-eliminar">
                            <button onClick={eliminarProducto}><b><img src={eliminar} alt="" /></b></button>
                        </div>
                        </div>
                    <div className="product-detalles">
                        <a href="/detalles">
                        <b>Detalles del prodcuto</b>
                        </a>
                        </div>
                    <div className="product-precio"><b>40000 €</b></div>
                    <div className="product-cantidad">
                        <b>Cantidad</b>
                        <div className="product-amount-container">
                           <a onClick={increaseAmount}><img src={add} alt="" /></a>
                           <div className="product-amount">{amount}</div>
                           <a onClick={decreaseAmount}><img src={remove} alt="" /></a>
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
                    <b>{total.toFixed(0)} €</b>
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