const { check, validationResult } = require('express-validator/check');

class Livro{
    static validacoes(){
        return [
            check('titulo').isLength({min: 5}).withMessage('Título deve conter no mínimo 5 caracteres!'),
            check('preco').isCurrency().withMessage('O Preço deve ser um valor monetário!')
        ];
    }
}

module.exports = Livro;