const express = require("express"); 
const bodyParser = require("body-parser"); // Hier "body-parser" statt "body"
const nodemailer = require("nodemailer");



const app = express();
const port = 5000; 

const cors = require('cors');
app.use(cors());
app.use(bodyParser.json());

app.post("/checkout", async (req,res) => {
    let { name, email, message, date, number, cart, totalValue } = req.body;

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "robinl.leitner1@gmail.com",
            pass: ""
        }
    });

    await transporter.sendMail({
        from: "robinl.leitner1@gmail.com",
        to: email,
        subject: "Bestellung", 
        text: `Hallo ${name}, danke für Ihre Bestellung. Warenkorb: ${JSON.stringify(cart)}. Gesamtwert: ${totalValue}. Datum: ${date}.`
    });
    
    await transporter.sendMail({
        from: "robinl.leitner1@gmail.com", 
        to: "robinl.leitner1@gmail.com", 
        subject: "Neue Bestellung",
        text: `Name: ${name}. E-Mail: ${email}. Nachricht: ${message}. Datum: ${date}. Nummer: ${number}. Warenkorb: ${JSON.stringify(cart)}. Gesamtwert: ${totalValue}.`
    });

    res.json({ status: "Emails sent" });
});

app.listen(port, () => {
    console.log(`server running on http://localhost:5000/`); 
});
