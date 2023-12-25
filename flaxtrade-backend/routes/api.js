const express = require('express');
const router = express.Router();
const negociacaoRoutes = require('./negociacaoRoutes');

// Roteador para as rotas relacionadas às negociações
router.use('/negociacoes', negociacaoRoutes);

// Adicione mais roteadores conforme necessário para outras funcionalidades

module.exports = router;
