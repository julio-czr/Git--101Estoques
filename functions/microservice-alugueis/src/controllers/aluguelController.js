const Aluguel = require('../models/Aluguel');

const listarAlugueis = async (req, res) => {
  try {
    const { status } = req.query;
    const where = status ? { status } : {};
    const alugueis = await Aluguel.findAll({ where });
    res.status(200).json(alugueis);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

const criarAluguel = async (req, res) => {
  try {
    console.log('REQ BODY:', req.body); // 🔍 log do corpo da requisição

    const aluguel = await Aluguel.create(req.body);

    console.log('Aluguel criado:', aluguel.toJSON()); // 🔍 log do resultado

    res.status(201).json({ data: aluguel });
  } catch (error) {
    console.error('Erro ao criar aluguel:', error);
    res.status(500).json({ data: null, error: error.message });
  }
};


const buscarAluguel = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (Number.isNaN(id)) return res.status(400).json({ erro: 'ID inválido' });
    const aluguel = await Aluguel.findByPk(id);
    if (!aluguel) return res.status(404).json({ erro: 'Aluguel não encontrado' });
    res.status(200).json(aluguel);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

const atualizarAluguel = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (Number.isNaN(id)) return res.status(400).json({ erro: 'ID inválido' });
    const [updated] = await Aluguel.update(req.body, { where: { id } });
    if (!updated) return res.status(404).json({ erro: 'Aluguel não encontrado' });
    const aluguel = await Aluguel.findByPk(id);
    res.status(200).json(aluguel);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

const deletarAluguel = async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
    if (Number.isNaN(id)) return res.status(400).json({ erro: 'ID inválido' });
    const deleted = await Aluguel.destroy({ where: { id } });
    if (!deleted) return res.status(404).json({ erro: 'Aluguel não encontrado' });
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

module.exports = {
  listarAlugueis,
  criarAluguel,
  buscarAluguel,
  atualizarAluguel,
  deletarAluguel
};