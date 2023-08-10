import React from "react";
import { useNavigate } from 'react-router-dom';
import cart from "./cart.png";
function Cart() {
 const navigate = useNavigate();

  return (
    
    <div>
        <img onClick={() => navigate('/checkout')} src={cart} className="cart-img" alt="cart"/>
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