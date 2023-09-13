const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");
const Stripe = require("stripe");

const stripe = new Stripe("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");
const app = express();
const endpointSecret = "";

app.use(cors());
app.use(bodyParser.json());

app.post("/create-checkout-session", async (req, res) => {
    const { price } = req.body;
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: [{
            price_data: {
                currency: "eur",
                product_data: {
                    name: "Meine Artikel",
                },
                unit_amount: price * 100,
            },
            quantity: 1,
        }],
        mode: "payment",
        success_url: "http://localhost:3000/success",
        cancel_url: "http://localhost:3000/cancel",
    });

    res.json({ id: session.id });
});

app.post("/webhook", express.raw({ type: "application/json" }), async (req, res) => {
    let event;
    try {
        event = stripe.webhooks.constructEvent(
            req.body,
            req.headers["stripe-signature"],
            "whsec_91c9d54c6ad7e73607868c34061ec1182e340c9155571f9104ab9902b2a7319b"
        );
    } catch (err) {
        return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    if (event.type === "checkout.session.completed") {
        const session = event.data.object;
        sendEmail(session);
    }

    res.status(200).send();
});

const sendEmail = async (session, formData) => {
    const { customer_details } = session;

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "robinl.leitner1@gmail.com",
            pass: "ogfrnhdavsdeepjt",
        },
    });

    await transporter.sendMail({
        from: "robinl.leitner1@gmail.com",
        to: customer_details.email,
        subject: "Bestellung",
        text: `Hallo ${formData.name}, danke für Ihre Bestellung. Warenkorb: ${JSON.stringify(formData.cart)}. Gesamtwert: ${formData.totalValue}. Datum: ${formData.date}.`
    });

    await transporter.sendMail({
        from: "robinl.leitner1@gmail.com",
        to: "robinl.leitner1@gmail.com",
        subject: "Neue Bestellung",
        text: `Name: ${formData.name}. E-Mail: ${customer_details.email}. Nachricht: ${formData.message}. Datum: ${formData.date}. Nummer: ${formData.number}. Warenkorb: ${JSON.stringify(formData.cart)}. Gesamtwert: ${formData.totalValue}.`
    });
};

app.listen(5000, () => {
    console.log("Server läuft auf Port 5000");
});
