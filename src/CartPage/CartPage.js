import React from "react";
import { Container } from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap';
import Logo from "../Home/Components/Logo/Logo";
import BurgerMenu from "../Home/Components/Burger/Menu";
import Footer from "../Home/Components/Footer/Footer";
import CartTable from "./CartTable";
import { MDBBtn } from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

function CartPage() {
    const navigate = useNavigate();


    return (
        <Container>
            <Row className="d-flex align-items-center justify-content-between">
                <Col xs="auto" style={{ marginTop: '1rem' }}>
                    <Logo />
                </Col>
                <Col xs="auto" className='d-flex mt-5' >
                    <BurgerMenu />
                </Col>
            </Row>
            <Row className="w-100">

                <CartTable />

            </Row>

            <Row>
                <MDBBtn onClick={() => {
                    navigate("/checkout")
                }} style={{ width: "7rem" }}>Checkout</MDBBtn>
            </Row>
            <Row style={{ marginTop: '6rem' }} className="">

                <Footer />


            </Row>
        </Container>
    )
}
export default CartPage; 