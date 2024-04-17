import React, { useState, useEffect} from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

import "./style.css";
import ProductItem from "./ProductItem";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function ProductList({ products }) {
  const [selectedType, setSelectedType] = useState("");
  const [visibleProducts, setVisibleProducts] = useState(4);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const loadMoreProducts = () => {
    setVisibleProducts((prevCount) => prevCount + 6);
  };

  const handleFilterChange = (event) => {
    setSelectedType(event.target.value);
  };

  useEffect(() => {
    const filterProducts = () => {
      if (selectedType === "") {
        return products;
      } else {
        return products.filter((product) => product.type === selectedType);
      }
    };

    const updatedFilteredProducts = filterProducts();
    setFilteredProducts(updatedFilteredProducts);
  }, [selectedType, products]);

  return (
    <MDBContainer fluid className="text-center">
      <MDBRow style={{ justifyContent: "center" }}>
        <MDBCol>
          <FormControl>
          <InputLabel id="demo-simple-select-label">Kategorien</InputLabel>
            <Select
              value={selectedType}
              onChange={handleFilterChange}
              style={{
                marginTop: "-0.2rem",
       
                width: "8rem",
              }}
              label="Kategorien"
            >
              <MenuItem value="">Alle</MenuItem>
              {["Vegetables", "Mushrooms", "Herbs", "Fruits"].map((type) => (
                <MenuItem key={type} value={type}>
                  {type.charAt(0).toUpperCase() + type.slice(1)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </MDBCol>
      </MDBRow>
      <MDBRow
        className="mobile mt-5"
        style={{
          justifyContent: "center",
        }}
      >
        {filteredProducts.slice(0, visibleProducts).map((product, index) => (
          <MDBCol key={product.id}>
            <ProductItem className="card" product={product} />
          </MDBCol>
        ))}
      </MDBRow>
      {filteredProducts.length > visibleProducts && (
        <MDBRow className="mb-5">
          <MDBCol className="text-center">
            <button
              type="button"
              className="btn btn-light"
              data-mdb-ripple-color="dark"
              onClick={loadMoreProducts}
            >
              <i className="fas fa-angles-down fa-2x"></i>
            </button>
          </MDBCol>
        </MDBRow>
      )}
    </MDBContainer>
  );
}
