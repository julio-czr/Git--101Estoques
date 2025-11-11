const EstoqueModel = require("../../models/Estoque");
const EstoqueRepository = require("./estoqueRepository");
const makeEstoqueUseCases = require("./estoqueUseCases");
const makeEstoqueController = require("./estoqueController");
const estoqueRoutes = require("./estoqueRoutes");

const repo = new EstoqueRepository(EstoqueModel);
const useCases = makeEstoqueUseCases(repo);
const controller = makeEstoqueController(useCases);
const router = estoqueRoutes(controller);

module.exports = router;
