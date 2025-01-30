import React, { useEffect, useState } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import axios from "axios";
import NewBestsellerItem from "./newBestseller";
import { apiConfig } from "../../../config";

export default function NewBestSellerList() {

  const [items, setItems] = useState([]);
  const [hasAnimated, setHasAnimated] = useState(false); // Animation-Zustand
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: false }); // Kein `triggerOnce`, da wir wieder animieren wollen
  const {BASE_URL,endpoints} = apiConfig; 
  const ITEMS_PER_PAGE = 4;

  useEffect(() => {
    if (inView && !hasAnimated) {
   
      axios
        .get(`${BASE_URL}${endpoints.bestseller}?offset=0&limit=${ITEMS_PER_PAGE}`)
        .then((res) => {
          setItems(res.data.result || []);
          setHasAnimated(true); 
        })
        .catch((err) => {
          console.error("API error:", err);
        });
    }
  }, [inView, hasAnimated, BASE_URL,endpoints.bestseller]);

  const slideInVariant = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  return (
    <div ref={ref}>
      <MDBContainer
        fluid
        className="my-5 text-center d-flex justify-content-center"
      >
        <MDBRow className="mobile">
          {items.length > 0 ? (
            items.map((item, index) => (
              <motion.div
                key={item.id}
                variants={slideInVariant}
                initial="hidden"
                animate={inView ? "visible" : "hidden"} // Animation neu starten bei Sichtbarkeitswechsel
                transition={{ duration: 0.5, delay: index * 0.1 }}
    
              >
                <MDBCol className="mb-4">
                  <NewBestsellerItem className="card" item={item} />
                </MDBCol>
              </motion.div>
            ))
          ) : (
            <p>No products available</p>
          )}
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
