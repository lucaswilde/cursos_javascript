
// marko serve para gerar templates html
require('marko/node-require').install();
require('marko/express');

// esse modulo retorna uma funcao
const express = require('express');
const app = express();
const bodyParser = require('body-parser'); //middleware

// chamar metodo use para pode usar o middleware
// middleware é o mesmo que um filtro, nesse caso vai processar as chamadas sendo possivel acessar os dados atraves do comando req.body()
app.use(bodyParser.urlencoded({
    extended: true // transforma objetos complexos vindos das requisições em objetos JSON
}));

const rotas = require('../app/rotas/rotas.js');
rotas(app);

// retorna o app para quem fizer um require
module.exports = app;