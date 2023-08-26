import React from "react";
import { useCart } from "../CartContext";
import { Row, Col } from "react-bootstrap";
import { MDBBtn } from "mdb-react-ui-kit";
export default function CartTable() {

    const { cart, updateQuantity, removeFromCart } = useCart();
    const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0) + '€';

    return (
        <Row>
            <h1 className="text-center mt-3"> Your Purchase</h1>
            <table className="mt-3">
                <thead>

                    <tr>
                        <th><p style={{position:'relative',top:'8px',left:'1rem'}}>Items</p></th>
                        <th>Price</th>
                        <th></th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map((item, index) => (
                        <tr key={index} style={{ borderBottom: ' 1px solid rgba(0, 0, 0, 0.4)', verticalAlign: 'middle', }}>

                            <td ><h5 style={{ marginLeft: '15px' }}>{item.name}</h5></td>

                            <td><p style={{ marginTop: '1rem' }}> {item.price}€</p></td>
                            <td style={{ display: 'flex', gap: '0.3rem', marginTop: '1rem' }}>
                                <button style={{ fontWeight: 'bold', height: '1.5rem', width: '1rem', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '10px' }} className="btn btn-danger" onClick={() => updateQuantity(item.name, -1)}>-</button>
                                <p>{item.quantity}</p>
                                <button className='btn btn-success' style={{ fontWeight: 'bold', height: '1.5rem', borderRadius: '50%', width: '1rem', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '10px' }} onClick={() => updateQuantity(item.name, 1)}>+</button>
                            </td>
                            <td><div>{(item.price * item.quantity).toFixed(2)}€</div></td>
                            <td><button style={{ fontWeight: 'bold', height: '1.5rem', borderRadius: '50%', width: '1.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: '9px' }} className='btn btn-danger' onClick={() => removeFromCart(item.name)}>x</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>


            <Row className="  mt-5">
                <Col xs={7} className="d-flex justify-content-end">
                    <MDBBtn color="info" style={{ width: '7rem', height: '2rem', textTransform: 'none', paddingTop: '0px', color: 'white', fontWeight: 'bold', letterSpacing: '1px', }}>Checkout</MDBBtn>
                </Col>
                <Col className="d-flex justify-content-center">
                    <p style={{ marginLeft: '-2.3rem', }}>Total:</p><span style={{ textDecoration: 'underline' }}>{total}</span>
                </Col>

            </Row>


            <style jsx>{`
            .ite{
                margin-left:1rem;
            }

            

        }
        
        `}</style>
        </Row>

    )
} 