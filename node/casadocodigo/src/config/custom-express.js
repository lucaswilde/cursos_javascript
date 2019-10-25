
// marko serve para gerar templates html
require('marko/node-require').install();
require('marko/express');

// esse modulo retorna uma funcao
const express = require('express');
const app = express();
const bodyParser = require('body-parser'); //middleware
const methodOverride = require('method-override');

// adicionando outro middleware para carregar conteudo estatico como imagens e js
// caso contrario a tela vai receber um 404 ao tentar carregar um estatico pois nao existe um rota definida para aquela url
// o express ja possui uma implementação para conteudo estatico
app.use('/estatico', express.static('src/app/public'));

// chamar metodo use para pode usar o middleware
// middleware é o mesmo que um filtro, nesse caso vai processar as chamadas sendo possivel acessar os dados atraves do comando req.body()
app.use(bodyParser.urlencoded({
    extended: true // transforma objetos complexos vindos das requisições em objetos JSON
}));

app.use(methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      var method = req.body._method
      delete req.body._method
      return method
    }
}));

const rotas = require('../app/rotas/rotas.js');
rotas(app);

// retorna o app para quem fizer um require
module.exports = app;