import React, { useState,useEffect } from "react";
import PropTypes from "prop-types";
import {  useParams } from "react-router-dom";
import Images from "./imageGallery";
export default function DetailsItem({ items, products }){
    const { id, whichProduct } = useParams();
    const [detailsItem, setDetailsItem] = useState(null); 

    useEffect(() => {
      const numericId = parseInt(id, 10);  
  
      if (whichProduct === "bestsellers") {
        setDetailsItem(items.find((obj) => obj.id === numericId));
      } else {
        setDetailsItem(products.find((obj) => obj.id === numericId));
      }
    }, [id, products, whichProduct, items]);
  
    console.log(detailsItem); 
  
    
    return (
      <div>
        <Images />
    </div>
    )
}
DetailsItem.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
      })
    ).isRequired,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        price: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
          .isRequired,
      })
    ).isRequired,
  };