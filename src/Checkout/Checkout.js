import React from "react";
import { useCart } from "../CartContext";
import { Button, Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import Logo from "../Home/Components/Logo/Logo";
import BurgerMenu from "../Home/Components/Burger/Menu";


function Checkout() {
    const { cart, updateQuantity, removeFromCart } = useCart();

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
            <table>
        <thead>
        
            <tr>
            <th>Item</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
        </tr>
    </thead>
    <tbody>
        {cart.map((item, index) => (
            <tr key={index}>
             
                <td><h5>{item.name}</h5></td>
                
                <td><p> €{item.price}</p></td>
                <td style={{display:'flex',gap:'1rem'}}>
                <Button  onClick={() => updateQuantity(item.name, -1)}>-</Button>
                <p>{item.quantity}</p>
                <Button onClick={() => updateQuantity(item.name, 1)}>+</Button>
                </td>
                <td><div>€{(item.price * item.quantity).toFixed(2)}</div></td>
                <td><Button onClick={() => removeFromCart(item.name)}>X</Button></td>
            </tr>
        ))}
    </tbody>
</table>
            </Row>
        </Container>
    )
}
export default Checkout; 