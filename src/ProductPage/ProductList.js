import React, { useState } from "react";
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBBtn
} from "mdb-react-ui-kit";
import ProductItem from "./ProductItem";
import "./style.css"

export default function ProductList({ products }) {
    const [selectedType, setSelectedType] = useState("");
    const [visibleProducts, setVisibleProducts] = useState(6)
    let filteredProducts;

    if (selectedType === "") {
        filteredProducts = [...products]; 
        
        const typesOrder = ["vegetables", "fruit", "berrys", "herbs", "shroomes"];
        filteredProducts.sort((a, b) => typesOrder.indexOf(a.type) - typesOrder.indexOf(b.type));
    } else {
        filteredProducts = products.filter(product => product.type === selectedType);
    }
    const loadMoreProducts = () => {
        setVisibleProducts(prevCount => prevCount + 6);
    }
    return (
        <MDBContainer fluid className=" text-center ">
            <MDBRow>
                <MDBCol style={{ border: "1px solid rgba(0, 0, 0, 0.3)", marginTop: "-1rem", height: "3rem", display: "flex", flexDirection: "column", }}>
                    <p style={{ position: "relative", top: "0.3rem" }}><strong>Categorys:</strong></p>
                    <select value={selectedType} style={{ marginTop: "-0.2rem", borderRadius: "0", border: "1px solid rgba(0, 0, 0, 0.3)", backgroundColor: "white" }} onChange={e => setSelectedType(e.target.value)}>
                        <option value="">All</option>
                        {["vegetables", "shroomes", "berrys", "fruit", "herbs"].map(type => (
                            <option key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>
                        ))}
                    </select>
                </MDBCol>
            </MDBRow>
            <MDBRow className="mobile mt-5" style={{ display: "flex", justifyContent: "center" }}>
                {filteredProducts.slice(0, visibleProducts).map((product, index) => (
                    <MDBCol key={product.id} md="6" lg="2" className={`mb-4 mobile-col ${index >= products.length - 2 ? "center-card" : ""}`}>
                        <ProductItem className="card" product={product} />
                    </MDBCol>
                ))}
            </MDBRow>
            {filteredProducts.length > visibleProducts && (
                <MDBRow className="mt-4">
                    <MDBCol className="text-center">
                        <MDBBtn onClick={loadMoreProducts}>See more</MDBBtn>
                    </MDBCol>
                </MDBRow>
            )}
        </MDBContainer>
    )
}
