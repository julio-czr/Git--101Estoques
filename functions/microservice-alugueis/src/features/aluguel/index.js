const AluguelModel = require("../../models/Aluguel");
const AluguelRepository = require("./aluguelRepository");
const makeAluguelUseCases = require("./aluguelUseCases");
const makeAluguelController = require("./aluguelController");
const aluguelRoutes = require("./aluguelRoutes");

// Injeção de dependência (camadas conectadas)
const repo = new AluguelRepository(AluguelModel);
const useCases = makeAluguelUseCases(repo);
const controller = makeAluguelController(useCases);
const router = aluguelRoutes(controller);

module.exports = router;
