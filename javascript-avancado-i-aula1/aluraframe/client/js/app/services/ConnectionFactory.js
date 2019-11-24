// O padrão de projeto Module Pattern
var ConnectionFactory = (function () {

    var stores = ['negociacoes'];
    var version = 4;
    var dbName = 'aluraframe';
    var connection = null;
    
    return class ConnectionFactory{
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
                    }
                    resolve(e.target.result);
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
    }
}) ();