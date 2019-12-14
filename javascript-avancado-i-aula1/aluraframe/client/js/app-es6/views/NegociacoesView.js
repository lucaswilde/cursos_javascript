import {View} from './View';
import {DateHelper} from '../helpers/DateHelper';
import {currentInstance} from '../controllers/NegociacaoController';

export class NegociacoesView extends View{

    constructor(elemento){
        super(elemento);

        elemento.addEventListener('click', function(event){
            if(event.target.nodeName == 'TH'){
                currentInstance().ordena(event.target.textContent.toLowerCase());
            }
        })
    }

    template(listaNogociacoes){
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            
            <tbody>
            </tbody>
                ${listaNogociacoes.negociacoes.map( negociacao => {
                    return `
                    <tr>
                        <td>${DateHelper.dataParaTexto(negociacao.data)}</td>
                        <td>${negociacao.quantidade}</td>
                        <td>${negociacao.valor}</td>
                        <td>${negociacao.volume}</td>
                    </tr
                    `
                }).join('')}
            <tfoot>
                <td colspan="3"></td>
                <td>${listaNogociacoes.volumeTotal}
                </td>
            </tfoot>
        </table>
        `;

        /* 

        3. a forma acima é a abreviação da opção 2. e usando o metodo reduce
        
        2. com programação funcional:
        <tfoot>
            <td colspan="3"></td>
            <td>${listaNogociacoes.negociacoes.reduce(function(total, negociacao){
                        total += negociacao.volume;
                        return total;
                    }, 0.0)
                }
            </td>
        </tfoot>

        1. sem usar programação funcional:

        <tfoot>
            <td colspan="3"></td>
            <td>${(function(){
                    let total = 0;
                    listaNogociacoes.negociacoes.forEach(negociacao => {
                        total += negociacao.volume;
                    });
                    return total;
                })()
                }
            </td>
        </tfoot>
        */
    }
}