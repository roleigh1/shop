import React, { useState } from "react";
import { useCart } from "../../../CartContext";
import "bootstrap/dist/css/bootstrap.css";
import PropTypes from "prop-types";
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

export default function BestSellerItem({ item }) {
  const [inputValue, setInputValue] = useState("1");
  const [highlight, setHighlight] = useState(false);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
  };
  const result = Number(inputValue) * item.price;

  const { addToCart } = useCart();
  const handleAddToCart = () => {
    const cartItem = {
      name: item.name,
      price: item.price,
      quantity: Number(inputValue),
      image: item.image,
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
      <MDBRow>
        <MDBCol md="12" lg="7" className="mb-4">
          <MDBCard
            className="card rounded "
            style={{
              height: "23rem",
              width: "10rem",
              border: highlight ? "2px solid #00FF00" : "none",
       
            }}
          >
            <MDBRipple rippleColor="light" rippleTag="div" className="w-40">
              <MDBCardImage
                src={item.image}
                fluid
                className="w-100 "
                style={{
                  height: "6.5rem",
                  borderRadius: "10px",
                  objectFit: "cover",
                }}
              />
              <a >
                <div className="mask">
                  <div className="d-flex justify-content algin-items-end h-100">
                    <h5>
                      <span className="badge bg-danger ms-2">Bestseller </span>
                    </h5>
                  </div>
                </div>
                <div className="hover-overlay">
                  <div
                    className="mask"
                    style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                  ></div>
                </div>
              </a>
            </MDBRipple>
            <MDBCardBody style={{ height: "300px", overflow: "hidden" }}>
              <a  className="text-reset">
                <h5 className="card-title mb-2">{item.name}</h5>
              </a>
              <a className="text-reset">
                <p style={{ position: "relative", bottom: "4px" }}>
                  {item.type}
                </p>
              </a>
              <h6
                className="mb-3"
                style={{ position: "relative", bottom: "1rem" }}
              >
                €{item.price}/kg
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
BestSellerItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  }).isRequired,
};