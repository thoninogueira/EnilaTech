// src/routes/api.js
const express = require('express');
const router = express.Router();
const negociacaoRoutes = require('./negociacaoRoutes');

router.use('/negociacoes', negociacaoRoutes);

module.exports = router;
