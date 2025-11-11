const express = require("express");
const ProxyService = require("../core/ProxyService");

const router = express.Router();
const proxyService = new ProxyService();

router.all("/api/*", async (req, res) => {
  try {
    const response = await proxyService.forwardRequest(req);
    res.status(response.status).send(response.data);
  } catch (error) {
    res.status(500).json({
      erro: "Falha no BFF",
      detalhe: error.message,
    });
  }
});

module.exports = router;
