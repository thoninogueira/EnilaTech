import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Home() {
  const [negociacoesAtivas, setNegociacoesAtivas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Faça uma requisição para obter as negociações ativas do backend
    axios.get('/api/negociacoes-ativas')
      .then(response => {
        setNegociacoesAtivas(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao obter negociações ativas:', error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Negociações Ativas</h2>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <ul>
          {negociacoesAtivas.length === 0 ? (
            <p>Não há negociações ativas no momento.</p>
          ) : (
            negociacoesAtivas.map(item => (
              <li key={item.id}>
                <p>Ativo: {item.ativo}</p>
                <p>Quantidade: {item.quantidade}</p>
                <p>Preço: {item.preco}</p>
                <button onClick={() => fecharNegociacao(item.id)}>Fechar Negociação</button>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );

  // Função para fechar uma negociação
  function fecharNegociacao(negociacaoId) {
    // Lógica para fechar a negociação no backend
    axios.put(`/api/negociacoes/${negociacaoId}/fechar`)
      .then(response => {
        // Atualizar o estado local ou realizar outras ações necessárias
        console.log('Negociação fechada com sucesso:', response.data);
      })
      .catch(error => {
        console.error('Erro ao fechar a negociação:', error);
      });
  }
}

export default Home;
