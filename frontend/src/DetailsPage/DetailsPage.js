import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import Footer from "../Footer/Footer";
import DetailsItem from "./DetailsProduct";
import Navbar from "../Nav/Navbar";
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
      <div className="">
        <Navbar />
      </div>
      <div>
        <Breadcrumbs detailsItem={detailsItem} />
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
