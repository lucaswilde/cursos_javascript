const LivroControlador = require('./livro-controlador');
const templates = require('../views/templates');

class BaseControlador{

    static rotas() {
        return {
            home: '/',
            login: '/login'
        };
    }
    
    home() {
        return function(req, resp) {
            resp.marko(
                templates.base.home
            );
        };
    }

    login(){
        return function(req, resp){
            resp.marko(
                templates.base.login
            );
        }
    }

    efetuaLogin(){
        return function(req, resp, next){
            
            const passport = req.passport;

            //metodo done(erro, usuario, info) definido na sessao-autenticacao.js
            passport.authenticate('local', (erro, usuario, info) => {
                if(info){
                    return resp.marko(templates.base.login);
                }

                if(erro){
                    // chama a rota com o mapeamento de erro, o express disponibiliza o metodo next
                    next(erro);
                }

                // o metodo login foi adicionado na requisão pelo authenticate
                req.login(usuario, (erro) => {
                    if(erro){
                        return next(erro);
                    }
                    return resp.redirect(LivroControlador.rotas().lista);
                });
            })(req, resp, next);
        }
    }
}

module.exports = BaseControlador;