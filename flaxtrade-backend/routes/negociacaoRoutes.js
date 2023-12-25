const express = require('express');
const router = express.Router();
const negociacaoController = require('../controllers/negociacaoController');

// Rota para obter negociações ativas
router.get('/negociacoes-ativas', negociacaoController.getNegociacoesAtivas);

// Rota para obter o histórico de negociações
router.get('/historico', negociacaoController.getHistorico);

// Adicione mais rotas conforme necessário, utilizando métodos do controlador

module.exports = router;
