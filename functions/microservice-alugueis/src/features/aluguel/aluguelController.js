const makeAluguelController = (useCases) => {
  const listarAlugueis = async (req, res) => {
    try {
      const alugueis = await useCases.listar(req.query);
      res.status(200).json(alugueis);
    } catch (err) {
      res.status(err.status || 500).json({ erro: err.message });
    }
  };

  const criarAluguel = async (req, res) => {
    try {
      const aluguel = await useCases.criar(req.body);
      res.status(201).json({ data: aluguel });
    } catch (err) {
      console.error("Erro ao criar aluguel:", err);
      res.status(err.status || 500).json({ data: null, error: err.message });
    }
  };

  const buscarAluguel = async (req, res) => {
    try {
      const id = Number(req.params.id);
      if (Number.isNaN(id)) return res.status(400).json({ erro: "ID inválido" });
      const aluguel = await useCases.buscar(id);
      res.status(200).json(aluguel);
    } catch (err) {
      res.status(err.status || 500).json({ erro: err.message });
    }
  };

  const atualizarAluguel = async (req, res) => {
    try {
      const id = Number(req.params.id);
      if (Number.isNaN(id)) return res.status(400).json({ erro: "ID inválido" });
      const aluguel = await useCases.atualizar(id, req.body);
      res.status(200).json(aluguel);
    } catch (err) {
      res.status(err.status || 500).json({ erro: err.message });
    }
  };

  const deletarAluguel = async (req, res) => {
    try {
      const id = Number(req.params.id);
      if (Number.isNaN(id)) return res.status(400).json({ erro: "ID inválido" });
      await useCases.deletar(id);
      res.status(204).send();
    } catch (err) {
      res.status(err.status || 500).json({ erro: err.message });
    }
  };

  return {
    listarAlugueis,
    criarAluguel,
    buscarAluguel,
    atualizarAluguel,
    deletarAluguel,
  };
};

module.exports = makeAluguelController;
