const uuid = require('uuid/v4');
const sessao = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const UsuarioDao = require('../app/infra/usuario-dao');
const db = require('./database');

module.exports = (app) => {
    // configuração da sessão e da autenticação
    passport.use(new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'senha'
        },
        (email, senha, done) => {
            const usuarioDao = new UsuarioDao(db);
            usuarioDao.buscaPorEmail(email)
                .then(usuario => {
                    if(!usuario || senha != usuario.senha){
                        return done(null, false, {mensage: 'Login e senha incorretos'});
                    }
                    done(null, usuario);
                })
                .catch(erro => done(erro, false));
        }
    ));

    // metodo que será chamado para criar objeto da sessao, que será posteriormente adicionado em cookie
    passport.serializeUser((usuario, done) => {
        const usuarioSessao = {
            nome: usuario.nome_completo,
            email: usuario.email
        }
        done(null, usuarioSessao);
    });

    passport.deserializeUser((usuarioSessao, done) => {
        done(null, usuarioSessao);
    });

    //middleware do express-session que gerencia a sessão
    app.use(sessao({
        secret: 'node alura',
        genid: function(req){
            // gera um id aleatorio para a sessão
            return uuid();
        },
        resave: false, // não deixa q a sessão seja salva novamente toda vez que um request chegar
        saveUninitialized: false // não deixa que uma nova sessão seja criada para qualquer URI
    }));

    app.use(passport.initialize());
    app.use(passport.session());

    // intercepta todas as requisições
    app.use(function(req, resp, next){
        // injeção de dependencia, dessa forma passport pode ser usado em base-controlador.js
        req.passport = passport;
        next();
    });
}