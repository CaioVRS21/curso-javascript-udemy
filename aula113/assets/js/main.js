// fetch('pessoas.json')
// .then(resposta => resposta.json())
// .then(json => carregaElementosNaPagina(json))
axios('pessoas.json')
.then(resposta => carregaElementosNaPagina(resposta.data))

function carregaElementosNaPagina(jsonDados){
  const table = document.createElement('table')
  const resultado = document.querySelector('.resultado')
  for (let pessoa of jsonDados){
    const tr = document.createElement('tr')
    const tdNome = document.createElement('td')
    tdNome.innerHTML = pessoa.nome;
    tr.appendChild(tdNome)

    const tdIdade = document.createElement('td')
    tdIdade.innerHTML = pessoa.idade;
    tr.appendChild(tdIdade)

    const tdSalario = document.createElement('td')
    tdSalario.innerHTML = pessoa.salario;
    tr.appendChild(tdSalario)
    table.appendChild(tr)
  }
  resultado.appendChild(table)
}
