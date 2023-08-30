import React, {useState } from "react"; 
import {
    MDBContainer,
    MDBRow,
    MDBCol,
 

} from "mdb-react-ui-kit";
import ProductItem from "./ProductItem";


export default function ProductList({ products }) {
    const [selectedType, setSelectedType] = useState("");

    const filteredProducts = setSelectedType
    ? products.filter(product => product.type === selectedType)
    : products;
    const types = ["vegetables", "shroomes" , "berrys", "fruirt" , "herbs"]; 
    return (
        

        <MDBContainer fluid className="my-5 text-center d-flex justify-content-center ">
            <MDBRow className="mb-4">
                <MDBCol>
                    <select value={selectedType} onChange={e => setSelectedType(e.target.value)}>
                        <option value="">Alle</option>
                          {types.map(type => (
                            <option key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>
                          ))}
                    </select>
                </MDBCol>
            </MDBRow>
            <MDBRow className="mobile">
               
                {filteredProducts.map((product, index ) => (
                    <MDBCol key={product.id} md="6" lg="3" className={`mb-4 ${index >= products.length - 2 ? "center-card" : ""}`}>
                        <ProductItem className="card" product={product} />
                    </MDBCol>
                ))}
            </MDBRow>
        </MDBContainer>
    )
}