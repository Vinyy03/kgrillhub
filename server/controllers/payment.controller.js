const Stripe = require('stripe')(process.env.STRIPE_SECRET);

const stripe = (req, res) => {
    Stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: "usd",
        }, (error, res) => {
            if (error) {
            res.status(500).json({
                message: "Error creating charge",
                error: error.message,
            });
        } else {
            res.status(200).json({
                message: "Charge created successfully",
                charge: res,
            });
        }    
        }
    );
};


module.exports = {
    stripe,
};