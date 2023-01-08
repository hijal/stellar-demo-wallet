const Stellar = require('stellar-sdk');
const { URL } = require('../config/config');
const server = new Stellar.Server(URL, {
  allowHttp: true
});

class Payment {
  sendPayment(req, res, next) {
    res.json(req.body);
  }
}

module.exports = new Payment();
