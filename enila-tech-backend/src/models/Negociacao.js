// src/models/Negociacao.js
const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Negociacao = sequelize.define('Negociacao', {
  ativo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  quantidade: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  preco: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  data: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  dataFechamento: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});

module.exports = Negociacao;
