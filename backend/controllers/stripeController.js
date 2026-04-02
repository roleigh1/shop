const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const { ProductsDB, Voucher, VoucherLink} = require("../models/models"); 
const moment = require("moment"); 
const inserController = require("./insertController");

const Decimal = require("decimal.js");
const YOUR_DOMAIN = "http://localhost:3000/#/";

let selectedDate = null;
let selectedLocation;
const calculateDiscountedPrice = async (voucherToken, totalAmount) => {
 try {
  const VoucherLink = await VoucherLink.findOne({
    where: {
      redeemToken: voucherToken 
    },
     attributes: ["id", "voucherId", "validityfrom","validitytill"]
  })
  if(!VoucherLink){
    return totalAmount; 
  }
  const dateToday = moment(); 
  const validityFrom = moment(VoucherLink.validityfrom);
  const validityTill = moment(VoucherLink.validitytill);

  if(dateToday.isBefore(validityFrom) || dateToday.isAfter(validityTill)){
    return totalAmount; 
  }
  const voucher = await Voucher.findOne({
    where: {
      id: VoucherLink.voucherId
    }, 
    attributes: ["id", "discountType", "discountValue", "maxredemptions", "currentredemptions"]
  })
  if(!voucher){
    return totalAmount;
  }
  if(Number(Voucher.currentredemptions) >= Number(voucher.maxredemptions)){
    return totalAmount; 
  }

 } catch (error) {
  console.error("Error calculating discounted price: ", error);
 }
}
const createCheckoutSession = async (req, res) => {
  try {
    const { cart, voucherToken } = req.body; 
    console.log(cart);
    console.log(voucherToken); 

    const selectLocation = req.body.selectLocation;
    let pickupdate = req.body.selectedDate;
    selectedDate = pickupdate.toString();

    selectedLocation = selectLocation;

    if (!cart) {
      return res.status(400).json({ error: " Cart not found" });
    }

    if (!selectLocation) {
      return res.status(400).json({ error: "Location not selected" });
    }
    if (!pickupdate) {
      return res.status(400).json({ error: `'Pickup Date not selected` });
    }
    console.log(selectedLocation);
    console.log(selectedDate);
    const cartDb = await ProductsDB.findAll({
      where: {
        id: cart.map((item) => item.id)
      },
      attributes: ["id", "price", "name", "sales"]
    })
    const cartData = cartDb.map(prod => prod.toJSON());
    const newCartWithQantity = cartData.map(item => {
      const product = cart.find(prod => prod.id === item.id);
      return {
        ...item,
        quantity: product ? product.quantity : 0
      }
    })

    const line_items = newCartWithQantity.map((item) => {
      const unitAmount = new Decimal(item.price).mul(100).toNumber();
      return {
        price_data: {
          currency: "eur",
          product_data: {
            name: item.name,
          },
          unit_amount: unitAmount,
        },
        quantity: item.quantity,
      };
    });
    console.log("line items", line_items);
    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: "payment",
      success_url: `${YOUR_DOMAIN}?success=true`,
      cancel_url: `${YOUR_DOMAIN}?canceled=true`,
    });
    res.json({ url: session.url });
  } catch (error) {
    console.error(`Error when creating the Checkout-Session `, error);
    return res.status(500).json({ error: error.message });
  }
};

const endpointSecret = process.env.ENDPOINT_SECRET;

const handleWebhook = async (request, response) => {
  const sig = request.headers["stripe-signature"];

  let event;
  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
    switch (event.type) {
      case "payment_intent.succeeded":
        console.log("payment successfull");

        break;

      case "checkout.session.completed":
        try {
          const session = event.data.object;
          const customerEmail = session.customer_details.email;
          const customerName = session.customer_details.name;
          const totalAmount = session.amount_total / 100;

          inserController.insertRecord(
            session,
            customerEmail,
            customerName,
            totalAmount,
            selectedLocation,
            selectedDate
          );
          console.log("inserted");
        } catch (error) {
          console.error("Error when inserting", error);
        }
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    response.json({ received: true });
  } catch (err) {
    response.status(400).send(`Webhook Error: ${err.message}`);
    console.error("Error", err);
  }
};

module.exports = { createCheckoutSession, handleWebhook };
