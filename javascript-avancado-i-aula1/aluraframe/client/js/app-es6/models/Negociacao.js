export class Negociacao {
    constructor(data, quantidade, valor){
        // underscore é uma convenção indicando ao progrador que o atributo deve ser imutavel
        this._quantidade = quantidade;
        this._valor = valor;
        // criamos um new Date para previnir que a data seja alterada posteriormente, ou seja, programação defensiva
        this._data = new Date(data.getTime());

        // torna este objeto imutavel, porem apenas para os atributo quantidade e valor,
        // a data é um objeto portanto devemos usar outras maneiras de deixa-la imutavel pois o freeze é shallow (razo)
        Object.freeze(this);
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

    get data() {
        // // criamos um new Date para previnir que a data seja alterada posteriormente, ou seja, programação defensiva
        return new Date(this._data);
    }

    get volume() {
        return this._quantidade * this._valor;
    }
}