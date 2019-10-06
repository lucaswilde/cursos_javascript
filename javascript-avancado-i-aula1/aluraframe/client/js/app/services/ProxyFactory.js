class ProxyFactory{
    static create(objeto, props, acao){
        
        return new Proxy(objeto, {
            /*
            O target é o objeto real que é encapsulado pela proxy. É este objeto que não queremos "sujar" com armadilhas ou qualquer código que não diga respeito ao modelo.
            O prop é a propriedade em si, que está sendo lida naquele momento.
            O receiver é a referência ao próprio proxy. É na configuração do handler do Proxy que colocamos armadilhas.
            */
            get(target, property, receiver) {
               if(props.includes(property) && ProxyFactory._ehFuncao(target[property])){
                // substitui a funcao do proxy (adiciona ou esvazia) por outra que fará o que precisamos
                return function(){
                    console.log(`a propriedade ${property} foi interceptada`);

                    //Como a função no if, substituirá o método adiciona(), existe um objeto implícito 
                    //chamado arguments que dá acesso a todos os parâmetros passados para a função. 
                    //A seguir, usaremos o Reflect.apply(), e chamaremos uma função.
                    let retorno = Reflect.apply(target[property], target, arguments);

                    acao(target);

                    return retorno;
                };
               }
               return Reflect.get(target, property, receiver);
            },

            set(target, property, value, receiver){
                
                let retorno = Reflect.set(target, property, value, receiver);
                if(props.includes(property)){
                    target[property] = value;
                    acao(target);
                }
                return retorno;
            }

        });

    }

    static _ehFuncao(func){
        return typeof(func) == typeof(Function);
    }
}