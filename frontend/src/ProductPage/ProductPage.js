import React from "react";

import Logo from "../Home/Components/Logo/Logo";
import BurgerMenu from "../Home/Components/Burger/Menu";
import Cart from "../Home/Components/Cart/Cart";
import Banner from "./Bg-Producs";
import ProductList from "./ProductList";
import Footer from "../Home/Components/Footer/Footer";
import PropTypes from "prop-types";
export default function ProductPage({ products, banners }) {
  return (
    <div className="container mx-auto ">
    <div className="flex items-center justify-between mt-3">
      <div className="flex-none">
        <Logo />
      </div>
      <div className="flex mt-4">
        <Cart />
        <BurgerMenu />
      </div>
    </div>
    <div className="mt-5">
      <Banner banners={banners} />
    </div>
    <div className="mt-5 ">
      <ProductList products={products} />
    </div>
    <div className="mt-5">
      <Footer />
    </div>
  </div>
  );
}
ProductPage.propTypes = {
  products: PropTypes.array.isRequired,
  banners:PropTypes.array.isRequired
};
