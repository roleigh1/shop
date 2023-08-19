import React from "react";
import { useCart } from "../../../CartContext";
import { useNavigate } from 'react-router-dom';
import imcart from './imcart.png'
function Cart() {
 const navigate = useNavigate();
 const { cart } = useCart();
  return (
   
    <div>
        <span style={{color:'red' ,fontWeight:'bold', position:'relative',top:'-0.8rem', left:'1.5rem',zIndex:'1'}} className="countItems">{cart.length}</span>
        <img onClick={() => navigate('/checkout')} src={imcart} className="cart-img" style={{zIndex:'0'}} alt="cart"/>
        
        <style jsx>{`
        .cart-img {
            width:2rem; 
            margin-right:1rem;

            

        }
        
        `}</style>
    </div>
)
}
export default Cart; 