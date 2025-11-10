const express = require('express');
const router = express.Router();
const controller = require('../controllers/estoqueController');

router.get('/estoques', controller.listarEstoques);
router.post('/estoques', controller.criarEstoque);
router.get('/estoques/:id', controller.buscarEstoque);
router.put('/estoques/:id', controller.atualizarEstoque);
router.delete('/estoques/:id', controller.deletarEstoque);

module.exports = router;