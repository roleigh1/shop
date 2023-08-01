import React from "react";
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

export default function BestSeller3() {
    return (
        <MDBContainer fluid className="my-5 text-center">
         
            <MDBRow >
                <MDBCol md='12' lg='7' className="mb-4">
                    <MDBCard>
                        <MDBRipple
                        rippleColor="light"
                        rippleTag='div'
                        className="w-100"
                        >
                        <MDBCardImage
                        src="https://i.ibb.co/D7bBy1Q/bell-peppers-gc3855d807-640.jpg"
                        fluid
                        className="w-100"
                        
                         
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
                                style={{backgroundColor: "rgba(251, 251, 251, 0.15)"}}></div>
                            </div>

                        </a>
                        </MDBRipple>
                        <MDBCardBody>
                         <a href="#!" className="text-reset">
                            <h5 className="card-title mt-3 mb-3">Paprika</h5>
                         </a>
                         <a href="#!" className="text-reset">
                            <p>vegetables</p>
                         </a>
                         <h6 > 3 pcs / €2.00</h6>
                         <Button style={{marginBottom:'2rem'}} startDecorator={<Add />}>Add to cart</Button>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}