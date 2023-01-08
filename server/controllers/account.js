const { default: axios } = require('axios');
const Stellar = require('stellar-sdk');
const server = new Stellar.Server(process.env.URL, {
  allowHttp: true
});
const sendRequest = require('../utils/httpReq');

class Account {
  secretKeyLogin(req, res, next) {
    const key = req.body.secretKey;
    if (!key) {
      throw new Error('secret key is missing.');
    }
    const publicKey = Stellar.Keypair.fromSecret(key).publicKey();
    res.json({
      publicKey
    });
  }

  generateKeyPair(req, res, next) {
    const keypair = Stellar.Keypair.random();
    res.json({
      publicKey: keypair.publicKey(),
      secretKey: keypair.secret()
    });
  }

  async accountDetails(req, res) {
    const { key } = req.query;
    if (!key) {
      throw new Error('Public key is missing.');
    }

    const acc = await server.loadAccount(key);
    res.json(acc);
  }

  async fundAccount(req, res, next) {
    const { publicKey } = req.body;
    if (!publicKey) {
      throw new Error('Public key is missing.');
    }
    const url = `${process.env.FRIENDBOT}/?addr=${publicKey}`;
    const result = await sendRequest('get', url);

    res.json(result);
  }
}

module.exports = new Account();
