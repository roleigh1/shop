import React , { useState } from "react";
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
    const [inputValue, setInputValue] = useState('');
    const handleInputChange = (event) => {
     const value = event.target.value;
      setInputValue(value);
    };
    const result = Number(inputValue) * 3.50; 
    return (
        <MDBContainer fluid className="my-5 text-center">
            <MDBRow >
                <MDBCol md='12' lg='7' className="mb-4">
                    <MDBCard  style={{height: '23rem', width:'10rem'}}>
                        <MDBRipple
                        rippleColor="light"
                        rippleTag='div'
                        className="w-100 "
                        >
                        <MDBCardImage
                        src="https://i.ibb.co/p0QrGTJ/eggplant-gbd2ba8a1c-640.jpg"
                        className="w-100" 
                        fluid
                        style={{height:'5.86rem'}}
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
                         <div style={{ display: 'flex', flexDirection:'column',  }}>
                         <span className="Sum " style={{ visibility: Number(inputValue) > 0 ? 'visible': 'hidden' ,position:'relative',bottom:'5px' }}>{result.toFixed(2)}€</span>
    
                         <input  id="inputValue" onChange={handleInputChange} value={inputValue} style={{width:'2.8rem', textAlign:'center',display:'block',margin:'0 auto',position:'relative',bottom:'5px'}} type="number"></input>
                         
                         
                         </div>
                         <Button style={{ marginTop:'6.9px'}} startDecorator={<Add />}>Add to cart</Button>
                        
                        
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    )
}