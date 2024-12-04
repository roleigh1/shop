import React, { useState, useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import NewProductsItem from "./ProductItem";
import { motion } from "framer-motion";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [hasMore, setHasMore] = useState(true);

  const api_base_url = process.env.REACT_APP_API_BASEURL;
  const ITEMS_PER_PAGE = 4; // Anzahl der Items pro Anfrage

  // Initiale Daten laden
  useEffect(() => {
    axios
      .get(`${api_base_url}/content/products?offset=0&limit=${ITEMS_PER_PAGE}`)
      .then((res) => {
        console.log("API response:", res.data); // Ausgabe der API-Antwort
        setProducts(res.data.result || []); // Füge ein Fallback für leere Antworten hinzu
        if (res.data.result.length < ITEMS_PER_PAGE) setHasMore(false); // Keine weiteren Daten
      })
      .catch((err) => {
        console.error("API error:", err); // Zeige Fehler in der Konsole
      });
  }, [api_base_url]);

  // Weitere Daten laden
  const fetchMoreData = () => {
    const offset = products.length;
    axios
      .get(`${api_base_url}/content/products?offset=${offset}&limit=${ITEMS_PER_PAGE}`)
      .then((res) => {
        console.log("Second API response:", res.data);
        setProducts((prevProducts) => [...prevProducts, ...res.data.result]);
        if (res.data.result.length < ITEMS_PER_PAGE) setHasMore(false); // Keine weiteren Daten
      })
      .catch((err) => console.log(err));
  };

  // Animation für Slide-In-Effekt
  const slideInVariant = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <InfiniteScroll
      dataLength={products.length}
      next={fetchMoreData}
      hasMore={hasMore}
      loader={<p>Loading...</p>}
    >
      <MDBContainer fluid className="text-center">
        <MDBRow className="mobile" style={{ justifyContent: "center" }}>
          {products.length > 0 ? (
            products.map((product, index) => (
              <motion.div
                key={product.id}
                variants={slideInVariant}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ flex: "1 0 25%" }}
              >
                <MDBCol md="3" className="mt-5 pb-10">
                  <NewProductsItem className="card" product={product} />
                </MDBCol>
              </motion.div>
            ))
          ) : (
            <p>No products available</p>
          )}
        </MDBRow>
      </MDBContainer>
    </InfiniteScroll>
  );
}
