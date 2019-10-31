const LivroControlador = require('../controladores/livro-controlador');
const livroControlador = new LivroControlador();
const Livro = require('../modelos/livro');

module.exports = (app) => {
    
    app.get(LivroControlador.rotas().lista, livroControlador.lista());

    app.route(LivroControlador.rotas().cadastro)
        .get(livroControlador.formularioCadastro())
        .post(Livro.validacoes(),livroControlador.cadastra())
        .put(Livro.validacoes(), livroControlador.edita());

    app.get(LivroControlador.rotas().edicao, livroControlador.formularioEdicao());

    app.delete(LivroControlador.rotas().delecao, livroControlador.remove());
};