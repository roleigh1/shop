import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

import Footer from "../Footer/Footer";
import CartTable from "./CartTable";
import { apiConfig } from "../config";
import Navbar from "../Nav/Navbar";


function CartPage() {
  const [token] = useState(() => {
    const saved = localStorage.getItem("voucherToken");
    return saved;
  })
  const [voucher, setVoucher] = useState({
    discountedGroup: "",
    voucherType: "",
    value: null,
    maxredemptions: null,
    currentredemptions: null,
    message: "",
  });
  const getVoucherValue = async () => {
    try {
      const req = await fetch(apiConfig.BASE_URL + apiConfig.endpoints.voucherCart, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: token }),
      });
      const data = await req.json();

      if (data.message === "Voucher valid") {
        setVoucher({
          discountedGroup: data.response.DISCOUNTEDGROUP,
          voucherType: data.response.VOUCHERTYPE,
          value: data.response.VALUE,
          maxredemptions: data.response.MAXREDEMPTIONS,
          currentredemptions: data.CURRENTREDEMPTIONS,
          message: ""
        }
        )
      } else if (data.message === "Voucher data not found") {
        setVoucher({
          discountedGroup: "",
          voucherType: "",
          value: null,
          maxredemptions: null,
          currentredemptions: null,
          message: "Voucher does not exist"
        }
        )
      }

      } catch (error) {
        console.error("Error getting voucher", error);
      }

    }
  useEffect(() => {

      if (token) {
        getVoucherValue();

      }

    }, [token])

    return (
      <Container>
        <Row className="d-flex align-items-center justify-content-between">
          <Navbar/>
        </Row>

        <Row className="w-100" style={{ margin: "0" }}>
          <CartTable voucher={voucher} token={token} />
        </Row>

        <Row style={{ marginTop: "6rem" }} className="">
          <Footer />
        </Row>
      </Container>
    );
  }
  export default CartPage;
