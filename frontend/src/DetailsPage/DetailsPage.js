import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Logo from "../Home/Components/Logo/Logo";
import BurgerMenu from "../Home/Components/Burger/Menu";
import Cart from "../Home/Components/Cart/Cart";
import Footer from "../Home/Components/Footer/Footer";
import DetailsItem from "./DetailsProduct";

export default function DetailsPage() {
  const { id, whichProduct } = useParams();
  const api_base_url = process.env.REACT_APP_API_BASEURL;
  const [detailsItem, setDetailsItem] = useState(null);
  useEffect(() => {

    const fetchDetailsData = async () => {
        try {
          const response = await fetch(
            `${api_base_url}/content/${whichProduct}/${id}`
          );
          const data = await response.json();
          setDetailsItem(data);
        } catch (error) {
          console.error(error);
        }
    };
   
    fetchDetailsData()

  }, [id, whichProduct, api_base_url]);

  return (
    <div className="container mx-auto">
      <div className="mt-3 flex items-center">
        <div className="grow">
          <Logo />
        </div>
        <div className="mt-4  flex  ">
          <Cart />
          <BurgerMenu />
        </div>
      </div>
      <div className="mt-20">
        <DetailsItem detailsItem={detailsItem} />
      </div>

      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
}
