const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRoutes = require('./routes/api');
const loggingMiddleware = require('./middlewares/loggingMiddleware');
const { sequelize } = require('./config/database');

const app = express();

// Middleware de logging global
app.use(loggingMiddleware);

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Configuração do banco de dados
sequelize.sync({ force: false }).then(() => {
  console.log('Banco de dados sincronizado');
}).catch((err) => {
  console.error('Erro ao sincronizar o banco de dados:', err);
});

// Rotas da API
app.use('/api', apiRoutes);

// Restante do código...

// Inicialização do servidor
const porta = process.env.PORT || 3000;
app.listen(porta, () => {
  console.log(`Servidor rodando na porta ${porta}`);
});
