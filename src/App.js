import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Checkout from './Checkout/Checkout';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" exact element={Home()} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>

  )
}

export default App;
