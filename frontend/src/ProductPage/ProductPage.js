import React from "react";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Logo from "../Home/Components/Logo/Logo";
import BurgerMenu from "../Home/Components/Burger/Menu";
import Cart from "../Home/Components/Cart/Cart";
import Banner from "./Bg-Producs";
import ProductList from "./ProductList";
import Footer from "../Home/Components/Footer/Footer";
import PropTypes from "prop-types";
export default function ProductPage({ products, banners }) {
  return (
    <Container>
      <Row className="d-flex align-items-center justify-content-between">
        <Col xs="auto">
          <Logo />
        </Col>
        <Col xs="auto" className="d-flex mt-5">
          <Cart />
          <BurgerMenu />
        </Col>
      </Row>
      <Row>
        <Col>
          <Banner banners={banners}/>
        </Col>
      </Row>
      <Row>
        <Col>
          <ProductList products={products} />
        </Col>
      </Row>
      <Row>
        <Footer />
      </Row>
    </Container>
  );
}
ProductPage.propTypes = {
  products: PropTypes.array.isRequired,
  banners:PropTypes.array.isRequired
};
