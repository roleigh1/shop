import React from "react";
import { useCart } from "../CartContext";
import { Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import Logo from "../Home/Components/Logo/Logo";
import BurgerMenu from "../Home/Components/Burger/Menu";

function Checkout() {
 const { cart } = useCart();

    return (
        <Container>
            <Row className="d-flex align-items-center justify-content-between">
                <Col xs="auto" style={{ marginTop: '1rem' }}>
                    <Logo />
                </Col>
                <Col xs="auto" className='d-flex'>
                    <BurgerMenu />
                </Col>
            </Row>
            <Row>
            {cart.map((item, index) => (
                <Col key={index} className="mb-2">
                    <div className="d-flex justify-content-between algin-items-center ">
                        <div>
                            <h5>{item.name}</h5>
                            <p>Price: €{item.price}</p>
                            <p>Quantity:{item.quantity}</p>
                        </div>
                        <div>€{(item.price * item.quantity).toFixed(2)}</div>
                    </div>
                </Col>
            ))}
            </Row>
        </Container>
)
}
export default Checkout; 