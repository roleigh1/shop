import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BestSeller1 from './BestsellerOne';
import BestSeller2 from './bestsellerTwo';
import BestSeller3 from './BestsellerThree';
import BestSeller4 from './BestsellerFour';
export default function Bestseller() {
    return (
        <Container className='text-center'>
            <Row className='text-center'>
                <h4><strong>Bestseller</strong></h4>
            </Row>
            <Row className='justify-content-center'>
                <Col xs={12} className='d-flex justify-content-center align-content-center align-items-center'>
                    <BestSeller1 />
                    <BestSeller2 />
                    <BestSeller3 />
                    <BestSeller4 />
                </Col>
            </Row>
        </Container>
    );
}
