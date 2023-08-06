import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import BestSeller1 from './BestsellerOne';
import BestSeller2 from './bestsellerTwo';
import BestSeller3 from './BestsellerThree';
import BestSeller4 from './BestsellerFour';
export default function Bestseller() {
    return (
        <div>
            <Row className='text-center'>
                <h4><strong>Bestseller</strong></h4>
            </Row>
            <Row>
                
                     <Col>
                     <BestSeller1 />
                    </Col>
                    <Col>
                     <BestSeller2 />
                    </Col>
                    <Col>
                    <BestSeller3 />
                    </Col>
                    <Col>
                    <BestSeller4 />
                
                   </Col>
            </Row>
        </div>
    );
}
