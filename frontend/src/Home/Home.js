import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "../Home/Components/Footer/Footer";
import Logo from "./Components/Logo/Logo";
import Cart from "./Components/Cart/Cart";
import BurgerMenu from "./Components/Burger/Menu";
import BannerHome from "./Components/Banner/BannerHome";
import SeasonList from "./Components/SeasonItems/SeasonList";
import ContactSection from "./Components/Contact/ContactSection";

import NewBestSellerList from "./Components/Bestsellers/newBestsellerlist";
import { useLocation } from "react-router-dom";
import { useCart } from "../CartContext";


import Alert from "./Components/Alert/Alert";

function Home() {
  const location = useLocation();
  const { setCart } = useCart();
  const [success, setSuccess] = useState(false);
  const [test,setTest] = useState(false);
  

  useEffect(() => {
    const hash = window.location.hash;
    const urlParams = new URLSearchParams(location.search);
    if (urlParams.get("success") === "true") {
      setSuccess(true);
      setCart([]);
    } else if (hash === "#contact") {
      document
        .getElementById("contact-section")
        .scrollIntroView({ behavior: "smooth" });
    }
  }, [location.search, setCart]);
  return (
    <div className="container mx-auto">
      <div className="flex items-center mt-3">
        <div className="flex-grow">
          <Logo />
        </div>
        <div className="flex  mt-4  ">
          <Cart />
          <BurgerMenu />
        </div>
      </div>

      <div className="relative z-0 mt-8">
        {success && <Alert />}
        <BannerHome  className="slider" />
      </div>

      <div className="mt-8">
        <SeasonList  />
      </div>

      

      <div className="mt-8">
        <NewBestSellerList />
      </div>

      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
