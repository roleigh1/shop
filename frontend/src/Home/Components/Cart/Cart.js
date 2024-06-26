import React from "react";
import { useCart } from "../../../CartContext";
import { useNavigate } from "react-router-dom";
import imcart from "./imcart.png";
function Cart() {
  const navigate = useNavigate();
  const { cart } = useCart();
  return (
    <div>
      {cart.length > 0 && (
        <span
          style={{
            color: "red",
            fontWeight: "bold",
            position: "relative",
            top: "-0.8rem",
            left: "1.5rem",
            zIndex: "1",
          }}
          className="countItems"
        >
          {cart.length}
        </span>
      )}
      <img
        onClick={() => {
          if (cart.length > 0) {
            navigate("/cartpage");
          }
        }}
        src={imcart}
        className="cart-img"
        style={{ zIndex: "0" }}
        alt="cart"
      />

      <style>{`
            .cart-img {
            width:2rem; 
            margin-right:1rem;

            

        }
        
        `}</style>
    </div>
  );
}
export default Cart;
