import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Historico() {
  const [historico, setHistorico] = useState([]);

  useEffect(() => {
    // Faça uma requisição para obter o histórico do backend
    axios.get('/api/historico')
      .then(response => setHistorico(response.data))
      .catch(error => console.error('Erro ao obter histórico:', error));
  }, []);

  return (
    <div>
      <h2>Histórico de Transações</h2>
      <ul>
        {historico.map(item => (
          <li key={item.id}>
            <p>Ativo: {item.ativo}</p>
            <p>Quantidade: {item.quantidade}</p>
            <p>Preço: {item.preco}</p>
            <p>Status: {item.status}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Historico;