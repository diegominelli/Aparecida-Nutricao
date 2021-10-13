var botaoAdicionar = document.querySelector('#buscar-paciente');
botaoAdicionar.addEventListener('click', function () {
  console.log('Buscar pacientes');

  var xhr = new XMLHttpRequest();
  // Fazendo a conexão com a API
  xhr.open('GET', 'https://api-pacientes.herokuapp.com/pacientes');

  // Retornando os dados da API
  xhr.addEventListener('load', function () {
    console.log(xhr.responseText);
  });

  xhr.send();
});
