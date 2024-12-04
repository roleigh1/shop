import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import CartPage from "./Checkout/CartPage";
import { CartProvider } from "./CartContext";
import { useState, useEffect } from "react";
import "./app.css";
import ProductPage from "./ProductPage/ProductPage";
import DetailsPage from "./DetailsPage/DetailsPage";

function App() {
  const [infos, setInfos] = useState([]);
 


  const api_base_url = process.env.REACT_APP_API_BASEURL;

  useEffect(() => {
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

    const fetchData = async () => {
      try {
        const [infosData] =
          await Promise.all([
            fetchContent("cardInfos"),

       

          ]);
        setInfos(infosData);
  


      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [api_base_url]);

  useEffect(() => {

  }, [api_base_url]);
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
     
          
                infos={infos}
      
              />
            }
          />
          <Route path="/cartpage" element={<CartPage />} />
          <Route
            path="/products"
            element={<ProductPage  />}
          />
          <Route
            path="/details/:id/:whichProduct"
            element={<DetailsPage />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
