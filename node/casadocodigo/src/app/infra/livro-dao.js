class LivroDao{
    constructor(db){
        this._db = db;
    }

    lista(){
        return new Promise((resolve, reject) => {
            this._db.all(
                'select * from livros', 
                (erro, resultados) => {
                    if(erro) return reject('Não foi possivel listar livros, erro: '+ erro)

                    return resolve(resultados);
                }
            )
        });

    }

    adiciona(livro){
        return new Promise((resolve, reject) => {
            // run é um metodo do sqlite que executa queries sem retornar um resultado
            this._db.run(
                    'insert into livros (titulo, preco, descricao) values (?,?,?)'
                    , [livro.titulo, livro.preco, livro.descricao]
                    , function(err){
                        if(err){
                            console.log(err);
                            return reject('Não foi possivel adicionar o livro');
                        }
                        resolve();
                    }
                )
        });
    }
}

module.exports = LivroDao;