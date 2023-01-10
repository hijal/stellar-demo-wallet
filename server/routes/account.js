const express = require('express');
const router = express.Router();
const accountController = require('../controllers/account');
const catchAsync = require('../utils/catchAsync');

router.post('/secret', catchAsync(accountController.secretKeyLogin));
router.post('/create', catchAsync(accountController.generateKeyPair));
router.post('/fund-account', catchAsync(accountController.fundAccount));
router.get('/account/details', catchAsync(accountController.acDetails));
router.post('/add-trustline', catchAsync(accountController.addTrustLine));

module.exports = router;
