const { estoquesApi, eventosApi } = require('../services/api.service');
const express = require('express');
const router = express.Router();

// Listar todos os estoques
router.get('/', async (req, res, next) => {
  try {
    const { data } = await estoquesApi.get('/api/estoques');
    res.json(data);
  } catch (error) {
    next(error);
  }
});

// Obter um estoque específico
router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { data } = await estoquesApi.get(`/api/estoques/${id}`);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

// Criar um novo estoque via evento
router.post('/', async (req, res, next) => {
  try {
    // Envia evento para criação de estoque
    const evento = {
      tipo: 'CRIAR_ESTOQUE',
      dados: req.body,
      status: 'PENDENTE'
    };

    await eventosApi.post('/api/eventos', evento);
    
    res.status(202).json({
      message: 'Solicitação de criação de estoque recebida',
      evento
    });
  } catch (error) {
    next(error);
  }
});

// Atualizar um estoque
router.put('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { data } = await estoquesApi.put(`/api/estoques/${id}`, req.body);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

// Remover um estoque
router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const { data } = await estoquesApi.delete(`/api/estoques/${id}`);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

module.exports = router;