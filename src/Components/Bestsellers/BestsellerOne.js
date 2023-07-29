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
export default function BestSeller1() {
    return (
        <MDBContainer fluid className="my-5 text-center">
         
            <MDBRow>
                <MDBCol md='12' lg='4' className="mb-4">
                    <MDBCard>
                        <MDBRipple
                        rippleColor="light"
                        rippleTag='div'
                        className="w-40"
                        >
                        <MDBCardImage
                        src="https://i.ibb.co/Zm29fjS/peach-gbead77ccb-640.jpg"
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
                            <h5 className="card-title mb-3">Saturn peach</h5>
                         </a>
                         <a href="#!" className="text-reset">
                            <p>Fruits</p>
                         </a>
                         <h6 className="mb-3">1 kg / €2.99</h6>
                         <Button startDecorator={<Add />}>Add to cart</Button>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}