'use strict';

System.register(['./View', '../helpers/DateHelper'], function (_export, _context) {
    "use strict";

    var View, DateHelper, _createClass, NegociacoesView;

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }

        return call && (typeof call === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
        }

        subClass.prototype = Object.create(superClass && superClass.prototype, {
            constructor: {
                value: subClass,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    return {
        setters: [function (_View2) {
            View = _View2.View;
        }, function (_helpersDateHelper) {
            DateHelper = _helpersDateHelper.DateHelper;
        }],
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

            _export('NegociacoesView', NegociacoesView = function (_View) {
                _inherits(NegociacoesView, _View);

                function NegociacoesView(elemento) {
                    _classCallCheck(this, NegociacoesView);

                    return _possibleConstructorReturn(this, (NegociacoesView.__proto__ || Object.getPrototypeOf(NegociacoesView)).call(this, elemento));
                }

                _createClass(NegociacoesView, [{
                    key: 'template',
                    value: function template(listaNogociacoes) {
                        return '\n        <table class="table table-hover table-bordered">\n            <thead>\n                <tr>\n                    <th onclick="negociacaoController.ordena(\'data\')">DATA</th>\n                    <th onclick="negociacaoController.ordena(\'quantidade\')">QUANTIDADE</th>\n                    <th onclick="negociacaoController.ordena(\'valor\')">VALOR</th>\n                    <th onclick="negociacaoController.ordena(\'volume\')">VOLUME</th>\n                </tr>\n            </thead>\n            \n            <tbody>\n            </tbody>\n                ' + listaNogociacoes.negociacoes.map(function (negociacao) {
                            return '\n                    <tr>\n                        <td>' + DateHelper.dataParaTexto(negociacao.data) + '</td>\n                        <td>' + negociacao.quantidade + '</td>\n                        <td>' + negociacao.valor + '</td>\n                        <td>' + negociacao.volume + '</td>\n                    </tr\n                    ';
                        }).join('') + '\n            <tfoot>\n                <td colspan="3"></td>\n                <td>' + listaNogociacoes.volumeTotal + '\n                </td>\n            </tfoot>\n        </table>\n        ';

                        /* 
                          3. a forma acima é a abreviação da opção 2. e usando o metodo reduce
                        
                        2. com programação funcional:
                        <tfoot>
                            <td colspan="3"></td>
                            <td>${listaNogociacoes.negociacoes.reduce(function(total, negociacao){
                                        total += negociacao.volume;
                                        return total;
                                    }, 0.0)
                                }
                            </td>
                        </tfoot>
                          1. sem usar programação funcional:
                          <tfoot>
                            <td colspan="3"></td>
                            <td>${(function(){
                                    let total = 0;
                                    listaNogociacoes.negociacoes.forEach(negociacao => {
                                        total += negociacao.volume;
                                    });
                                    return total;
                                })()
                                }
                            </td>
                        </tfoot>
                        */
                    }
                }]);

                return NegociacoesView;
            }(View));

            _export('NegociacoesView', NegociacoesView);
        }
    };
});
//# sourceMappingURL=NegociacoesView.js.map