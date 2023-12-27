// src/components/NegociacoesAtivas.js
import React, { useEffect, useState } from 'react';
import api from '../services/api';

const NegociacoesAtivas = () => {
  const [negociacoes, setNegociacoes] = useState([]);

  useEffect(() => {
    // Lógica para obter negociações ativas da API
    const fetchNegociacoesAtivas = async () => {
      try {
        const response = await api.get('/negociacoes/ativas');
        setNegociacoes(response.data);
      } catch (error) {
        console.error('Erro ao obter negociações ativas:', error);
      }
    };

    fetchNegociacoesAtivas();
  }, []);

  return (
    <div>
      <h2>Negociações Ativas</h2>
      {/* Renderize a lista de negociações ativas */}
    </div>
  );
};

export default NegociacoesAtivas;
