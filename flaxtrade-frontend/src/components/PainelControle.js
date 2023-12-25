import React, { useState, useEffect } from 'react';
import axios from 'axios';

function PainelControle() {
  const [widgets, setWidgets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Requisição para obter os widgets do backend
    axios.get('/api/widgets')
      .then(response => {
        setWidgets(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erro ao obter widgets:', error);
        setLoading(false);
      });
  }, []);

  // Função para reorganizar os widgets
  const reorganizarWidgets = (novosWidgets) => {
    // Lógica para enviar a ordem dos widgets ao backend
    axios.put('/api/widgets/reorganizar', { widgets: novosWidgets })
      .then(response => {
        // Atualizar o estado local com a nova ordem dos widgets
        setWidgets(response.data);
      })
      .catch(error => {
        console.error('Erro ao reorganizar widgets:', error);
      });
  };

  return (
    <div>
      <h2>Painel de Controle</h2>
      {loading ? (
        <p>Carregando...</p>
      ) : (
        <div>
          <h3>Widgets Personalizáveis</h3>
          <div>
            {widgets.map(widget => (
              <div key={widget.id} className="widget">
                <h4>{widget.nome}</h4>
                {/* Adicione aqui o conteúdo do widget conforme necessário */}
              </div>
            ))}
          </div>
          <button onClick={() => reorganizarWidgets([...widgets.reverse()])}>
            Inverter Ordem dos Widgets
          </button>
        </div>
      )}
    </div>
  );
}

export default PainelControle;
