// functions/bff-node/src/routes/alugueis.routes.js
const express = require('express');
const router = express.Router();
const { alugueisApi } = require('../services/api.service'); // seu client axios

function extractAxiosInfo(err) {
  const info = {
    isAxiosError: !!err.isAxiosError,
    message: err.message,
    code: err.code || null,
    status: err.response ? err.response.status : null,
    upstreamBody: err.response ? err.response.data : null,
  };

  // AggregateError (follow-redirects pode popular err.errors)
  if (err && typeof err[Symbol.iterator] === 'function' && err.errors) {
    info.aggregate = err.errors.map(e => ({
      message: e.message,
      code: e.code || null,
    }));
  } else if (Array.isArray(err.errors)) {
    info.aggregate = err.errors.map(e => ({ message: e.message, code: e.code || null }));
  }
  return info;
}

function respondUpstreamError(err, res) {
  const info = extractAxiosInfo(err);
  console.error('[alugueis.routes] Upstream error:', JSON.stringify(info, null, 2));

  // Se o upstream respondeu (4xx/5xx), repassa o corpo e status
  if (info.status) {
    return res.status(info.status).json({
      error: 'Upstream service returned error',
      upstreamStatus: info.status,
      upstreamBody: info.upstreamBody,
    });
  }

  // Erro de rede / timeout / redirects / DNS
  return res.status(502).json({
    error: 'Bad gateway - failed to reach upstream service',
    detail: info,
  });
}

// GET /alugueis
router.get('/', async (req, res, next) => {
  try {
    // monta path remoto com query params
    const resp = await alugueisApi.get('/api/alugueis', { params: req.query });
    return res.status(resp.status).json(resp.data);
  } catch (err) {
    // trata AggregateError / AxiosError / outros
    if (err && (err.isAxiosError || err.name === 'AggregateError')) {
      return respondUpstreamError(err, res);
    }
    console.error('[alugueis.routes] unexpected error:', err && err.stack ? err.stack : err);
    return next(err);
  }
});

// GET /alugueis/:id
router.get('/:id', async (req, res, next) => {
  try {
    const resp = await alugueisApi.get(`/api/alugueis/${req.params.id}`);
    return res.status(resp.status).json(resp.data);
  } catch (err) {
    if (err && (err.isAxiosError || err.name === 'AggregateError')) {
      return respondUpstreamError(err, res);
    }
    return next(err);
  }
});

// restante das rotas (POST, PUT, DELETE) seguem o mesmo padrão...
// por exemplo POST:
router.post('/', async (req, res, next) => {
  try {
    const resp = await alugueisApi.post('/api/alugueis', req.body);
    return res.status(resp.status).json(resp.data);
  } catch (err) {
    if (err && (err.isAxiosError || err.name === 'AggregateError')) {
      return respondUpstreamError(err, res);
    }
    return next(err);
  }
});

module.exports = router;
