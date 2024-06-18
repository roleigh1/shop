import React, { useState } from "react";
import { useCart } from "../CartContext";
import "bootstrap/dist/css/bootstrap.css";

import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRipple,
} from "mdb-react-ui-kit";
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
    <MDBContainer fluid className="my-5 text-center">
      <MDBRow
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <MDBCol
          md="12"
          lg="7"
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <MDBCard
            className="card"
            style={{
              height: "23rem",
              minWidth: "10rem",
              border: highlight ? "2px solid #00FF00" : "none",
              borderRadius: "10px",
            }}
          >
            <MDBRipple rippleColor="light" rippleTag="div" className="w-40">
              <MDBCardImage
                src={product.image}
                fluid
                className="w-100 "
                style={{
                  height: "6.5rem",
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
              />
              <a href="#!">
                <div className="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </div>
              </a>
            </MDBRipple>
            <MDBCardBody style={{ height: "300px", overflow: "hidden" }}>
              <a href="#!" className="text-reset">
                <h5 className="card-title mb-2">{product.name}</h5>
              </a>
              <a href="#!" className="text-reset">
                <p style={{ position: "relative", bottom: "4px" }}>
                  {product.type}
                </p>
              </a>
              <h6
                className="mb-3"
                style={{ position: "relative", bottom: "1rem" }}
              >
                €{product.price}/kg
              </h6>

              <div style={{ display: "flex", flexDirection: "column" }}>
                <span
                  className="Sum "
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
                  style={{
                    width: "2.8rem",
                    textAlign: "center",
                    position: "relative",
                    display: "block",
                    margin: "0 auto",
                    top: "4px",
                  }}
                  type="number"
                />
              </div>

              <Button
                onClick={handleAddToCart}
                style={{ marginTop: "1rem" }}
                startDecorator={highlight ? null : <Add />}
              >
                {highlight ? "Added!" : "Add to cart"}
              </Button>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

PItem.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
