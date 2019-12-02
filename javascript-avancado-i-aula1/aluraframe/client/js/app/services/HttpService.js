class HttpService {

    get(url){
        return new Promise((resolve, reject) => {
            let xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.onreadystatechange = () => {
                /*
                    0: requisição ainda não iniciada.
                    1: conexão com o servidor estabelecida.
                    2: requisição recebida.
                    3: processando requisição.
                    4: requisição concluída e a resposta esta pronta.
                */
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
    }

    post(url, dado){
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
    }
}