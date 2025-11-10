const Estoque = require('../models/Estoque');

// Listar todos os estoques
const listarEstoques = async (req, res) => {
  try {
    const { status } = req.query;
    const query = status ? { status } : {};
    const estoques = await Estoque.find(query);
    res.status(200).json(estoques);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

// Criar novo estoque
const criarEstoque = async (req, res) => {
  try {
    const { codigo, nome, tamanho_m2, preco_mensal, localizacao } = req.body;

    // Validação de campos obrigatórios
    if (!codigo) return res.status(400).json({ erro: 'Campo codigo é obrigatório' });
    if (!nome) return res.status(400).json({ erro: 'Campo nome é obrigatório' });
    if (!tamanho_m2) return res.status(400).json({ erro: 'Campo tamanho_m2 é obrigatório' });
    if (!preco_mensal) return res.status(400).json({ erro: 'Campo preco_mensal é obrigatório' });
    if (!localizacao) return res.status(400).json({ erro: 'Campo localizacao é obrigatório' });

    const estoque = await Estoque.create(req.body);
    res.status(201).json(estoque);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({ erro: 'Código já existe' });
    }
    res.status(500).json({ erro: error.message });
  }
};

// Buscar estoque por ID
const buscarEstoque = async (req, res) => {
  try {
    const estoque = await Estoque.findById(req.params.id);
    if (!estoque) {
      return res.status(404).json({ erro: 'Estoque não encontrado' });
    }
    res.status(200).json(estoque);
  } catch (error) {
    if (error.name === 'CastError') {
      return res.status(400).json({ erro: 'ID inválido' });
    }
    res.status(500).json({ erro: error.message });
  }
};

// Atualizar estoque
const atualizarEstoque = async (req, res) => {
  try {
    const estoque = await Estoque.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!estoque) {
      return res.status(404).json({ erro: 'Estoque não encontrado' });
    }
    
    res.status(200).json(estoque);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

// Deletar estoque
const deletarEstoque = async (req, res) => {
  try {
    const estoque = await Estoque.findByIdAndDelete(req.params.id);
    
    if (!estoque) {
      return res.status(404).json({ erro: 'Estoque não encontrado' });
    }
    
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

module.exports = {
  listarEstoques,
  criarEstoque,
  buscarEstoque,
  atualizarEstoque,
  deletarEstoque
};