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


app.listen(4242, () => console.log('Running on port 4242'));
