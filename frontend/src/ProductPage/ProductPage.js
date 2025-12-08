import Logo from "../Home/Components/Logo/Logo";
import BurgerMenu from "../Home/Components/Burger/Menu";
import Cart from "../Home/Components/Cart/Cart";
import Banner from "./Bg-Producs";
import ProductList from "./ProductList";
import Footer from "../Home/Components/Footer/Footer";

export default function ProductPage({banners}) {

  return (
    <div className="container mx-auto ">
    <div className="mt-3 flex items-center justify-between">
      <div className="flex-none">
        <Logo />
      </div>
      <div className="mt-4 flex">
        <Cart />
        <BurgerMenu />
      </div>
    </div>
    <div className="mt-5">
      <Banner banners={banners} />
    </div>
    
    <div className="mt-5   ">
     


      <ProductList/>
     
    </div>
    
    <div className="mt-5">
      <Footer />
    </div>
  </div>
  );
}
