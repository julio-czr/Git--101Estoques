const makeEstoqueUseCases = (repo) => {
  const listar = async ({ status } = {}) => {
    const query = status ? { status } : {};
    return repo.findAll(query);
  };

  const criar = async (payload) => {
    const required = ["codigo", "nome", "tamanho_m2", "preco_mensal", "localizacao"];
    for (const field of required) {
      if (payload[field] === undefined || payload[field] === null || payload[field] === "") {
        const err = new Error(`Campo ${field} é obrigatório`);
        err.status = 400;
        throw err;
      }
    }
    return repo.create(payload);
  };

  const buscar = async (id) => {
    const estoque = await repo.findById(id);
    if (!estoque) {
      const err = new Error("Estoque não encontrado");
      err.status = 404;
      throw err;
    }
    return estoque;
  };

  const atualizar = async (id, payload) => {
    const exists = await repo.findById(id);
    if (!exists) {
      const err = new Error("Estoque não encontrado");
      err.status = 404;
      throw err;
    }
    const updated = await repo.update(id, payload);
    return updated;
  };

  const deletar = async (id) => {
    const exists = await repo.findById(id);
    if (!exists) {
      const err = new Error("Estoque não encontrado");
      err.status = 404;
      throw err;
    }
    await repo.delete(id);
    return;
  };

  return { listar, criar, buscar, atualizar, deletar };
};

module.exports = makeEstoqueUseCases;
