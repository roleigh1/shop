// BestSeller1.js
import React, { useState } from "react";

import 'bootstrap/dist/css/bootstrap.css';

import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRipple,
} from "mdb-react-ui-kit";
import Button from '@mui/joy/Button';
import Add from '@mui/icons-material/Add';


export default function BestSeller1() {
   const [inputValue, setInputValue] = useState('');
   const handleInputChange = (event) => {
    const value = event.target.value;
     setInputValue(value);
   };
   const result = Number(inputValue) * 2.99; 

    return (
        <MDBContainer fluid className="my-5 text-center">

            <MDBRow>
                <MDBCol md='12' lg='7' className="mb-4">
                    <MDBCard style={{ height: '23rem' }}>
                        <MDBRipple
                            rippleColor="light"
                            rippleTag='div'
                            className="w-40"
                        >
                            <MDBCardImage
                                src="https://i.ibb.co/Zm29fjS/peach-gbead77ccb-640.jpg"
                                fluid
                                className="w-100 "
                                style={{ height: '6.5rem' }}
                            />
                            <a href="#!">
                                <div className="mask">
                                    <div className="d-flex justify-content algin-items-end h-100">
                                        <h5>
                                            <span className="badge bg-primary ms-2">New</span>
                                        </h5>
                                    </div>
                                </div>
                                <div className="hover-overlay">
                                    <div className="mask"
                                        style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}></div>
                                </div>
                            </a>
                        </MDBRipple>
                        <MDBCardBody>
                            <a href="#!" className="text-reset">
                                <h5 className="card-title mb-2"> Peaches</h5>
                            </a>
                            <a href="#!" className="text-reset">
                                <p style={{ position: 'relative', bottom: '4px' }}>Fruits</p>
                            </a>
                            <h6 className="mb-3" style={{ position: 'relative', bottom: '1rem' }}>€2.99/kg</h6>
                            <div style={{ textAlign: 'center' }}>
 
  <div style={{ display: 'flex', flexDirection:'column',  }}>
  <span className="Sum " style={{ display: Number(inputValue) > 0 ? 'block' : 'none' }}>{result.toFixed(2)}</span>
   <input id="inputValue" onChange={handleInputChange} value={inputValue} style={{ width: '2.5rem', textAlign: 'center', border: 'none', position:'relative',left:'2.5rem' }} type="number"></input>
   
  </div>
</div>
                            <Button style={{ marginBottom: '2em', marginTop: '1rem' }} startDecorator={<Add />}>Add to cart</Button>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}
