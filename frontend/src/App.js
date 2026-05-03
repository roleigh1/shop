
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import CartPage from "./Checkout/CartPage";
import { CartProvider } from "./CartContext";
import Faq from "./FAQ/Faq";
import "./app.css";
import ProductPage from "./ProductPage/ProductPage";
import DetailsPage from "./DetailsPage/DetailsPage";

function App() {
  return (
    <CartProvider>
      <Router>
        <Routes>
          <Route path="/redeem" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/cartpage" element={<CartPage />} />
          <Route path="/Shop" element={<ProductPage />} />
          <Route path="/details/:id/:whichProduct" element={<DetailsPage />} />
          <Route path="/faq" element={<Faq />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;
