class Bind{
    constructor(model, view, ...props){
        let proxy = ProxyFactory.create(model, props, model => 
            view.update(model)
        );
        /*
        ProxyFactory.create(
            new ListaNegociacoes(),
            ['adiciona', 'esvazia'], model =>
            this._negociacoesView.update(model));
            */
        
        // necessario para renderizar o componente na tela, quando a app esta iniciando, já que ainda não houve mudança
        view.update(model);

        return proxy;
    }
}