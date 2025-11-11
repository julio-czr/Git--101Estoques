const {Sequelize} = require("sequelize");

// Cria a instância do Sequelize
const sequelize = new Sequelize(
    process.env.DB_NAME, // nome do banco
    process.env.DB_USER, // usuário
    process.env.DB_PASSWORD, // senha
    {
      host: process.env.DB_HOST || "localhost", // host do banco
      port: process.env.DB_PORT, // porta (MySQL padrão)
      dialect: "mysql", // dialeto: 'mysql', 'postgres', 'mssql' etc.
      logging: false, // desativa logs do SQL
    },
);

// Função para conectar
const connectDB = async () => {
  try {
    await sequelize.authenticate();
    await sequelize.sync(); // sincroniza modelos com o banco
    console.log("✅ Banco de dados conectado com sucesso");
  } catch (error) {
    console.error("❌ Erro ao conectar ao banco de dados FreeHostia:", error.message);
    process.exit(1);
  }
};

module.exports = {sequelize, connectDB};
