import Banner from "./Bg-Producs";
import ProductList from "./ProductList";
import Footer from "../Footer/Footer";

import Navbar from "../Nav/Navbar";
export default function ProductPage({ banners }) {

  return (
    <div className="container mx-auto ">
      <div className="">
        <Navbar />
      </div>
      <div className="mt-5">
        <Banner banners={banners} />
      </div>
      <div>
        <ProductList />
      </div>

      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
}
