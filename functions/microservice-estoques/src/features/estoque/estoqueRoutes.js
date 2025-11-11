const express = require("express");

const aluguelRoutes = (controller) => {
  const router = express.Router();

  router.get("", controller.listarEstoques);
  router.post("/", controller.criarEstoque);
  router.get("/:id", controller.buscarEstoque);
  router.put("/:id", controller.atualizarEstoque);
  router.delete("/:id", controller.deletarEstoque);

  return router;
};

module.exports = aluguelRoutes;
