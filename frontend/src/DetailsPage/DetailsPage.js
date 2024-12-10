import React, {useState,useEffect} from "react";
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
    console.log(id,whichProduct,"id,und wo")
  const fetchDetailsData = async () => {
    if (whichProduct === "bestsellerDetails") {
      try {
        const response = await fetch(
          `${api_base_url}/content/${whichProduct}/${id}`
        );
        const data = await response.json();
        console.log(data,"data")
        setDetailsItem(data);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const response = await fetch(
          `${api_base_url}/content/${whichProduct}/${id}`
        );
        const data = await response.json();
        console.log(data,"data")
        setDetailsItem(data);
      } catch (error) {
        console.log(error);
      }
    }
  };
  fetchDetailsData()

}, [id, whichProduct, api_base_url]);

  return (
    <div className="container mx-auto">
      <div className="flex items-center mt-3">
        <div className="flex-grow">
          <Logo />
        </div>
        <div className="flex  mt-4  ">
          <Cart />
          <BurgerMenu />
        </div>
      </div>
      <div className="mt-20">
        <DetailsItem detailsItem={detailsItem}/>
      </div>

      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
}
