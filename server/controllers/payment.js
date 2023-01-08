const Stellar = require('stellar-sdk');
const server = new Stellar.Server(process.env.URL, {
  allowHttp: true
});

class Payment {
  sendPayment(req, res, next) {
    res.json(req.body);
  }
}

module.exports = new Payment();
