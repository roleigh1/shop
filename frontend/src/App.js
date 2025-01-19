import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import CartPage from "./Checkout/CartPage";
import { CartProvider } from "./CartContext";

import "./app.css";
import ProductPage from "./ProductPage/ProductPage";
import DetailsPage from "./DetailsPage/DetailsPage";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path="/products" element={<ProductPage />} />
          <Route path="/details/:id/:whichProduct" element={<DetailsPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
