"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Bind = function Bind(model, view) {
    _classCallCheck(this, Bind);

    for (var _len = arguments.length, props = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        props[_key - 2] = arguments[_key];
    }

    var proxy = ProxyFactory.create(model, props, function (model) {
        return view.update(model);
    });
    /*
    ProxyFactory.create(
        new ListaNegociacoes(),
        ['adiciona', 'esvazia'], model =>
        this._negociacoesView.update(model));
        */

    // necessario para renderizar o componente na tela, quando a app esta iniciando, já que ainda não houve mudança
    view.update(model);

    return proxy;
};
//# sourceMappingURL=Bind.js.map