import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import BestSeller1 from './BestsellerOne';
import BestSeller2 from './bestsellerTwo';

export default function Bestseller() {
    return (
        <Container>
           
                <BestSeller1 />
                <BestSeller2 />
            
        </Container>
    )
}
