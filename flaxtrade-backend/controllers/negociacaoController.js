const Negociacao = require('../models/Negociacao');

module.exports = {
  async getNegociacoesAtivas(req, res) {
    try {
      const negociacoesAtivas = await Negociacao.findAll({ where: { status: 'ativa' } });
      res.json(negociacoesAtivas);
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensagem: 'Erro ao obter negociações ativas.' });
    }
  },

  async getHistorico(req, res) {
    try {
      const historicoNegociacoes = await Negociacao.findAll({ where: { status: 'fechada' } });
      res.json(historicoNegociacoes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ mensagem: 'Erro ao obter histórico de negociações.' });
    }
  },

  // Adicione mais métodos conforme necessário para criar, atualizar, excluir negociações, etc.
};
