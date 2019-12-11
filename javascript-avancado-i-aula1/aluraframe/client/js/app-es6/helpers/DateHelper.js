class DateHelper {
    
    constructor(){
        throw new Error('Essa classe não pode ser instanciada.');
    }

    static textoParaData(texto){

        // expressão regular
        if(!/\d{4}-\d{2}-\d{2}/.test(texto)){
            throw new Error('Data deve estar no formato aaaa-mm-dd')
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
       let data = new Date(...texto
        .split('-')
        .map((item, indice) => item - indice % 2)
        );

        return data;
    }

    static dataParaTexto(data){
        // template string introduzido no ES6, evita a contatenação
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`;
    }
}