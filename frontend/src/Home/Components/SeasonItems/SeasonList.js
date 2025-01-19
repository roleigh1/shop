import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import "./styles.css";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import SeasonItem from "./SeasonItem";
import axios from "axios";
import { apiConfig } from "../../../config";

export default function SeasonList() {
  const [infos,setInfos] = useState([]); 
  const {BASE_URL,endpoints} = apiConfig; 
  useEffect(() => {
    axios
    .get(`${BASE_URL}${endpoints.seasonCards}`)
    .then((res) => {
      setInfos(res.data.result || [])
    })
    .catch((err) => {
      console.error("Api fetch Error Season Cards",err)
    })
  },[BASE_URL,endpoints,setInfos])
  return (
    <MDBContainer
      fluid
      className="my-5 text-center d-flex justify-content-center"
    >
      <MDBRow
        className="mobile flex justify-center"
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

