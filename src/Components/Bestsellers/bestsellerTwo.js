import React from "react";
import {
  MDBContainer,
  MDBRow,  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRipple,
} from "mdb-react-ui-kit";
import Button from '@mui/joy/Button';
import Add from '@mui/icons-material/Add';
export default function BestSeller2() {
    return (
        <MDBContainer fluid className="my-5 text-center">
            <MDBRow >
                <MDBCol   md='12' lg='7' className="mb-4">
                    <MDBCard  style={{height: '23rem'}}>
                        <MDBRipple
                        rippleColor="light"
                        rippleTag='div'
                        className="w-100 "
                       
                        >
                        <MDBCardImage
                        src="https://i.ibb.co/S6sK3C7/strawberries-g91324ddda-640.jpg"
                        fluid
                        className="w-100" 
                        style={{height:'7.2rem'}}
                        
                        />
                        <a href="#!">
                            <div className="mask">
                                <div className="d-flex justify-content algin-items-end h-100">
                                    <h5>
                                        <span className="badge bg-success ms-2">Bio</span>
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
                            <h5 className="card-title mb-2">Strawberrys</h5>
                         </a>
                         <a href="#!" className="text-reset">
                            <p>Fruits</p>
                         </a>
                         <h6 className="mb-4">1 kg / €4.99</h6>
                         <input style={{width:'3rem', textAlign:'center', border:'none'}} type="number"></input><span> /kg</span>
                         <Button  style={{marginBottom:'2rem', marginTop:'1rem'}}  startDecorator={<Add />}>Add to cart</Button>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}