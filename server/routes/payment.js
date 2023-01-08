const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/payment');
const catchAsync = require('../utils/catchAsync');

router.post('/payment', catchAsync(paymentController.sendPayment));
// router.post('/create', catchAsync(accountController.generateKeyPair));
// router.post('/fund-account', catchAsync(accountController.fundAccount));
// router.get('/account/details', catchAsync(accountController.accountDetails));

module.exports = router;
