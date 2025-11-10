require('dotenv').config();
const app = require('./src/app');
const { connectDB } = require('./src/config/database');

// Conecta ao banco (uma vez)
(async () => {
  await connectDB();
  console.log("✅ Banco conectado (microservice-alugueis)");
})();

// Exporta o app Express para o Firebase servir
module.exports = app;