import { View } from "./View";

export class MensagemView extends View{

    constructor(elemento){
        super(elemento);
    }

    template(model){
        if(model.texto){
            return `<p class="alert alert-info">${model.texto}</p>`;
        } else{
            return '<p></p>';
        }
    }
}