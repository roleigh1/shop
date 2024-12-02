import PropTypes from "prop-types";
import React from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import "./style.css";
import useSWR from "swr";
import NewBestsellerItem from "./newBestseller";

const fetcher = (url) => fetch(url).then((res) => res.json());
export default function NewBestSellerList({items}) {
  const api_base_url = process.env.REACT_APP_API_BASEURL;
  const { data, error } = useSWR(`${api_base_url}/content/bestseller`, fetcher);

  if (error) return <div>Error loading images</div>;

  if (!data) return <div>Loading...</div>;

  items = data.result || [];
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
  items: PropTypes.arrayOf(
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
