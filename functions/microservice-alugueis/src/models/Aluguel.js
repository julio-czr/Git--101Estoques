const { DataTypes } = require('sequelize');
const { sequelize: sequelizeInstance } = require('../config/database');

const sequelize = sequelizeInstance;

const Aluguel = sequelize.define('Aluguel', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  estoque_id: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cliente_nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cliente_email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  data_inicio: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  data_fim: {
    type: DataTypes.DATEONLY,
    allowNull: true
  },
  valor_mensal: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  status: {
    type: DataTypes.ENUM('ativo', 'finalizado', 'cancelado'),
    defaultValue: 'ativo'
  }
}, {
  timestamps: true,
  tableName: 'alugueis'
});

module.exports = Aluguel;