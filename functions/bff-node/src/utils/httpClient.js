const axios = require("axios");

const httpClient = axios.create({
  validateStatus: () => true,
});

module.exports = httpClient;
