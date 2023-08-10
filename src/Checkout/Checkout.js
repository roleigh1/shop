import React from "react";
import { Container } from 'react-bootstrap';
import {Row,Col} from 'react-bootstrap';
import Logo from "../Home/Components/Logo/Logo";
import BurgerMenu from "../Home/Components/Burger/Menu";
function Checkout() {
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
    </Container>
    )
}
export default Checkout; 