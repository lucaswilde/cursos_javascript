
// marko serve para gerar templates html
require('marko/node-require').install();
require('marko/express');

// esse modulo retorna uma funcao
const express = require('express');
const app = express();

const rotas = require('../app/rotas/rotas.js');
rotas(app);

// retorna o app para quem fizer um require
module.exports = app;