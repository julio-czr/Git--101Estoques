const express = require('express');
const cors = require('cors');
const aluguelRoutes = require('./routes/aluguelRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.json({ status: 'Microserviço Aluguéis OK', timestamp: new Date() });
});

app.use('/api', aluguelRoutes);

module.exports = app;