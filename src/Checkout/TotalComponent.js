import React, { useState } from "react";
import { useCart } from "../CartContext";
import { Row, Col } from "react-bootstrap";
import Input from '@mui/joy/Input'
import TextField from '@mui/material/TextField';

function getNextDateByDay(dayOfWeek, currentDate = new Date()) {
    const resultDate = new Date(currentDate);
    resultDate.setDate(currentDate.getDate() + (7 + dayOfWeek - currentDate.getDay()) % 7);
    return resultDate;
}

function formatDate(date) {
    return date.toISOString().split('T')[0];
}


export default function Total() {
    const { totalValue } = useCart();

    const nextFriday = formatDate(getNextDateByDay(5));
    const nextSaturday = formatDate(getNextDateByDay(6));

    // Zustand für das ausgewählte Datum
    const [selectedDate, setSelectedDate] = useState(formatDate(new Date()));

    return (
        <div>
            <h2>Contact details</h2>
            <hr />
            <Row>
                <Col >
                    <form style={{ display: "flex", justifyContent: "flex-start", flexDirection: "column", gap: "1rem" }}>

                        <div className="inputWrapper">
                            <TextField name="name" label="Name" required className="name w-50" />
                        </div>
                        <div className="inputWrapper">
                            <TextField label="Last Name" required className="name w-50" />
                        </div>
                        <div className="inputWrapper">
                            <TextField name="number " label="number" required className="date w-50" />
                        </div>
                        <div className="inputWrapper">
                            <TextField name="email" label="Email" required className="date w-50" />
                        </div>
                        <div className="inputWrapper">
                            <TextField name="message" label="message" multiline
                                rows={2} required className="date w-50" />
                        </div>
                        <div style={{ marginLeft: "3.5rem" }}>
                            <h5 className="">Select a pickup Date </h5>
                            <Input

                                className="w-25"
                                type="date"
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
                    </form>

                </Col>

                <Col >


                    <div>
                        <h5>The Total amount</h5>
                        <span>{totalValue}</span>
                    </div>
                </Col>
            </Row>
            <hr />
        </div >
    )
}
