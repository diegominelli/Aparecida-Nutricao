var titulo = document.querySelector('.titulo');
titulo.textContent = 'Aparecida Nutricionista';

var pacientes = document.querySelectorAll('.paciente');

for (var i = 0; i < pacientes.length; i++) {
  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector('.info-peso');
  var peso = tdPeso.textContent;

  var tdAltura = paciente.querySelector('.info-altura');
  var altura = tdAltura.textContent;

  var resultado = paciente.querySelector('.info-imc');

  var pesoValido = true;
  var alturaValida = true;

  if (peso <= 0 || peso >= 1000) {
    console.log('Peso inválido!');
    pesoValido = false;
    resultado.textContent = 'Peso inválido!';
    paciente.classList.add('paciente-invalido');
  }

  if (altura <= 0 || altura >= 3.0) {
    console.log('Altura inválida!');
    alturaValida = false;
    resultado.textContent = 'Altura inválida!';
    paciente.classList.add('paciente-invalido');
  }

  if (pesoValido && alturaValida) {
    var imc = peso / (altura * altura);
    resultado.textContent = imc.toFixed(2);
  }
}
