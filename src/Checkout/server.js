const stripe = require('stripe')('sk_test_51NpahnKW38JNXmg0k5GZ56wkE44G9ldI0xZMvm2NHuIbQP8WM7IdvsRKg2oAIpnySrB24bKclSj0H6DGsMQUmWPa00uwWcvMJv');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(cors());

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

const endpointSecret = "whsec_91c9d54c6ad7e73607868c34061ec1182e340c9155571f9104ab9902b2a7319b";

app.post('/webhook', express.raw({type: 'application/json'}), (request, response) => {
  const sig = request.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
  } catch (err) {
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const checkoutSessionCompleted = event.data.object;
      console.log("payment successfull")
      // Then define and call a function to handle the event checkout.session.completed
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  response.send();
});


app.get('/', (req, res) => {
  res.send('Willkommen zu meinem Express-Server!');
});

app.listen(4242, () => console.log('Running on port 4242'));
