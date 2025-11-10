const express = require('express');
const router = express.Router();
const controller = require('../controllers/aluguelController');

// router.get('/alugueis', (req, res) => {
//   res.json([
//     { id: 1, nome: 'Teste Aluguel A', preco: 1200 },
//     { id: 2, nome: 'Teste Aluguel B', preco: 950 }
//   ]);
// });
router.get('/alugueis', controller.listarAlugueis);
router.post('/alugueis', controller.criarAluguel);
router.get('/alugueis/:id', controller.buscarAluguel);
router.put('/alugueis/:id', controller.atualizarAluguel);
router.delete('/alugueis/:id', controller.deletarAluguel);

module.exports = router;