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
        <span className="absolute text-red-500 font-bold top-[-0.6rem] left-[1rem] z-10">
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
        className=" mr-4 w-8 mb-1 z-0 cursor-pointer"
        alt="cart"
      />
    </div>
  );
}

export default Cart;
