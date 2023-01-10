const { default: axios } = require('axios');
const Stellar = require('stellar-sdk');
const { URL, FRIENDBOT } = require('../config/config');

const server = new Stellar.Server(URL, {
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
      return res.json({ error: error.message });
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
      return res.json({ error: error.message });
    }
  }

  async acDetails(req, res, next) {
    const { key } = req.query;
    if (!key) {
      throw new Error('Public key is missing.');
    }
    try {
      const acc = await server.loadAccount(key);
      return res.json(acc);
    } catch (error) {
      return res.json({ error: error.message });
    }
  }

  async fundAccount(req, res, next) {
    const { publicKey } = req.body;
    if (!publicKey) {
      throw new Error('Public key is missing.');
    }
    try {
      const result = await axios.get(
        `https://friendbot.stellar.org/?addr=${publicKey}`
      );
      return res.json(result);
    } catch (error) {
      return res.json({ error: error.message });
    }
  }
  async addTrustLine(req, res, next) {
    const { key, code, issuer } = req.body;
    if (!key || !code || !issuer) {
      return res.json({
        error: 'Required fields are missing'
      });
    }
    try {
      const keypair = Stellar.Keypair.fromSecret(key);
      const account = await server.loadAccount(keypair.publicKey());
      const asset = new Stellar.Asset(code, issuer);
      const transaction = new Stellar.TransactionBuilder(account, {
        fee: await server.fetchBaseFee(),
        networkPassphrase: Stellar.Networks.TESTNET
      })
        .addOperation(Stellar.Operation.changeTrust({ asset }))
        .setTimeout(180)
        .build();

      transaction.sign(keypair);
      const result = await server.submitTransaction(transaction);
      return res.json(result);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }

  async accountDetails(req, res, next) {}
}

module.exports = new Account();
