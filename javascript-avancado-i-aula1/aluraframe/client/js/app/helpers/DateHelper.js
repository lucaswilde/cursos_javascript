'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DateHelper = function () {
    function DateHelper() {
        _classCallCheck(this, DateHelper);

        throw new Error('Essa classe não pode ser instanciada.');
    }

    _createClass(DateHelper, null, [{
        key: 'textoParaData',
        value: function textoParaData(texto) {

            // expressão regular
            if (!/\d{4}-\d{2}-\d{2}/.test(texto)) {
                throw new Error('Data deve estar no formato aaaa-mm-dd');
            }

            /*
            ... significa spread, novo funcionalidade a partir do ES6,
            o spread passa para um construtor ou função cada posição do array na ordem para o construtor,
            ou seja, posição um vai para o parametro um e assim por diante
            
            map permite criar um novo array mas executando uma função antes de retornar cada item
            nesse caso quando indice for igual a 1 (valor do mês) será diminuido 1 do mês pois 
            no construtor Date o mes começa em zero
            
            quando uma arrow function tem somente um comando o return já está implicito, ou seja, 
            o item será retornado automaticamente
            */
            var data = new (Function.prototype.bind.apply(Date, [null].concat(_toConsumableArray(texto.split('-').map(function (item, indice) {
                return item - indice % 2;
            })))))();

            return data;
        }
    }, {
        key: 'dataParaTexto',
        value: function dataParaTexto(data) {
            // template string introduzido no ES6, evita a contatenação
            return data.getDate() + '/' + (data.getMonth() + 1) + '/' + data.getFullYear();
        }
    }]);

    return DateHelper;
}();
//# sourceMappingURL=DateHelper.js.map