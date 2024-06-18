import React, { useState, useEffect } from "react";
import { useCart } from "../CartContext";
import { Row, Col, Container } from "react-bootstrap";
import { MDBBtn } from "mdb-react-ui-kit";
import Decimal from "decimal.js";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import PropTypes from "prop-types";
const checkOutURL = process.env.REACT_APP_API_CREATECHECKOUT;

export default function CartTable() {
  const Message = ({ message }) => (
    <section>
      <p>{message}</p>
    </section>
  );

  const [message, setMessage] = useState("");
  const { cart, updateQuantity, removeFromCart, totalValue } = useCart();
  const [selectLocation, setSelectedLocation] = useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const successMessage =
      "Order placed! You will receive an email confirmation.";
    const canceledMessage =
      "Order canceled -- continue to shop around and checkout when you're ready.";

    const status = query.get("success")
      ? "success"
      : query.get("canceled")
      ? "canceled"
      : null;

    if (status) {
      setMessage(status === "success" ? successMessage : canceledMessage);
    }
  }, []);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleSelectChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  const handleCheckout = async () => {
    try {
      const response = await fetch(checkOutURL, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cart: cart,
          selectLocation: selectLocation,
          selectedDate: selectedDate,
        }),
      });
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  if (message) {
    return <Message message={message} />;
  }
  function isWeekend(date) {
    const day = date.getDay();
    return day !== 5 && day !== 6;
  }
  return (
    <Container>
      <Row>
        <h1 className="text-center mt-3">Your Purchase</h1>
        <table className="mt-3">
          <thead>
            <tr>
              <th>Items</th>
              <th>Name</th>
              <th style={{}}>Price</th>
              <th style={{ position: "relative", left: "1rem" }}>Qty</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, index) => (
              <tr
                key={index}
                style={{
                  borderBottom: "1px solid rgba(0, 0, 0, 0.4)",
                  verticalAlign: "middle",
                }}
              >
                <td>
                  <img
                    style={{
                      width: "4rem",
                      height: "3rem",
                      borderRadius: "5px",
                      objectFit: "cover",
                    }}
                    src={item.image}
                    alt={item.name}
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.price}€</td>
                <td
                  style={{
                    display: "flex",
                    gap: "0.3rem",
                    position: "relative",
                    top: "0.8rem",
                  }}
                >
                  <button
                    style={{
                      fontWeight: "bold",
                      height: "1.5rem",
                      width: "1rem",
                      borderRadius: "50%",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      paddingBottom: "10px",
                    }}
                    className="btn btn-danger"
                    onClick={() => updateQuantity(item.name, -1)}
                  >
                    -
                  </button>
                  {item.quantity}
                  <button
                    className="btn btn-success"
                    style={{
                      fontWeight: "bold",
                      height: "1.5rem",
                      borderRadius: "50%",
                      width: "1rem",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      paddingBottom: "10px",
                    }}
                    onClick={() => updateQuantity(item.name, 1)}
                  >
                    +
                  </button>
                </td>
                <td>
                  {new Decimal(item.price).times(item.quantity).toFixed(2)}€
                </td>
                <td>
                  <button
                    style={{
                      fontWeight: "bold",
                      height: "1.5rem",
                      borderRadius: "50%",
                      width: "1.5rem",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      paddingBottom: "9px",
                    }}
                    className="btn btn-danger"
                    onClick={() => removeFromCart(item.name)}
                  >
                    x
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <Row className="mt-5 flex-column align-items-center text-center endCont">
          <form
            onSubmit={handleCheckout}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <Col md={3} className="">
              <FormControl style={{ width: "10rem" }}>
                <InputLabel id="demo-simple-select-label">Location</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={selectLocation}
                  label="Pick a Location"
                  onChange={handleSelectChange}
                  required
                >
                  <MenuItem value={"Karmelitermarkt"}>Karmelitermarkt</MenuItem>
                  <MenuItem value={"Vorgartenmarkt"}>Vorgartenmarkt</MenuItem>
                  <MenuItem value={"Südtiroler Platz"}>
                    Südtiroler Platz
                  </MenuItem>
                </Select>
              </FormControl>
            </Col>

            <Col>
              <DatePicker
                required
                selected={selectedDate}
                onChange={handleDateChange}
                filterDate={(date) => !isWeekend(date)}
              />
            </Col>
            <Col className="">
              <MDBBtn
                color="danger"
                style={{
                  width: "7rem",
                  height: "2rem",
                  textTransform: "none",
                  paddingTop: "3px",
                  color: "white",
                  fontWeight: "bold",
                  letterSpacing: "1px",
                }}
              >
                Checkout
              </MDBBtn>
            </Col>
          </form>
          <Col sm={6} className=" ">
            <p style={{ marginTop: "0.5rem" }}>Total: {totalValue}</p>
          </Col>
        </Row>
      </Row>
    </Container>
  );
}
CartTable.propTypes = {
  message: PropTypes.string.isRequired,
};
