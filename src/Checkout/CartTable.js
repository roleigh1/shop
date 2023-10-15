import React, { useState, useEffect } from "react";

import { useCart } from "../CartContext";
import { Row, Col, Container } from "react-bootstrap";
import { MDBBtn } from "mdb-react-ui-kit";
import Decimal from "decimal.js";
import "./styles.css";
import PickupDate from "./SelectedDate";
import SelectLocation from "./SelectLocation";
export default function CartTable() {


  const Message = ({ message }) => (
    <section>
      <p>{message}</p>
    </section>
  );


  const [message, setMessage] = useState("");
  const { cart, updateQuantity, removeFromCart, totalValue } = useCart();








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
    <Container >
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
          <tbody>
            {cart.map((item, index) => (
              <tr key={index} style={{ borderBottom: '1px solid rgba(0, 0, 0, 0.4)', verticalAlign: 'middle' }}>
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

        <Row className="mt-5 flex-column align-items-center text-center endCont">

          <Col md={3} className="mb-3 ">
            <PickupDate />
          </Col>

          <Col>
            <SelectLocation />
          </Col>
          <Col className="">
            <MDBBtn onClick={handleCheckout} color="danger" style={{ width: '7rem', height: '2rem', textTransform: 'none', paddingTop: '0px', color: 'white', fontWeight: 'bold', letterSpacing: '1px', marginTop: "1.25rem" }}>Checkout</MDBBtn>
          </Col>
          <Col sm={6} className=" ">
            <p style={{ marginTop: "2rem" }}>Total:{totalValue}</p>
          </Col>
        </Row>
      </Row>
    </Container>

  );
}