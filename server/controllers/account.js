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
    try {
      return res.json({
        publicKey
      });
    } catch (error) {
      return res.json(error);
    }
  }

  generateKeyPair(req, res, next) {
    const keypair = Stellar.Keypair.random();
    try {
      return res.json({
        publicKey: keypair.publicKey(),
        secretKey: keypair.secret()
      });
    } catch (error) {
      return res.json(error);
    }
  }

  async accountDetails(req, res) {
    const { key } = req.query;
    if (!key) {
      throw new Error('Public key is missing.');
    }

    try {
      const acc = await server.loadAccount(key);
      return res.json(acc);
    } catch (error) {
      return res.json(error);
    }
  }

  async fundAccount(req, res, next) {
    const { publicKey } = req.body;
    if (!publicKey) {
      throw new Error('Public key is missing.');
    }
    const url = `${process.env.FRIENDBOT}/?addr=${publicKey}`;
    try {
      const result = await sendRequest('get', url);
      return res.json(result);
    } catch (error) {
      return res.json(error);
    }
  }
}

module.exports = new Account();
