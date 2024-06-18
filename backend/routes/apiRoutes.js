 

const stripeController = require("../controllers/stripeController"); 
const fetchData = require("../controllers/dataFetchControllers");
const bodyParser = require('body-parser');
const emailSevices = require("../controllers/emailService"); 
const express = require("express")
const router = express.Router(); 


router.get('/content/:whichContent' , fetchData.getContent); 
router.post('/create-checkout-session', bodyParser.json(),stripeController.createCheckoutSession);
router.post('/webhook', express.raw({type: 'application/json'}), stripeController.handleWebhook);
router.post("/contact", express.json(),emailSevices.sendContactMail);
module.exports = router;