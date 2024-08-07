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
    <div className="container mx-auto">
    <div className="flex items-center mt-1">
      <div className="flex-grow">
        <Logo />
      </div>
      <div className="flex flex-grow-0 mt-4 justify-end space-x-4">
        <Cart />
        <BurgerMenu />
      </div>
    </div>

    <div className="relative z-0 mt-8">
      {success && <Alert />}
      <BannerHome banners={banners} className="slider" />
    </div>

    <div className="mt-8">
      <SeasonList infos={infos} />
    </div>

    <div className="mt-4 bg-gray-300 rounded-lg">
      <div className="flex justify-center">
        <ContactForm className="contactForm" />
      </div>
    </div>

    <div className="mt-8">
      <BestSellerList items={items} />
    </div>

    <div className="mt-8">
      <Footer />
    </div>
  </div>
  );
}
Home.propTypes = {
  items: PropTypes.array.isRequired,
  infos: PropTypes.array.isRequired,
  banners: PropTypes.array.isRequired
};
export default Home;
