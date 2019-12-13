const stores = ['negociacoes'];
const version = 4;
const dbName = 'aluraframe';

let connection = null;
let close = null;

export class ConnectionFactory{
    constructor(){
        throw new Error('Não é possivel criar instâncias de ConnectionFactory');
    }

    static getConnection(){
        return new Promise((resolve, reject) => {
            let openRequest = window.indexedDB.open(dbName, version);

            openRequest.onupgradeneeded = e =>{
                console.log('getConnection, onupgradeneeded');
                ConnectionFactory._createStores(e.target.result);
            };
            
            openRequest.onsuccess = e => {
                console.log('getConnection, onsuccess: connection=' + connection);

                // se null, cria pega uma nova conexão
                if(!connection){ 
                    connection = e.target.result;
                    close = connection.close.bind(connection);
                    connection.close = function() {
                        throw new Error('Você não pode fechar diretamente a conexão');
                    };
                }
                resolve(connection);
            };
            
            openRequest.onerror = e => {
                console.log('getConnection, onerror');
                reject(e.target.error.name);
            }
        });
    }
    
    static _createStores(connection){
        stores.forEach(store => {
            if(connection.objectStoreNames.contains(store)) {
                connection.deleteObjectStore(store);
            }
    
            connection.createObjectStore(store, {autoIncrement: true});
        });
    }

    static closeConnection(){
        if(connection){
            close();
            connection = null;
        }
    }
}
