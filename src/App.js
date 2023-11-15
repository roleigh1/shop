import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import CartPage from './Checkout/CartPage';
import { CartProvider } from './CartContext';
import { useState, useEffect } from 'react';
import ProductPage from './ProductPage/ProductPage';






function App() {
  const [infos, setInfos] = useState([]);
  const [items, setItems] = useState([])
  const [products, setProducts] = useState([]);




  const fetchInfo = () => {
    fetch('http://localhost:4242/api/CardInfos')
    .then(res => res.json())
    .then(data => {
        
        setInfos(data.result); 
    })
    .catch(error => console.error('Error:', error));
  }


  const fetchItems = () => {
    fetch('http://localhost:4242/api/BestsellerItems')
      .then(res =>  res.json())
      .then(data => {
        setItems(data.result);
      })
  }
  const fetchProducts = () =>  {
    fetch('http://localhost:4242/api/Products')
    .then(res => res.json()
    .then(data => {
      setProducts(data.result);
    }))
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
          <Route path="/" element={<Home items={items} infos={infos} />} />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path='/products' element={<ProductPage products={products} />} />

        </Routes>
      </Router>
    </CartProvider>

  )
}

export default App;
