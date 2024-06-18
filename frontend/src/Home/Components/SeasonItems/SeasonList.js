import React from "react";
import PropTypes from "prop-types";
import "./styles.css";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import SeasonItem from "./SeasonItem";

export default function SeasonList({ infos }) {
  return (
    <MDBContainer
      fluid
      className="my-5 text-center d-flex justify-content-center"
    >
      <MDBRow
        className="mobile"
        style={{ display: "flex", justifyContent: "center" }}
      >
        {infos.map((info, index) => (
          <MDBCol key={info.id} md="6" lg="3" className="mb-4">
            <SeasonItem item={info} index={index} />
          </MDBCol>
        ))}
      </MDBRow>
    </MDBContainer>
  );
}

SeasonList.propTypes = {
  infos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ).isRequired,
};
