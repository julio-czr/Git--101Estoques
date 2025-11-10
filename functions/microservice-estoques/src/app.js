const express = require('express');
const cors = require('cors');
const estoqueRoutes = require('./routes/estoqueRoutes');

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Rota raiz - health check
app.get('/', (req, res) => {
  res.json({ 
    status: 'Microserviço Estoques OK',
    timestamp: new Date()
  });
});

// Rotas da API
app.use('/api', estoqueRoutes);

module.exports = app;