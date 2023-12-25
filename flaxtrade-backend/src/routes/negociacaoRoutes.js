// src/routes/negociacaoRoutes.js
const express = require('express');
const router = express.Router();
const NegociacaoController = require('../controllers/NegociacaoController');

const negociacaoController = new NegociacaoController();

// Defina suas rotas para Negociacao aqui

module.exports = router;
