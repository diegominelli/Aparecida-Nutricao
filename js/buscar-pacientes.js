var botaoAdicionar = document.querySelector('#buscar-paciente');
botaoAdicionar.addEventListener('click', function () {
  console.log('Buscar pacientes');

  var xhr = new XMLHttpRequest();
  // Fazendo a conexão com a API
  xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');

  var erroAjax = document.querySelector('#erro-ajax');

  // Retornando os dados da API
  xhr.addEventListener('load', function () {
    if (xhr.status == 200) {
      erroAjax.classList.add('invisivel');
      var resposta = xhr.responseText;
      // Transformando de string para object
      var pacientes = JSON.parse(resposta);
      // Recebendo o retorno dos pacientes na tabela
      pacientes.forEach(function (paciente) {
        adicionaPacienteNaTabela(paciente);
      });
    } else {
      console.log(xhr.status);
      console.log(xhr.responseText);

      erroAjax.classList.remove('invisivel');
    }
  });

  xhr.send();
});
