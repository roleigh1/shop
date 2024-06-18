import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import CartPage from "./Checkout/CartPage";
import { CartProvider } from "./CartContext";
import { useState, useEffect } from "react";
import "./app.css";
import ProductPage from "./ProductPage/ProductPage";

function App() {
  const [infos, setInfos] = useState([]);
  const [items, setItems] = useState([]);
  const [products, setProducts] = useState([]);

  const api_base_url = process.env.REACT_APP_API_BASEURL;
 
  
  const fetchContent = async (whichContent) => {
    try {
      const res = await fetch(`${api_base_url}/content/${whichContent}`);
      const data = await res.json();
      return data.result;
    } catch (error) {
      console.error(`Error fetching ${whichContent}:`, error);
      return [];
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [infosData, itemsData, productsData] = await Promise.all([
          fetchContent("cardInfos"),
          fetchContent("bestseller"),
          fetchContent("products"),
        ]);
        setInfos(infosData);
        setItems(itemsData);
        setProducts(productsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={<Home items={items} infos={infos} products={products} />}
          />
          <Route path="/cartpage" element={<CartPage />} />
          <Route
            path="/products"
            element={<ProductPage products={products} />}
          />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
