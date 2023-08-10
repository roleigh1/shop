import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SeasonProductCardOne from "./SeasonProducts";
import SeasonProductCardThird from "./SeasonProductsThird";
import SeasonProductCardFour from "./SeasonProductsFour";
import SeasonProductCardFive from "./SeasonProductsFive";
import SeasonProductCardSecond from "./SeasonProductsSecond";
function SeasonProductCards() {
    return (
        <div>
            <Row >
                <Col>
                 <SeasonProductCardOne/>
                </Col>
                <Col>
                <SeasonProductCardSecond />
                </Col>
                <Col>
                <SeasonProductCardThird />
                </Col>
                <Col>
                 <SeasonProductCardFour /> 
                </Col>
                <Col>
                 <SeasonProductCardFive />
                </Col>
            </Row>
           
        </div>
    )
}
export default SeasonProductCards;