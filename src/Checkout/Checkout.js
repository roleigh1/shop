import React from "react";
import { Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import Logo from "../Home/Components/Logo/Logo";
import BurgerMenu from "../Home/Components/Burger/Menu";
import Footer from "../Home/Components/Footer/Footer";
import Cart from "../Home/Components/Cart/Cart";
import Total from "./TotalComponent";


export function Checkout() {
    
    return (
        <Container>
            <Row className="d-flex align-items-center justify-content-between">
                <Col xs="auto" style={{ marginTop: '1rem' }}>
                    <Logo />
                </Col>
                <Col xs="auto" className='d-flex mt-5' >
                    <Cart />
                    <BurgerMenu />
                </Col>
            </Row>
            <Row style={{marginTop:"5rem"}} > 
                <Col> 
                   <Total />
                </Col>
            </Row>
            <Row>
                <Footer />
            </Row>
        </Container>
    )
}