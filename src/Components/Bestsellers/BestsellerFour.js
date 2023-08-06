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
export default function BestSeller4() {
    return (
        <MDBContainer fluid className="my-5 text-center">
            <MDBRow >
                <MDBCol md='12' lg='7' className="mb-4">
                    <MDBCard  style={{height: '23rem'}}>
                        <MDBRipple
                        rippleColor="light"
                        rippleTag='div'
                        className="w-100 "
                        >
                        <MDBCardImage
                        src="https://i.ibb.co/p0QrGTJ/eggplant-gbd2ba8a1c-640.jpg"
                        className="w-100" 
                        fluid
                        style={{height:'6.5rem'}}
                        />
                        <a href="#!">
                            <div className="mask">
                                <div className="d-flex justify-content-center algin-items-end h-100">
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
                            <h5 className="card-title">Eggplant</h5>
                         </a>
                         <a href="#!" className="text-reset">
                            <p  style={{position:'relative',bottom:'4px'}}>Vegetables</p>
                         </a>
                         <h6 className="mb-4" style={{position:'relative',bottom:'0.9rem'}}> €3.50 /kg</h6>
                         <input style={{width:'3rem', textAlign:'center', border:'none',position:'relative', bottom:'0.4rem'}} type="number"></input><span style={{position:'relative', bottom:'0.6rem'}}> /kg</span>

                         <Button  style={{marginTop:'0.5rem'}}  startDecorator={<Add />}>Add to cart</Button>
                        
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}