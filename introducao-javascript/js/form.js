// seleciona por tag
//var titulo = document.querySelector("h1");
// seleciona por CSS selector
var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionistas";

var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
  // previne o submit do formulario e por consequencia o recarregamento do formulario
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");
  var paciente = obtemPacienteDoFormulario(form);

  var erros = validaPaciente(paciente);
  if(erros.length > 0){
      exibeMensagensDeErro(erros);
      return;
  }

  adicionaPacienteNaTabela(paciente);

  form.reset();
  var ul = document.querySelector("#mensagens-erros");
  ul.innerHTML = "";
});

function adicionaPacienteNaTabela(paciente){
  var trPaciente = montaTr(paciente);
  document.querySelector("#tabela-pacientes").appendChild(trPaciente);
}

function obtemPacienteDoFormulario(form){
  var paciente = {
    // o form prove acesso ao elemento input como se fossem propriedades do form
    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaImc(form.peso.value, form.altura.value)
  }
  return paciente;
}

function montaTd(dado, classe){
  var td = document.createElement("td");
  td.classList.add(classe);
  td.textContent = dado;
  return td;
}

function montaTr(paciente){
  var tr = document.createElement("tr");
  tr.classList.add("paciente");
  tr.appendChild(montaTd(paciente.nome, "info-nome"));
  tr.appendChild(montaTd(paciente.peso, "info-peso"));
  tr.appendChild(montaTd(paciente.altura, "info-altura"));
  tr.appendChild(montaTd(paciente.gordura, "info-gordura"));
  tr.appendChild(montaTd(paciente.imc, "info-imc"));
  return tr;
}

function validaPaciente(paciente) {

    var erros = [];

    if (paciente.nome.length == 0) {
        erros.push("O nome não pode ser em branco");
    }

    if (paciente.gordura.length == 0) {
        erros.push("A gordura não pode ser em branco");
    }

    if (paciente.peso.length == 0) {
        erros.push("O peso não pode ser em branco");
    }

    if (paciente.altura.length == 0) {
        erros.push("A altura não pode ser em branco");
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida");
    }

    return erros;
}

function exibeMensagensDeErro(erros){
  var ul = document.querySelector("#mensagens-erros");
  ul.innerHTML = "";

  erros.forEach(function(erro){
    var li = document.createElement("li");
    li.textContent = erro;
    ul.appendChild(li);
  });
}
