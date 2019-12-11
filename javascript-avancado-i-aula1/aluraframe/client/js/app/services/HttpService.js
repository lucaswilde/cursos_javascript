'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var HttpService = function () {
    function HttpService() {
        _classCallCheck(this, HttpService);
    }

    _createClass(HttpService, [{
        key: 'get',
        value: function get(url) {
            var _this = this;

            /*
            return new Promise((resolve, reject) => {
                let xhr = new XMLHttpRequest();
                xhr.open('GET', url);
                xhr.onreadystatechange = () => {
            */
            /*
                0: requisição ainda não iniciada.
                1: conexão com o servidor estabelecida.
                2: requisição recebida.
                3: processando requisição.
                4: requisição concluída e a resposta esta pronta.
            */
            /*
                    if(xhr.readyState ==4){
                        if(xhr.status == 200){
                            resolve(JSON.parse(xhr.responseText));
                        }else{
                            console.log(xhr.responseText);
                            reject('Não foi possível obter as negociações.');
                        }
                    }
                };
                      xhr.send();
            
            });
            */

            // recurso fetch do ES 2016
            return fetch(url).then(function (res) {
                return _this._handleErrors(res);
            }).then(function (res) {
                return res.json();
            });
        }
    }, {
        key: '_handleErrors',
        value: function _handleErrors(res) {
            if (res.ok) {
                return res;
            } else {
                throw new Error(res.statusText);
            }
        }
    }, {
        key: 'post',
        value: function post(url, dado) {
            var _this2 = this;

            /*
            return new Promise((resolve, reject) => {
                let xhr = new XMLHttpRequest();
                xhr.open('POST', url, true);
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.onreadystatechange = () => {
                    if(xhr.readyState ==4){
                        if(xhr.status == 200){
                            resolve(JSON.parse(xhr.responseText));
                        }else{
                            console.log(xhr.responseText);
                            reject(xhr.responseText);
                        }
                    }
                };
                xhr.send(JSON.stringify(dado)); // usando JSON.stringify para converter objeto em uma string no formato JSON.
            });
            */
            return fetch(url, {
                headers: { 'Content-Type': 'application/json' },
                method: 'post',
                body: JSON.stringify(dado)
            }).then(function (res) {
                return _this2._handleErrors(res);
            });
        }
    }]);

    return HttpService;
}();
//# sourceMappingURL=HttpService.js.map