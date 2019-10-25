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

    buscaPorId(id){
        return new Promise((resolve, reject) => {
            this._db.get(
                    'select * from livros where id = ?'
                    , [id]
                    , function(err, resultado){
                        if(err){
                            console.log(err);
                            return reject('Não foi possivel bucar o livro');
                        }
                        resolve(resultado);
                    }
                )
        });
    }
    
    atualiza(livro){
        return new Promise((resolve, reject) => {
                 this._db.run(
                    'update livros set titulo = ?, preco = ?, descricao = ? where id = ?'
                    , [livro.titulo, livro.preco, livro.descricao, livro.id]
                    , function(err){
                        if(err){
                            console.log(err);
                            return reject('Não foi possivel atualizar o livro');
                        }
                        resolve();
                    }
                )
        });
    }

    remove(id){
        return new Promise((resolve, reject) => {
                 this._db.run(
                    'delete from livros where id = ?'
                    , [id]
                    , function(err){
                        if(err){
                            console.log(err);
                            return reject('Não foi possivel remover o livro');
                        }
                        resolve();
                    }
                )
        });
    }
}

module.exports = LivroDao;