const stripe = require('stripe')('sk_test_51NpahnKW38JNXmg0k5GZ56wkE44G9ldI0xZMvm2NHuIbQP8WM7IdvsRKg2oAIpnySrB24bKclSj0H6DGsMQUmWPa00uwWcvMJv');
const express = require('express');
const bodyParser = require('body-parser');
const endpointSecret = "whsec_91c9d54c6ad7e73607868c34061ec1182e340c9155571f9104ab9902b2a7319b";

const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());

const YOUR_DOMAIN = 'http://localhost:3000';

app.post('/create-checkout-session', async (req, res) => {
  try {
    const warenkorb = req.body.warenkorb;

    if (!warenkorb) {
      return res.status(400).json({ error: 'Warenkorb nicht gefunden' });
    }

    const line_items = warenkorb.map(item => {
      return {
        price_data: {
          currency: 'eur',
          product_data: {
            name: item.name
          },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity
      };
    });

    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: 'payment',
      success_url: `${YOUR_DOMAIN}?success=true`,
      cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    });

    res.json({ url: session.url });
  } catch (error) {
    console.error("Fehler beim Erstellen der Checkout-Session:", error);
    res.status(500).json({ error: 'Interner Serverfehler' });
  }
});

app.post("/stripe-webhook",bodyParser.raw({type: "application/json"}), (req, res) => {
  const sig = req.headers["stripe-signature"];

  let event; 

  try{
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret)
  } catch (error){
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }
  if (event.type === "checkout.session.completed") {
    const session = event.data.object;

    console.log("test")
  
  
  }

  res.status(200).send("Success");
})

app.listen(4242, () => console.log('Running on port 4242'));
