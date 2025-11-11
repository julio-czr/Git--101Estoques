const express = require("express");
const cors = require("cors");
const estoqueRouter = require("./features/estoque");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.get("/", (req, res) => res.json({ status: "Microserviço Estoques OK", timestamp: new Date() }));

// monta o vertical slice em /estoques
app.use("", estoqueRouter);

module.exports = app;
