const mongoose = require('mongoose');

const estoqueSchema = new mongoose.Schema({
  codigo: { 
    type: String, 
    required: true, 
    unique: true, 
    trim: true 
  },
  nome: { 
    type: String, 
    required: true, 
    trim: true 
  },
  tamanho_m2: { 
    type: Number, 
    required: true, 
    min: 1 
  },
  preco_mensal: { 
    type: Number, 
    required: true, 
    min: 0 
  },
  localizacao: { 
    type: String, 
    required: true, 
    trim: true 
  },
  status: { 
    type: String, 
    enum: ['disponivel', 'ocupado', 'manutencao'], 
    default: 'disponivel' 
  },
  created_at: { 
    type: Date, 
    default: Date.now 
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Estoque', estoqueSchema);