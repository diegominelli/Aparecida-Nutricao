var botaoAdicionar = document.querySelector('#buscar-paciente');
botaoAdicionar.addEventListener('click', function () {
  console.log('Buscar pacientes');

  var xhr = new XMLHttpRequest();
  // Fazendo a conexão com a API
  xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');

  // Retornando os dados da API
  xhr.addEventListener('load', function () {
    var resposta = xhr.responseText;
    // Transformando de string para object
    var pacientes = JSON.parse(resposta);
    // Recebendo o retorno dos pacientes na tabela
    pacientes.forEach(function (paciente) {
      adicionaPacienteNaTabela(paciente);
    });
  });

  xhr.send();
});
