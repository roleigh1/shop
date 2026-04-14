const emailService = require('./emailService');
const { Order, ProductsDB, Op } = require('../models/models');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


async function insertRecord(session, customerEmail, customerName, totalAmount, selectedLocation, selectedDate) {
    try {

        stripe.checkout.sessions.listLineItems(session.id, async function (err, lineItems) {
            if (err) {
                console.error("Error retrieving line items:", err);
            } else {
                const itemsDescription = lineItems.data.map(item => `${item.description}:${item.quantity}`).join(", ");
                const mysqlFormattedDate = new Date(selectedDate).toISOString().split('T')[0];
                const itemsCart = lineItems.data.map(item => ({
                    name: item.description,
                    quantity: item.quantity
                }));

                for (const item of itemsCart) {
                    await ProductsDB.increment(
                        { sales: item.quantity },
                        {
                            where: { name: item.name }
                        }
                    ); 
                }

                const order = await Order.create({
                    email: customerEmail,
                    item: itemsDescription,
                    total: totalAmount,
                    pickupdate: mysqlFormattedDate,
                    location: selectedLocation
                });

                emailService.sendConfirmationEmail(customerEmail, order, lineItems);

            }
        });
    } catch (error) {
        console.error('Error when inserting', error);
    }
}


module.exports = { insertRecord };
