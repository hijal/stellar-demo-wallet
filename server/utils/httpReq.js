const axios = require('axios');

const sendRequest = (method, url, data = {}) => {
  return axios({
    method: method,
    url: url,
    data: data
  });
};

module.exports = sendRequest;
