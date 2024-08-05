import React, { useState } from "react";
import { useCart } from "../CartContext";
import "bootstrap/dist/css/bootstrap.css";


import Button from "@mui/joy/Button";
import Add from "@mui/icons-material/Add";
import PropTypes from "prop-types";

export default function PItem({ product }) {
  const [inputValue, setInputValue] = useState("1");
  const [highlight, setHighlight] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };
  const result = Number(inputValue) * product.price;

  const { addToCart } = useCart();
  const handleAddToCart = () => {
    const cartItem = {
      name: product.name,
      price: product.price,
      quantity: Number(inputValue),
      image: product.image,
    };
    if (Number(inputValue) > 0) {
      addToCart(cartItem);
      setInputValue("");
      setHighlight(true);

      setTimeout(() => {
        setHighlight(false);
      }, 3000);
    } else {
      console.log("test");
    }
    setInputValue("1");
  };

  return (
    <div className="my-5 text-center">
    <div className="flex justify-center items-center">
      <div className="flex justify-center items-center">
        <div
          className={`card h-96 min-w-40 ${
            highlight ? "border-2 border-green-500" : ""
          } rounded-lg`}
        >
          <div className="w-full relative">
            <img
              src={product.image}
              className="w-full h-24 object-cover rounded-t-lg"
              alt={product.name}
            />
            <div className="hover-overlay absolute inset-0 bg-white opacity-0 hover:opacity-15 rounded-t-lg"></div>
          </div>
          <div className="p-4 overflow-hidden h-60">
            <div className="text-reset">
              <h5 className="card-title mb-2">{product.name}</h5>
            </div>
            <div className="text-reset">
              <p className="relative bottom-1">{product.type}</p>
            </div>
            <h6 className="mb-3 relative bottom-4">
              €{product.price}/kg
            </h6>
            <div className="flex flex-col">
              <span
                className="Sum"
                style={{
                  visibility: Number(inputValue) > 0 ? "visible" : "hidden",
                }}
              >
                {result.toFixed(2)}€
              </span>
              <input
                id="inputValue"
                onChange={handleInputChange}
                value={inputValue}
                className="w-10 text-center mx-auto relative top-1"
                type="number"
              />
            </div>
            <Button
              onClick={handleAddToCart}
              className="mt-2"
              startIcon={!highlight ? <Add /> : null}
            >
              {highlight ? "Added!" : "Add to cart"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
}

PItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};