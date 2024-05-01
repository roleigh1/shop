import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import CartPage from './Checkout/CartPage';
import { CartProvider } from './CartContext';
import { useState, useEffect } from 'react';
import "./app.css";
import ProductPage from './ProductPage/ProductPage';

function App() {
  const [infos, setInfos] = useState([]);
  const [items, setItems] = useState([])
  const [products, setProducts] = useState([]);

  const api_base_url = process.env.REACT_APP_API_BASEURL;

  const fetchInfo = async () => {
      try {
          const res = await fetch(api_base_url  + "/CardInfos");
          const data = await res.json();
          setInfos(data.result);
      } catch (error) {
          console.error('Error fetching CardInfos:', error);
      }
  }
  
  const fetchItems = async () => {
      try {
          const res = await fetch(api_base_url  + "/BestsellerItems");
          const data = await res.json();
          setItems(data.result);
      } catch (error) {
          console.error('Error fetching BestsellerItems:', error);
      }
  }
  
  const fetchProducts = async () => {
      try {
          const res = await fetch(api_base_url  + "/Products");
          const data = await res.json();
          setProducts(data.result);
      } catch (error) {
          console.error('Error fetching Products:', error);
      }
  }

  useEffect(() => {
    fetchInfo()
    fetchItems()
    fetchProducts()
  },[])

  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home items={items} infos={infos} products={products}/>} />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path='/products' element={<ProductPage products={products} />} />
        </Routes>
      </Router>
    </CartProvider>
  )
}

export default App;
