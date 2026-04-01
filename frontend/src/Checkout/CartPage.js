import { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";
import Logo from "../Home/Components/Logo/Logo";
import BurgerMenu from "../Home/Components/Burger/Menu";
import Footer from "../Home/Components/Footer/Footer";
import CartTable from "./CartTable";
import { apiConfig } from "../config";


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
          <Col xs="auto" style={{ marginTop: "1rem" }}>
            <Logo />
          </Col>
          <Col xs="auto" className="d-flex mt-5">
            <BurgerMenu />
          </Col>
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
