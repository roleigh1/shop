import React, { useState } from "react";
import { useCart } from "../CartContext";
import { Row, Col } from "react-bootstrap";
import Input from '@mui/joy/Input'
import TextField from '@mui/material/TextField';
import "./styles.css"

function getNextDateByDay(dayOfWeek, currentDate = new Date()) {
    const resultDate = new Date(currentDate);
    resultDate.setDate(currentDate.getDate() + (7 + dayOfWeek - currentDate.getDay()) % 7);
    return resultDate;
}

function formatDate(date) {
    return date.toISOString().split('T')[0];
}


export default function Total() {
    const { totalValue, cart } = useCart();
    const [status, setStatus] = useState("Pay"); 

    const handleSending = async (e) => {
        e.preventDefault();
        setStatus("Sending...");
        const { name, email, message, date, number } = e.target.elements;
        let details = {
         name: name.value,
         email: email.value,
         message: message.value, 
         date: date.value,
         number: number.value,
         cart: cart,
         totalValue: totalValue
        };
        
      
        let response = await fetch("http://localhost:5000/checkout", {
            method: "POST",
            headers: {
            "Content-Type": "application/json;charset=utf-8",
            },
            body: JSON.stringify(details),
        });
        setStatus("Submit");
        let result = await response.json();
        alert(result.status);
    };
    


    const nextFriday = formatDate(getNextDateByDay(5));
    const nextSaturday = formatDate(getNextDateByDay(6));

    
    const [selectedDate, setSelectedDate] = useState(formatDate(new Date()));

    return (
        <div>

            <hr />
            <Row>
                <Col xs={12} md={6} className="center-on-mobile" style={{ display: "flex",justifyContent:"center"}}>

                    <form onSubmit={handleSending} style={{ display: "flex", flexDirection: "column",  gap:"1rem"}}>
                        
                            <h2  className="text-center">Contact details</h2>
                            <div className="inputWrapper">
                                <TextField name="name" label="Name" required className="name " />
                            </div>
                    
                            <div className="inputWrapper">
                                <TextField name="number" label="number" required className="number" />
                            </div>
                            <div className="inputWrapper">
                                <TextField name="email" label="Email" required className="mail " />
                            </div>
                            <div className="inputWrapper">
                                <TextField name="message" label="message" multiline style={{ width: "14rem" }}
                                    rows={2} required className="message " />
                            </div>
                            <div style={{  }}>
                                <h5 className="text-center">Select a pickup Date </h5>
                                <Input
                                    className="date"
                                    style={{ width: "8rem", margin: "0 auto"}}
                                    type="date"
                                    name="date"
                                    value={selectedDate}
                                    onChange={(e) => setSelectedDate(e.target.value)}
                                    slotProps={{
                                        input: {
                                            min: nextFriday,
                                            max: nextSaturday,
                                        },
                                    }}
                                />
                            </div>
                            <button  className="btn btn-danger">{status}</button>
                    </form>

                </Col>

                <Col xs={12} md={6} style={{ display: "flex", justifyContent: "center" }}>


                    <div style={{ marginTop: "3rem", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", height: "25rem", width: "15rem", textAlign: "center" }}>
                        <h5 className="mt-5">The Total amount</h5>
                        

                        <p> The total amout of (including VAT) € {totalValue}</p>
                        <hr />
                       
                        <hr />
                        <div>
                            <TextField name="voucher" label="voucher" className="voucher"></TextField>
                        </div>
                    </div>
                </Col>
            </Row>
            <hr />
        </div >
    )
}
