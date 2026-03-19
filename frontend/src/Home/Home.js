import { useEffect, useState } from "react";
import "./App.css";
import Footer from "../Home/Components/Footer/Footer";
import Logo from "./Components/Logo/Logo";
import Cart from "./Components/Cart/Cart";
import BurgerMenu from "./Components/Burger/Menu";
import BannerHome from "./Components/Banner/BannerHome";
import SeasonList from "./Components/SeasonItems/SeasonList";
import NewBestSellerList from "./Components/Bestsellers/newBestsellerlist";
import { useLocation, useSearchParams } from "react-router-dom";
import { useCart } from "../CartContext";
import Alert from "./Components/Alert/Alert";
import { apiConfig } from "../config";

function Home() {
  const location = useLocation();
  const { setCart } = useCart();
  const [success, setSuccess] = useState(false);
  const [searchParams] = useSearchParams();
  const [voucherStatus, setVoucherStatus] = useState({
    active: false,
    soonActive: false,
    expired: false,
    limitReached: false
  });
  const [voucherLinkData, setVoucherLinkData] = useState(null);

  const token = searchParams.get("voucher")

  const voucherCheck = async (token) => {
    try {
      const res = await fetch(apiConfig.BASE_URL + apiConfig.endpoints.voucherCheck, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ token })
      })
      const data = await res.json();
      console.log(data.response)
      switch (data.message) {
        case "Voucher link valid":
          setVoucherStatus({ active: true, soonActive: false, expired: false, limitReached: false });
          localStorage.setItem("voucherToken", data.response.token);
          break;

        case "Voucher isnt active yet.":
          setVoucherStatus({ active: false, soonActive: true, expired: false, limitReached: false });
          break;

        case "Voucher is expired":
          setVoucherStatus({ active: false, soonActive: false, expired: true, limitReached: false });
          break;

        default:
          setVoucherStatus({ active: false, soonActive: false, expired: false, limitReached: true });
      }

      setVoucherLinkData(data.response);
    } catch (error) {
      console.error("Error checking Voucher link ", error)
    }
  }
  useEffect(() => {
    if (token) {
      voucherCheck(token);
    }
  }, [token])

  useEffect(() => {
    const hash = window.location.hash;
    const urlParams = new URLSearchParams(location.search);
    if (urlParams.get("success") === "true") {
      setSuccess(true);
      setCart([]);
      setVoucherStatus({
        active: false,
        soonActive: false,
        expired: false
      })
    } else if (hash === "#contact") {
      document
        .getElementById("contact-section")
        .scrollIntroView({ behavior: "smooth" });
    }
  }, [location.search, setCart]);
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

      <div className="  ">

        {(success || voucherStatus.active || voucherStatus.soonActive || voucherStatus.expired || voucherStatus.limitReached) && (
          <Alert voucherLinkData={voucherLinkData} voucherStatus={voucherStatus} />
        )}
        <BannerHome className="slider " />
      </div>

      <div className="">
        <SeasonList />
      </div>



      <div className="mt-8">
        <NewBestSellerList />
      </div>

      <div className="mt-8">
        <Footer />
      </div>
    </div>
  );
}

export default Home;
