import React from "react";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Logo from "../Home/Components/Logo/Logo";
import BurgerMenu from "../Home/Components/Burger/Menu";
import Cart from "../Home/Components/Cart/Cart";
import BgImg from "./Bg-Producs";

export default function ProductPage() {
    return (
        <Container>
            <Row className="d-flex align-items-center justify-content-between"  >
                <Col xs="auto" >
                    <Logo />
                </Col>
                <Col xs="auto" className='d-flex mt-5'>
                    <Cart />
                    <BurgerMenu />
                </Col>
            </Row>
            <Row>

                <Col>

                    <BgImg />
                </Col>

            </Row>
            <Row>
            
            </Row>
        </Container>
    )
}