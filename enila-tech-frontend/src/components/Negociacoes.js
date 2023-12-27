document.addEventListener('DOMContentLoaded', function () {
    // Dados de exemplo para gráfico
    const dadosNegociacoes = {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
        datasets: [{
            label: 'Negociações Mensais',
            backgroundColor: '#2ECC71',
            borderColor: '#27AE60',
            data: [12, 19, 3, 5, 2],
        }],
    };

    // Configuração do gráfico
    const configGrafico = {
        type: 'bar',
        data: dadosNegociacoes,
    };

    // Renderizar gráfico
    const ctx = document.getElementById('graficoNegociacoes').getContext('2d');
    new Chart(ctx, configGrafico);

    // Lógica para realizar transações
    const transacoesContainer = document.getElementById('transacoes');

    // Função para adicionar uma nova transação
    function adicionarTransacao(transacao) {
        const novaTransacao = document.createElement('div');
        novaTransacao.textContent = `Nova transação: ${transacao}`;
        transacoesContainer.appendChild(novaTransacao);
    }

    // Simulação de transação (substitua com sua lógica real)
    const btnRealizarTransacao = document.createElement('button');
    btnRealizarTransacao.textContent = 'Realizar Transação';
    btnRealizarTransacao.addEventListener('click', function () {
        const novaTransacao = prompt('Insira os detalhes da transação:');
        adicionarTransacao(novaTransacao);
    });

    transacoesContainer.appendChild(btnRealizarTransacao);
});
