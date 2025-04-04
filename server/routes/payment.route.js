const { stripe } = require('../controllers/payment.controller');

const router = require('express').Router();

router.post("/", stripe);

module.exports = router;