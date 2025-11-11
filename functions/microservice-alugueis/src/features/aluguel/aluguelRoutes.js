const express = require("express");

const aluguelRoutes = (controller) => {
  const router = express.Router();

  router.get("", controller.listarAlugueis);
  router.post("/", controller.criarAluguel);
  router.get("/:id", controller.buscarAluguel);
  router.put("/:id", controller.atualizarAluguel);
  router.delete("/:id", controller.deletarAluguel);

  return router;
};

module.exports = aluguelRoutes;
