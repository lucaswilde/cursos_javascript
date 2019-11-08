const LivroControlador = require('../controladores/livro-controlador');
const livroControlador = new LivroControlador();
const Livro = require('../modelos/livro');
const BaseControlador = require('../controladores/base-controlador');

module.exports = (app) => {
    
    app.use(LivroControlador.rotas().autenticadas, function(req, resp, next){
        // isAuthenticated é injetado pelo classe passport
        if(req.isAuthenticated()){
            next();
        } else{
            resp.redirect(BaseControlador.rotas().login);
        }
    });

    app.get(LivroControlador.rotas().lista, livroControlador.lista());

    app.route(LivroControlador.rotas().cadastro)
        .get(livroControlador.formularioCadastro())
        .post(Livro.validacoes(),livroControlador.cadastra())
        .put(Livro.validacoes(), livroControlador.edita());

    app.get(LivroControlador.rotas().edicao, livroControlador.formularioEdicao());

    app.delete(LivroControlador.rotas().delecao, livroControlador.remove());
};