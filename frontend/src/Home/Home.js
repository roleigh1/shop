import React, { useEffect, useState } from "react";
import "./App.css";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Footer from "../Home/Components/Footer/Footer";
import Logo from "./Components/Logo/Logo";
import Cart from "./Components/Cart/Cart";
import BurgerMenu from "./Components/Burger/Menu";
import BannerHome from "./Components/Side-show-head/BannerHome";
import SeasonList from "./Components/SeasonItems/SeasonList";
import ContactForm from "./Components/Contact/ContactForm";
import BestSellerList from "./Components/Bestsellers/BestSellerList";
import { useLocation } from "react-router-dom";
import { useCart } from "../CartContext";
import PropTypes from "prop-types";

import Alert from "./Components/Alert/Alert";

function Home({ items, infos, banners }) {
  const location = useLocation();
  const { setCart } = useCart();
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    if (urlParams.get("success") === "true") {
      setSuccess(true);
      setCart([]);
    }
  }, [location.search, setCart]);
  return (
    <Container>
      <Row style={{ display: "flex", alignItems: "center" }}>
        <Col xs="6">
          <Logo />
        </Col>
        <Col
          xs="6"
          className="d-flex mt-5"
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Cart />
          <BurgerMenu />
        </Col>
      </Row>
      <Row style={{ zIndex: 0 }}>
        <Col style={{ marginTop: "2rem" }}>
          {success && <Alert />}
          <BannerHome banners={banners} className="slider" />
        </Col>
      </Row>

      <Row style={{ marginTop: "2rem" }}>
        <SeasonList infos={infos} />
      </Row>
      <Row
        style={{
          marginTop: "-1rem",
          backgroundColor: "#E0E0E0",
          borderRadius: "10px",
        }}
      >
        <Col
          xs={{ span: 6, offset: 3 }}
          className="d-flex justify-content-center"
        >
          <ContactForm className="contactForm" />
        </Col>
      </Row>
      <Row style={{ marginTop: "-2rem" }}>
        <BestSellerList items={items} />
      </Row>
      <Row>
        <Footer></Footer>
      </Row>
    </Container>
  );
}
Home.propTypes = {
  items: PropTypes.array.isRequired,
  infos: PropTypes.array.isRequired,
  banners: PropTypes.array.isRequired
};
export default Home;
