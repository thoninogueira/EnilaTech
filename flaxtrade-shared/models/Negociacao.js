import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Negociacao({ match }) {
  const [negociacao, setNegociacao] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const negociacaoId = match.params.id;

    // Requisição para obter detalhes da negociação do backend
    axios.get(`/api/negociacoes/${negociacaoId}`)
      .then(response => {
        setNegociacao(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao obter detalhes da negociação:', error);
        setLoading(false);
      });
  }, [match.params.id]);

  // Função para fechar a negociação
  const fecharNegociacao = () => {
    const negociacaoId = match.params.id;

    // Lógica para fechar a negociação no backend
    axios.put(`/api/negociacoes/${negociacaoId}/fechar`)
      .then(response => {
        // Atualizar o estado local ou realizar outras ações necessárias
        console.log('Negociação fechada com sucesso:', response.data);
        // Atualizar o estado local marcando a negociação como fechada
        setNegociacao(prevNegociacao => ({ ...prevNegociacao, status: 'Fechada' }));
      })
      .catch(error => {
        console.error('Erro ao fechar a negociação:', error);
      });
  };

  return (
    <div>
      <h2>Detalhes da Negociação</h2>
      {loading ? (
        <p>Carregando...</p>
      ) : negociacao ? (
        <div>
          <p>Ativo: {negociacao.ativo}</p>
          <p>Quantidade: {negociacao.quantidade}</p>
          <p>Preço: {negociacao.preco}</p>
          <p>Status: {negociacao.status}</p>
          {negociacao.status === 'Aberta' && (
            <button onClick={fecharNegociacao}>Fechar Negociação</button>
          )}
        </div>
      ) : (
        <p>Negociação não encontrada.</p>
      )}
    </div>
  );
}

export default Negociacao;
