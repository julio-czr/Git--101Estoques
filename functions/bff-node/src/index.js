// functions/bff/src/index.js
const express = require('express');
const cors = require('cors');

const aluguelRoutes = require('./routes/aluguel.routes');
const estoqueRoutes = require('./routes/estoque.routes');

const app = express();

app.use(cors());
app.use(express.json());

// Se você usar Firebase Hosting rewrite "/api/bff/**", removemos o prefixo
app.use((req, res, next) => {
  if (req.originalUrl && req.originalUrl.startsWith('/api/bff')) {
    req.url = req.originalUrl.replace(/^\/api\/bff/, '') || '/';
  }
  next();
});

// simples logging
app.use((req, res, next) => {
  console.log(new Date().toISOString(), req.method, req.originalUrl);
  next();
});

// monta routers
app.use('/alugueis', aluguelRoutes);
app.use('/estoques', estoqueRoutes);

// health endpoint
app.get('/', (req, res) => res.json({ status: 'BFF OK', time: new Date().toISOString() }));

// catch-all
app.all('*', (req, res) => res.status(404).json({ message: 'Rota não encontrada', path: req.path }));

module.exports = app;
