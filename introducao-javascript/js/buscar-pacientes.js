var botaoBuscar = document.querySelector("#buscar-pacientes");
botaoBuscar.addEventListener("click", function(){
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

  var erroAjax = document.querySelector("#erro-ajax");

  // metodo q sera chamado quando api responder
  xhr.addEventListener("load", function(){
    if (xhr.status == 200){
      erroAjax.classList.add("invisivel");

      var resposta = xhr.responseText;
      console.log(typeof resposta);
      // transforma a resposta do tipo string para o tipo JSON
      var pacientes = JSON.parse(resposta);
      pacientes.forEach(function(paciente){
        adicionaPacienteNaTabela(paciente);
      });
    }else{
      erroAjax.classList.remove("invisivel");
      console.log("Ocorreum erro chamando a api, http status: " + xhr.status);
    }
  });

  xhr.send();
});
