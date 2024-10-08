import PropTypes from "prop-types";
import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import "./style.css";
import NewBestsellerItem from "./newBestseller";
export default function NewBestSellerList({ items }) {
  return (
    <MDBContainer
      fluid
      className="my-5 text-center d-flex justify-content-center "
 >
      <MDBRow className="mobile">
        {items.map((item) => (
          <MDBCol key={item.id} md="6" lg="3" className="mb-4">
            <NewBestsellerItem className="card" item={item} />
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}

NewBestSellerList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      firstImage: PropTypes.string.isRequired,
      secondImage: PropTypes.string,
      type: PropTypes.string.isRequired,
    })
  ).isRequired,
};