// src/config/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('seu_banco_de_dados', 'seu_usuario', 'sua_senha', {
  host: 'localhost',
  dialect: 'postgres', // ou 'mysql' se estiver usando MySQL
});

module.exports = sequelize;
