const makeAluguelUseCases = (repo) => {
  const listar = async ({ status } = {}) => {
    const where = status ? { status } : {};
    return repo.findAll(where);
  };

  const criar = async (payload) => {
    if (
      !payload.estoque_id ||
      !payload.cliente_nome ||
      !payload.cliente_email ||
      !payload.data_inicio ||
      !payload.valor_mensal
    ) {
      const err = new Error("Campos obrigatórios ausentes");
      err.status = 400;
      throw err;
    }
    return repo.create(payload);
  };

  const buscar = async (id) => {
    const aluguel = await repo.findById(id);
    if (!aluguel) {
      const err = new Error("Aluguel não encontrado");
      err.status = 404;
      throw err;
    }
    return aluguel;
  };

  const atualizar = async (id, payload) => {
    const exists = await repo.findById(id);
    if (!exists) {
      const err = new Error("Aluguel não encontrado");
      err.status = 404;
      throw err;
    }
    await repo.update(id, payload);
    return repo.findById(id);
  };

  const deletar = async (id) => {
    const exists = await repo.findById(id);
    if (!exists) {
      const err = new Error("Aluguel não encontrado");
      err.status = 404;
      throw err;
    }
    await repo.delete(id);
    return;
  };

  return { listar, criar, buscar, atualizar, deletar };
};

module.exports = makeAluguelUseCases;
