import React , { useState } from "react";
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
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
    }

    const result = Number(inputValue) * 1;
    return (
        <MDBContainer fluid   className="my-5 text-center">

            <MDBRow >
                <MDBCol md='12' lg='7' className="mb-4">
                    <MDBCard style={{ height: '23rem',width:'10rem' }}>
                        <MDBRipple
                            rippleColor="light"
                            rippleTag='div'
                            className="w-100 photo"
                        >
                            <MDBCardImage
                                src="https://i.ibb.co/D7bBy1Q/bell-peppers-gc3855d807-640.jpg"
                                fluid
                                className="w-100"
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
                        <MDBCardBody style={{ height: '300px', overflow: 'hidden' }}>
                            <a href="#!" className="text-reset">
                                <h5 className="card-title  mb-3">Paprika</h5>
                            </a>
                            <a href="#!" className="text-reset">
                                <p style={{ position: 'relative', bottom: '12px' }}>vegetables</p>
                            </a>

                            <h6 className="mb-4" style={{ position: 'relative', bottom: '1.4rem' }}>  €0.60/3pcs</h6>
                            <div style={{ display: 'flex', flexDirection: 'column', }}>
                                <span className="Sum " style={{ visibility: Number(inputValue) > 0 ? 'visible' : 'hidden', position: 'relative', bottom: '16px' }}>{result.toFixed(2)}€</span>

                                <input  id="inputValue" onChange={handleInputChange} value={inputValue} style={{width:'2.8rem', textAlign:'center', border:'none',display:'block',margin:'0 auto', position:'relative', bottom:'12px' }} type="number"></input>

                            </div>
                            <Button style={{  }} startDecorator={<Add />}>Add to cart</Button>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}