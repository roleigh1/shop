import React from "react";
import { useCart } from "../../../CartContext";
import { useNavigate } from "react-router-dom";
import imcart from "./imcart.png";

function Cart() {
  const navigate = useNavigate();
  const { cart } = useCart();

  return (
    <div className="relative inline-block">
      {cart.length > 0 && (
        <span className="absolute left-4 top-[-0.6rem] z-10 font-bold text-red-500">
          {cart.length}
        </span>
      )}
       <img
        onClick={() => {
          if (cart.length > 0) {
            navigate("/cartpage");
          }
        }}
        aria-hidden="true"
        src={imcart}
        className=" z-0 mb-1 mr-4 w-8 cursor-pointer"
        alt="cart"
      />
     
    </div>
  );
}

export default Cart;
