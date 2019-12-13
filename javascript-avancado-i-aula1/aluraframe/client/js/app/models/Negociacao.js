"use strict";

System.register([], function (_export, _context) {
    "use strict";

    var _createClass, Negociacao;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    return {
        setters: [],
        execute: function () {
            _createClass = function () {
                function defineProperties(target, props) {
                    for (var i = 0; i < props.length; i++) {
                        var descriptor = props[i];
                        descriptor.enumerable = descriptor.enumerable || false;
                        descriptor.configurable = true;
                        if ("value" in descriptor) descriptor.writable = true;
                        Object.defineProperty(target, descriptor.key, descriptor);
                    }
                }

                return function (Constructor, protoProps, staticProps) {
                    if (protoProps) defineProperties(Constructor.prototype, protoProps);
                    if (staticProps) defineProperties(Constructor, staticProps);
                    return Constructor;
                };
            }();

            _export("Negociacao", Negociacao = function () {
                function Negociacao(data, quantidade, valor) {
                    _classCallCheck(this, Negociacao);

                    // underscore é uma convenção indicando ao progrador que o atributo deve ser imutavel
                    this._quantidade = quantidade;
                    this._valor = valor;
                    // criamos um new Date para previnir que a data seja alterada posteriormente, ou seja, programação defensiva
                    this._data = new Date(data.getTime());

                    // torna este objeto imutavel, porem apenas para os atributo quantidade e valor,
                    // a data é um objeto portanto devemos usar outras maneiras de deixa-la imutavel pois o freeze é shallow (razo)
                    Object.freeze(this);
                }

                _createClass(Negociacao, [{
                    key: "quantidade",
                    get: function get() {
                        return this._quantidade;
                    }
                }, {
                    key: "valor",
                    get: function get() {
                        return this._valor;
                    }
                }, {
                    key: "data",
                    get: function get() {
                        // // criamos um new Date para previnir que a data seja alterada posteriormente, ou seja, programação defensiva
                        return new Date(this._data);
                    }
                }, {
                    key: "volume",
                    get: function get() {
                        return this._quantidade * this._valor;
                    }
                }]);

                return Negociacao;
            }());

            _export("Negociacao", Negociacao);
        }
    };
});
//# sourceMappingURL=Negociacao.js.map