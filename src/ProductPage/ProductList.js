import React, { useState } from "react";
import {
    MDBContainer,
    MDBRow,
    MDBCol,


} from "mdb-react-ui-kit";
import ProductItem from "./ProductItem";
import "./style.css"


export default function ProductList({ products }) {
    const [selectedType, setSelectedType] = useState("");

    const filteredProducts = setSelectedType
        ? (selectedType === "" ? products.filter(product => product.subtype === "all") : products.filter(product => product.type === selectedType)) : products;
    
        const types = ["vegetables", "shroomes", "berrys", "fruit", "herbs"];
    return (
        	

        <MDBContainer fluid className=" text-center ">
            <MDBRow style={{}}>
                <MDBCol style={{border:"1px solid rgba(0, 0, 0, 0.3)", marginTop:"-1rem",height:"3rem", display:"flex", flexDirection:"column", }}>
                    <p style={{position:"relative",top:"0.3rem"}}><strong>Categorys:</strong></p>
                    <select  value={selectedType} style={{marginTop:"-0.2rem" , borderRadius:"0", border:"1px solid rgba(0, 0, 0, 0.3)",backgroundColor:"white"}} onChange={e => setSelectedType(e.target.value)}>
                        <option style={{}} value="">All</option>
                        {types.map(type => (
                            <option key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>
                        ))}
                    </select>
                </MDBCol>
            </MDBRow>
            <MDBRow className="mobile mt-5  " style={{display:"flex", justifyContent:"center"}}>

                {filteredProducts.map((product, index) => (
                    <MDBCol key={product.id} md="6" lg="2"  className={`mb-4 mobile-col ${index >= products.length - 2 ? "center-card" : ""}`}>
                        <ProductItem className="card  " style={{}} product={product} />
                    </MDBCol>
                ))}
            </MDBRow>
        </MDBContainer>
    )
}