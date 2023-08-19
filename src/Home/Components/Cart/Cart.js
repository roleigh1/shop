import React from "react";

import { useNavigate } from 'react-router-dom';
import cart from "./cart.png";
function Cart() {
 const navigate = useNavigate();

  return (
   
    <div>
        <span style={{color:'red' ,fontWeight:'bold', position:'relative',top:'-0.8rem', left:'1.5rem',zIndex:'1'}} className="countItems"></span>
        <img onClick={() => navigate('/checkout')} src={cart} className="cart-img" style={{zIndex:'0'}} alt="cart"/>
        
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