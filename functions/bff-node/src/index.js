const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
app.use(cors());
app.use(express.json());

// Detecta ambiente
const isLocal = process.env.FUNCTIONS_EMULATOR === "true";
const project = process.env.GCLOUD_PROJECT || "seu-projeto"; // Firebase define automaticamente no deploy
const region = process.env.FUNCTION_REGION || "us-central1";

// Função para montar a URL base correta
function getBaseUrl(service) {
  if (isLocal) {
    // quando rodando localmente
    return `http://127.0.0.1:5001/${project}/${region}/${service}`;
  } else {
    // quando no deploy
    return `https://${region}-${project}.cloudfunctions.net/${service}`;
  }
}

// Roteamento principal — intercepta tudo que começa com /api/
app.all("/api/*", async (req, res) => {
  const url = req.originalUrl;
  const parts = url.split("/").filter(Boolean);

  // identifica o microserviço
  const service = parts.find((p) => p === "alugueis" || p === "estoques");
  if (!service) {
    return res.status(400).json({ erro: "Serviço inválido", path: url });
  }

  // remove /api/<service>/ e pega o resto do caminho
  const index = parts.indexOf(service);
  const pathAfter = parts.slice(index + 1).join("/");
  const targetUrl = `${getBaseUrl(service)}/${pathAfter}`.replace(/\/$/, "");

  try {
    console.log(`[BFF] ${req.method} → ${targetUrl}`);
    const response = await axios({
      method: req.method,
      url: targetUrl,
      params: req.query,
      data: req.body,
      headers: { ...req.headers, host: undefined },
      validateStatus: () => true,
    });
    res.status(response.status).send(response.data);
  } catch (err) {
    console.error("[BFF] Erro:", err.message);
    res.status(500).json({ erro: "Falha no BFF", detalhe: err.message });
  }
});

// Healthcheck
app.get("/", (req, res) =>
  res.json({
    status: "BFF OK",
    local: isLocal,
    project,
    region,
    exemplos: ["/api/alugueis", "/api/estoques"],
  })
);

module.exports = app;
