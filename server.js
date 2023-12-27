const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000; // ou a porta de sua escolha

app.use(bodyParser.json());

// Adicione suas rotas aqui

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

// Importe o módulo 'crypto' para gerar tokens aleatórios (pode variar dependendo do backend)
const crypto = require('crypto');

// Armazene usuários em memória para simplificar o exemplo (use um banco de dados em produção)
const users = [
    { id: 1, email: 'usuario@example.com', senha: 'senha123' },
    // ... outros usuários
];

// Armazene tokens de recuperação de senha em memória (também deve ser persistido em um banco de dados)
const passwordResetTokens = {};

// Rota de login
app.post('/login', (req, res) => {
    const { email, senha } = req.body;

    // Simples lógica de autenticação (substitua por autenticação real com banco de dados)
    const user = users.find(u => u.email === email && u.senha === senha);

    if (user) {
        // Gere um token de autenticação (pode variar dependendo do backend)
        const authToken = crypto.randomBytes(16).toString('hex');

        res.json({ authToken });
    } else {
        res.status(401).json({ message: 'Credenciais inválidas.' });
    }
});

// Rota de recuperação de senha
app.post('/recuperar-senha', (req, res) => {
    const { email } = req.body;

    // Verifique se o e-mail existe (substitua por lógica real)
    const user = users.find(u => u.email === email);

    if (user) {
        // Gere um token de recuperação de senha (pode variar dependendo do backend)
        const resetToken = crypto.randomBytes(20).toString('hex');
        passwordResetTokens[email] = resetToken;

        // Simule o envio do e-mail de recuperação (pode variar dependendo do backend)
        console.log(`E-mail de recuperação enviado para ${email}. Token: ${resetToken}`);

        res.json({ message: 'Um e-mail de recuperação foi enviado.' });
    } else {
        res.status(404).json({ message: 'Usuário não encontrado.' });
    }
});
