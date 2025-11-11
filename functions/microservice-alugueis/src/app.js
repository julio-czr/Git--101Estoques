const express = require("express");
const cors = require("cors");
const aluguelRouter = require("./features/aluguel");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// rota de saúde simples
// app.get("/", (req, res) => res.json({ status: "Microserviço Aluguéis OK", timestamp: new Date() }));

// monta o vertical slice de alugueis em /alugueis
app.use("", aluguelRouter);

module.exports = app;
