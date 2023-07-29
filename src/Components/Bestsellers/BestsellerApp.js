import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BestSeller1 from './BestsellerOne';
import BestSeller2 from './bestsellerTwo';

export default function Bestseller() {
    return (
        <Container className='text-center' >
            <Row className='text-center'><h4> <strong>Bestseller</strong></h4>
            </Row>
            <Row className='d-flex justify-content-center  '>

                <Col><BestSeller1 /></Col>

                <Col> <BestSeller2 /></Col>


            </Row>
        </Container>
    )
}
