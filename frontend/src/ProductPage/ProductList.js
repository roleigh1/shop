import React, { useState, useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import NewProductsItem from "./ProductItem";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [index, setIndex] = useState(2);
  const [hasMore, setHasMore] = useState(true);

  const api_base_url = process.env.REACT_APP_API_BASEURL;

  useEffect(() => {
    axios
      .get(`${api_base_url}/content/products?offset=0&limit=12`)
      .then((res) => {
        console.log("API response:", res.data); // Ausgabe der API-Antwort
        setProducts(res.data.result || []); // Füge ein Fallback für leere Antworten hinzu
      })
      .catch((err) => {
        console.error("API error:", err); // Zeige Fehler in der Konsole
      });
  }, []);
  const fetchMoreData = () => {
    axios
      .get(`${api_base_url}/content/products?offset=${index}0&limit=12`)
      .then((res) => {
        setProducts((prevProducts) => [...prevProducts, ...res.data.result]);
        res.data.length > 0 ? setHasMore(true) : setHasMore(false);
      })
      .catch((err) => console.log(err));

    setIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <InfiniteScroll
      dataLength={products.length}
      next={fetchMoreData}
      hasMore={hasMore}
    >
      <MDBContainer fluid className="text-center">
        <MDBRow className="mobile" style={{ justifyContent: "center" }}>
          {products.length > 0 ? (
            products.map((product) => (
              <MDBCol md="3" key={product.id} className="mt-5">
                <NewProductsItem
                  className="card"
                  product={{ ...product, price: parseFloat(product.price) }}
                />
              </MDBCol>
            ))
          ) : (
            <p>No products available</p>
          )}
        </MDBRow>
      </MDBContainer>
    </InfiniteScroll>
  );
}
