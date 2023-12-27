import * as api from './api.js';

// ...

// Função para realizar o login
async function login() {
    try {
        const email = document.getElementById('email').value;
        const senha = document.getElementById('senha').value;

        // Validar se os campos estão preenchidos
        if (!email || !senha) {
            alert('Preencha todos os campos.');
            return;
        }

        // Chamar a API backend para autenticação
        const usuario = await api.realizarLogin(email, senha);

        // Lógica após o login bem-sucedido, como redirecionamento
        alert('Login bem-sucedido! Redirecionando para a página do usuário...');

        // Exemplo de como você pode redirecionar para a página do usuário (simulação)
        window.location.href = 'user-page.html';
    } catch (error) {
        // Lógica para tratamento de erro
        alert(`Erro: ${error.message}`);
    }
}

// Função para enviar e-mail de recuperação de senha
async function sendPasswordResetEmail() {
    try {
        const email = document.getElementById('forgot-email').value;

        // Validar se o e-mail está preenchido
        if (!email) {
            alert('Digite seu e-mail.');
            return;
        }

        // Chamar a API backend para enviar e-mail de recuperação
        await api.enviarEmailRecuperacao(email);

        // Lógica após o envio bem-sucedido, como exibir uma mensagem ao usuário
        alert('Um e-mail de recuperação foi enviado.');
    } catch (error) {
        // Lógica para tratamento de erro
        alert(`Erro: ${error.message}`);
    }
}

// ...



function logout() {
    // Lógica para deslogar o usuário
    // Por exemplo, redirecionar para a página de login
    window.location.href = 'login.html';
}

// Adicione lógica relacionada a negociação, conta digital, saldo e transações conforme necessário
// ...

// Exemplo de como você pode atualizar o saldo (simulação)
function updateBalance(newBalance) {
    const saldoElement = document.getElementById('saldo').querySelector('p');
    saldoElement.textContent = `Seu saldo atual: R$ ${newBalance}`;
}

// Chamada de exemplo (simulação)
updateBalance(1000);
