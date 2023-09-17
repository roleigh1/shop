const express = require('express');
const app = express();
const stripe = require("stripe")("sk_test_51NpahnKW38JNXmg0k5GZ56wkE44G9ldI0xZMvm2NHuIbQP8WM7IdvsRKg2oAIpnySrB24bKclSj0H6DGsMQUmWPa00uwWcvMJvnod");

app.post("/create-checkout-session", async (req, res) => {
    try {
        const { items } = req.body;

        const line_items = transformItemsForStripe(items);

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items,
            mode: "payment",
            success_url: "YOUR_SUCCESS_URL",
            cancel_url: "YOUR_CANCEL_URL"
        });

        res.json({ id: session.id });

    } catch (error) {
        res.status(500).json({ error: "Stripe checkout session creation failed" });
    }
});

function transformItemsForStripe(items) {
    return items.map(item => ({
        price_data: {
            currency: "eur",
            product_data: {
                name: item.name
            },
            unit_amount: item.price * 100 
        },
        quantity: item.quantity
    }));
}
const PORT = 3000;  // Oder welchen Port Sie bevorzugen
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});