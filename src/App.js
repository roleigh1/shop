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
    fetch('http://localhost:4242/api/infos')
      .then(response => {
        return response.json()
      })
      .then(data => {
        setInfos(data)
      })
  }
  useEffect(() => {
    fetchInfo()
    fetchItems()
    fetchProducts()
  })

  const fetchItems = () => {
    fetch('http://localhost:4242/api/items')
      .then(response => {
        return response.json()
      })
      .then(data => {
        setItems(data);
      })
  }
  const fetchProducts = () =>  {
    fetch('http://localhost:4242/api/products')
    .then(response => {
      return response.json()
    })
    .then(data => {
      setProducts(data);
    })
  }





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
