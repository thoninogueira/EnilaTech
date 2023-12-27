// src/components/Historico.js
import React, { useEffect, useState } from 'react';
import api from '../services/api';

const Historico = () => {
  const [historico, setHistorico] = useState([]);

  useEffect(() => {
    // Lógica para obter histórico de transações da API
    const fetchHistoricoTransacoes = async () => {
      try {
        const response = await api.get('/negociacoes/historico');
        setHistorico(response.data);
      } catch (error) {
        console.error('Erro ao obter histórico de transações:', error);
      }
    };

    fetchHistoricoTransacoes();
  }, []);

  return (
    <div>
      <h2>Histórico de Transações</h2>
      {/* Renderize a lista de histórico de transações */}
    </div>
  );
};

export default Historico;
