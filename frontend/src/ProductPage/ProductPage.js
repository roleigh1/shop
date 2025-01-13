import React,{useState} from "react";

import Logo from "../Home/Components/Logo/Logo";
import BurgerMenu from "../Home/Components/Burger/Menu";
import Cart from "../Home/Components/Cart/Cart";
import Banner from "./Bg-Producs";
import ProductList from "./ProductList";
import Footer from "../Home/Components/Footer/Footer";
import Sidebar from "./Filter/Sidebar";
export default function ProductPage({banners}) {

  return (
    <div className="container mx-auto ">
    <div className="flex items-center justify-between mt-3">
      <div className="flex-none">
        <Logo />
      </div>
      <div className="flex mt-4">
        <Cart />
        <BurgerMenu />
      </div>
    </div>
    <div className="mt-5">
      <Banner banners={banners} />
    </div>
    
    <div className="mt-5 flex flex-row  justify-center ">
      <Sidebar/>


      <ProductList/>
     
    </div>
    
    <div className="mt-5">
      <Footer />
    </div>
  </div>
  );
}
