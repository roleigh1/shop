import React from "react";
import { useCart } from "../CartContext";
import {  Container } from 'react-bootstrap';
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
            <tr key={index} style={{ borderBottom:' 1px solid #000', verticalAlign: 'middle' }}>
             
                <td><h5>{item.name}</h5></td>
                
                <td><p style={{marginTop:'1rem'}}> €{item.price}</p></td>
                <td style={{display:'flex',gap:'1rem' , marginTop:'1rem'}}>
                <button style={{fontWeight:'bold',height:'1.5rem', width:'1rem',borderRadius:'50%',display: 'flex',justifyContent:'center',alignItems:'center',paddingBottom:'10px'  }} className="btn btn-danger" onClick={() => updateQuantity(item.name, -1)}>-</button>
                <p>{item.quantity}</p>
                <button className='btn btn-success' style={{fontWeight:'bold',height:'1.5rem',borderRadius:'50%', width:'1rem',display: 'flex',justifyContent:'center',alignItems:'center', paddingBottom:'10px'}} onClick={() => updateQuantity(item.name, 1)}>+</button>
                </td>
                <td><div>€{(item.price * item.quantity).toFixed(2)}</div></td>
                <td><button  style={{fontWeight:'bold',height:'1.5rem',borderRadius:'50%', width:'1.5rem',display: 'flex',justifyContent:'center',alignItems:'center',paddingBottom:'9px'}} className='btn btn-danger' onClick={() => removeFromCart(item.name)}>x</button></td>
            </tr>
        ))}
    </tbody>
</table>
            </Row>
        </Container>
    )
}
export default Checkout; 