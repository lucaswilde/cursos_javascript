"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ProxyFactory = function () {
    function ProxyFactory() {
        _classCallCheck(this, ProxyFactory);
    }

    _createClass(ProxyFactory, null, [{
        key: "create",
        value: function create(objeto, props, acao) {

            return new Proxy(objeto, {
                /*
                O target é o objeto real que é encapsulado pela proxy. É este objeto que não queremos "sujar" com armadilhas ou qualquer código que não diga respeito ao modelo.
                O prop é a propriedade em si, que está sendo lida naquele momento.
                O receiver é a referência ao próprio proxy. É na configuração do handler do Proxy que colocamos armadilhas.
                */
                get: function get(target, property, receiver) {
                    if (props.includes(property) && ProxyFactory._ehFuncao(target[property])) {
                        // substitui a funcao do proxy (adiciona ou esvazia) por outra que fará o que precisamos
                        return function () {
                            console.log("a propriedade " + property + " foi interceptada");

                            //Como a função no if, substituirá o método adiciona(), existe um objeto implícito 
                            //chamado arguments que dá acesso a todos os parâmetros passados para a função. 
                            //A seguir, usaremos o Reflect.apply(), e chamaremos uma função.
                            var retorno = Reflect.apply(target[property], target, arguments);

                            acao(target);

                            return retorno;
                        };
                    }
                    return Reflect.get(target, property, receiver);
                },
                set: function set(target, property, value, receiver) {

                    var retorno = Reflect.set(target, property, value, receiver);
                    if (props.includes(property)) {
                        target[property] = value;
                        acao(target);
                    }
                    return retorno;
                }
            });
        }
    }, {
        key: "_ehFuncao",
        value: function _ehFuncao(func) {
            return (typeof func === "undefined" ? "undefined" : _typeof(func)) == (typeof Function === "undefined" ? "undefined" : _typeof(Function));
        }
    }]);

    return ProxyFactory;
}();
//# sourceMappingURL=ProxyFactory.js.map