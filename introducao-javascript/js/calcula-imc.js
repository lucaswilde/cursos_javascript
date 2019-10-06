var pacientes = document.querySelectorAll(".paciente");
for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  var peso = paciente.querySelector(".info-peso").textContent;
  var altura = paciente.querySelector(".info-altura").textContent;

  var alturaEhValida = true;
  var pesoEhValido = true;
  var imc;

  if(!validaPeso(peso)){
    pesoEhValido = false;
    imc = "Peso invalido";
  }

  if(altura < 0 || altura >= 3){
    alturaEhValida = false;
    imc = "Altura invalido";
  }

  if(alturaEhValida && pesoEhValido){
    imc = calculaImc(peso, altura);
  }else{
    paciente.classList.add("paciente-invalido");
  }

  paciente.querySelector(".info-imc").textContent = imc;
}

function calculaImc(peso, altura){
  var imc = 0;
  imc = peso / (altura * altura);
  // arredonda para 2 casas decimais
  return imc.toFixed(2);
}

function validaPeso(peso){
  if(peso > 0 && peso < 1000){
    return true;
  }else {
    return false;
  }
}

function validaAltura(altura){
  if(altura > 0 && altura <= 3.0){
    return true;
  }else {
    return false;
  }
}
