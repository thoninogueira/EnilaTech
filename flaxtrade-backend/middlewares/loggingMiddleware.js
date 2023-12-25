const fs = require('fs');

// Middleware de logging simples
const loggingMiddleware = (req, res, next) => {
  const logMessage = `${new Date().toISOString()} - ${req.method} ${req.originalUrl}\n`;
  fs.appendFile('access.log', logMessage, (err) => {
    if (err) {
      console.error('Erro ao escrever no arquivo de log:', err);
    }
  });
  next();
};

module.exports = loggingMiddleware;
