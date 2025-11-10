const functions = require('firebase-functions');
const app = require('./src/index'); // seu Express app

// Log para verificar se o BFF foi carregado
console.log("✅ BFF Node.js carregado e pronto para receber requisições");

// Exporta o Express app como função do Firebase
exports.bff = functions.https.onRequest(app);