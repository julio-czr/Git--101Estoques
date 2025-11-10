const axios = require('axios');

function createClient(envName, fallback) {
  const base = process.env[envName] || fallback;
  if (!base) {
    console.error(`[api.service] ${envName} não configurada.`);
    return new Proxy({}, { get: () => () => { throw new Error(`${envName} not configured`); } });
  }
  return axios.create({
    baseURL: base,
    timeout: 8000,        // 8s
    maxRedirects: 5,      // evita loops de redirect
  });
}

const alugueisApi = createClient('ALUGUEIS_API_URL', '/api/alugueis/');
module.exports = { alugueisApi };
