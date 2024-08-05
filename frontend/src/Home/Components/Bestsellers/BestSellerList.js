import PropTypes from "prop-types";
import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import "./style.css";
import BestSellerItem from "./BestsellerItem";
export default function BestSellerList({ items }) {
  return (
    <MDBContainer
      fluid
      className="my-5 text-center d-flex justify-content-center "
    >
      <MDBRow className="mobile">
        {items.map((item) => (
          <MDBCol key={item.id} md="6" lg="3" className="mb-4">
            <BestSellerItem className="card" item={item} />
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}
BestSellerList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ).isRequired,
};
