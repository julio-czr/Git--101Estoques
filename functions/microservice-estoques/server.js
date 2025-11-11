require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./src/config/database");

const PORT = process.env.PORT || 3001;

// Conectar ao banco
(async () => {
  await connectDB();
  console.log("✅ Banco conectado (microservice-estoques)");
})();

// Se estiver rodando localmente (node server.js)
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`🚀 Microserviço Estoques rodando localmente na porta ${PORT}`);
  });
}

// Exporta o app para o Firebase Functions
module.exports = app;
