import React, { useState, useEffect } from "react";
import { useCart } from "../CartContext";
import { Row, Col, Container } from "react-bootstrap";
import { MDBBtn } from "mdb-react-ui-kit";
import Decimal from "decimal.js";
import axios from "axios";
import Form from 'react-bootstrap/Form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import "./styles.css"
import { response } from "express";

export default function CartTable() {


  const Message = ({ message }) => (
    <section>
      <p>{message}</p>
    </section>
  );


  const [message, setMessage] = useState("");
  const { cart, updateQuantity, removeFromCart, totalValue } = useCart();
  const [startDate, setStartDate] = useState(new Date());
  const [selectedLocation, setSelectedLocation] = useState("");
  function isWeekend(date) {
    const day = date.getDay();
    return day !== 5 && day !== 6;
  }






  useEffect(() => {
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);
  function handleDateChange(date) {
    setStartDate(date);

    axios.post("http://localhost:4242/selected-date", { date })
      .then(response => {
        console.log("Server Response:", response.data);
      })
      .catch(error => {
        console.error("Error sending date to server:", error);
      });
  };
  const sendSelectedLocation = (location) => {
    axios.post("http://localhost:4242/selected-location", { location: location })
      .then(response => {
        console.log("Server Response:", response.data);
      })
      .catch(error => {
        console.error("Error sending selected location to server:", error);
      });
  };
  const handleCheckout = async () => {
    try {
      const response = await fetch('http://localhost:4242/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ warenkorb: cart })
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

  return (
    <Container>
      <Row>
        <h1 className="text-center mt-3">Your Purchase</h1>
        <table className="mt-3">
          <thead>
            <tr>
              <th><p style={{ position: 'relative', top: '8px', left: '1rem' }}>Items</p></th>
              <th>Price</th>
              <th></th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody style={{}}>
            {cart.map((item, index) => (
              <tr key={index} style={{ verticalAlign: 'middle' }}>
                <td><h5 style={{ marginLeft: '15px' }}>{item.name}</h5></td>
                <td><p style={{ marginTop: '1rem' }}>{item.price}€</p></td>
                <td style={{ display: 'flex', gap: '0.3rem', marginTop: '1rem' }}>
                  <button style={{ fontWeight: 'bold', height: '1.5rem', width: '1rem', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '10px' }} className="btn btn-danger" onClick={() => updateQuantity(item.name, -1)}>-</button>
                  <p>{item.quantity}</p>
                  <button className='btn btn-success' style={{ fontWeight: 'bold', height: '1.5rem', borderRadius: '50%', width: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '10px' }} onClick={() => updateQuantity(item.name, 1)}>+</button>
                </td>
                <td><div>{new Decimal(item.price).times(item.quantity).toFixed(2)}€</div></td>
                <td><button style={{ fontWeight: 'bold', height: '1.5rem', borderRadius: '50%', width: '1.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '9px' }} className='btn btn-danger' onClick={() => removeFromCart(item.name)}>x</button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <Row className="mt-5 d-flex justify-content-center">
          <Col className="text-center">
            <p>Pickup date:</p>
            <DatePicker className="text-center" selected={startDate} onChange={handleDateChange} filterDate={(date) => !isWeekend(date)} />
            <p className="mt-3">Location</p>
            <Form.Select className="mt-3 text-center" aria-label="Default select example"
              value={selectedLocation}
            
            >
              <option>Karmelitiermarkt</option>
              <option value="1">Südtiroler Platz</option>
              <option value="2">Vorgartenmarkt</option>
            </Form.Select>
          </Col>


          <Col md={4} className="center-mobile">
            <p>Total:{totalValue}</p>
          </Col>

          <Col md={4} className="center-mobile">
            <MDBBtn onClick={handleCheckout} color="danger" style={{ width: '7rem', height: '2rem', textTransform: 'none', paddingTop: '0px', color: 'white', fontWeight: 'bold', letterSpacing: '1px' }}>PAY</MDBBtn>
          </Col>

        </Row>

      </Row>
    </Container>
  );
}
