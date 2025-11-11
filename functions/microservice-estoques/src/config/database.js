const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;


    if (!uri) {
      throw new Error("❌ A variável de ambiente MONGODB_URI não foi definida.");
    }

    const conn = await mongoose.connect(uri);

    console.log(`✅ MongoDB conectado com sucesso: ${conn.connection.host}`);
  } catch (error) {
    console.error(`❌ Erro ao conectar ao MongoDB: ${error.message}`);
    process.exit(1);
  }
};

module.exports = connectDB;
