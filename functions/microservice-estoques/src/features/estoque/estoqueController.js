const makeEstoqueController = (useCases) => {
  const listarEstoques = async (req, res) => {
    try {
      const estoques = await useCases.listar(req.query);
      res.status(200).json(estoques);
    } catch (err) {
      res.status(err.status || 500).json({ erro: err.message });
    }
  };

  const criarEstoque = async (req, res) => {
    try {
      const estoque = await useCases.criar(req.body);
      res.status(201).json(estoque);
    } catch (err) {
      // conflito de código único (duplicate key)
      if (err.code === 11000 || (err.message && err.message.includes("duplicate key"))) {
        return res.status(409).json({ erro: "Código já existe" });
      }
      res.status(err.status || 500).json({ erro: err.message });
    }
  };

  const buscarEstoque = async (req, res) => {
    try {
      const id = req.params.id;
      const estoque = await useCases.buscar(id);
      res.status(200).json(estoque);
    } catch (err) {
      // CastError (ObjectId inválido)
      if (err.name === "CastError" || err.message === "Cast to ObjectId failed for value") {
        return res.status(400).json({ erro: "ID inválido" });
      }
      res.status(err.status || 500).json({ erro: err.message });
    }
  };

  const atualizarEstoque = async (req, res) => {
    try {
      const id = req.params.id;
      const estoque = await useCases.atualizar(id, req.body);
      res.status(200).json(estoque);
    } catch (err) {
      if (err.name === "CastError") return res.status(400).json({ erro: "ID inválido" });
      if (err.code === 11000) return res.status(409).json({ erro: "Código já existe" });
      res.status(err.status || 500).json({ erro: err.message });
    }
  };

  const deletarEstoque = async (req, res) => {
    try {
      const id = req.params.id;
      await useCases.deletar(id);
      res.status(204).send();
    } catch (err) {
      if (err.name === "CastError") return res.status(400).json({ erro: "ID inválido" });
      res.status(err.status || 500).json({ erro: err.message });
    }
  };

  return {
    listarEstoques,
    criarEstoque,
    buscarEstoque,
    atualizarEstoque,
    deletarEstoque,
  };
};

module.exports = makeEstoqueController;
