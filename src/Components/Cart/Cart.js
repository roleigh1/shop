import React from "react";
import cart from "./cart.png";
function Cart() {
return (
    
    <div>
        <img src={cart} className="cart-img" alt="cart"/>
        <style jsx>{`
        .cart-img {
            width:2.5rem;
            

        }
        
        `}</style>
    </div>
)
}
export default Cart;