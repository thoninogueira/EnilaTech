import React, { useState, useEffect } from 'react';
import axios from 'axios';

function NegociacoesAtivas() {
  const [negociacoes, setNegociacoes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Requisição para obter as negociações ativas do backend
    axios.get('/api/negociacoes-ativas')
      .then(response => {
        setNegociacoes(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao obter negociações ativas:', error);
        setLoading(false);
      });
  }, []);

  // Função para fechar uma negociação
  const fecharNegociacao = (negociacaoId) => {
    // Lógica para fechar a negociação no backend
    axios.put(`/api/negociacoes/${negociacaoId}/fechar`)
      .then(response => {
        // Atualizar o estado local ou realizar outras ações necessárias
        console.log('Negociação fechada com sucesso:', response.data);
        // Atualizar o estado local removendo a negociação fechada
        setNegociacoes(prevNegociacoes => prevNegociacoes.filter(negociacao => negociacao.id !== negociacaoId));
      })
      .catch(error => {
        console.error('Erro ao fechar a negociação:', error);
      });
  };

  return (
    <div>
      <h2>Negociações Ativas</h2>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <ul>
          {negociacoes.length === 0 ? (
            <p>Não há negociações ativas no momento.</p>
          ) : (
            negociacoes.map(negociacao => (
              <li key={negociacao.id}>
                <p>Ativo: {negociacao.ativo}</p>
                <p>Quantidade: {negociacao.quantidade}</p>
                <p>Preço: {negociacao.preco}</p>
                <button onClick={() => fecharNegociacao(negociacao.id)}>Fechar Negociação</button>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}

export default NegociacoesAtivas;
