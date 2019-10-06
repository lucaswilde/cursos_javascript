  var tabela = document.querySelector("#tabela-pacientes");
  tabela.addEventListener("dblclick", function(event){
    // Somente executará nosso código caso o elemento em que clicamos seja um <td>
    // isso evita que o cabeçalho (TH) seja remove caso ele for clicado
    if(event.target.tagName == 'TD'){
      //event = tabela
      //target = tb
      //parentNode = tr

      // adiciona efeito de transparencia
      event.target.parentNode.classList.add("fadeOut");

      // espera o efeito completar para remover o elemento
      setTimeout(function(){
        event.target.parentNode.remove();
      }, 500);
    }
  });
