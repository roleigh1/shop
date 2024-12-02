import React from "react";
import PropTypes from "prop-types";
import Logo from "../Home/Components/Logo/Logo";
import BurgerMenu from "../Home/Components/Burger/Menu";
import Cart from "../Home/Components/Cart/Cart";
import Footer from "../Home/Components/Footer/Footer";
import DetailsItem from "./DetailsProduct";

export default function DetailsPage({ items, products }) {
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
      <div className="mt-20">
        <DetailsItem items={items} products={products} />
      </div>

      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
}
DetailsPage.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      firstImage: PropTypes.string.isRequired,
      secondImage: PropTypes.string.isRequired,
      thirdImage: PropTypes.string.isRequired,
      fourthImage: PropTypes.string.isRequired,

      type: PropTypes.string.isRequired,
    })
  ).isRequired,
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      firstImage: PropTypes.string.isRequired,
      secondImage: PropTypes.string.isRequired,
      thirdImage: PropTypes.string.isRequired,
      fourthImage: PropTypes.string.isRequired,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    })
  ).isRequired,
};
