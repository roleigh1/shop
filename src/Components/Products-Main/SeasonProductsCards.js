import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import SeasonProductCardOne from "./SeasonProducts";
import SeasonProductCardThird from "./SeasonProductsThird";
import SeasonProductCardFour from "./SeasonProductsFour";
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
            </Row>
        </div>
    )
}
export default SeasonProductCards;