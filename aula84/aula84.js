//Filter, map e reduce em arrays

//Filter vai sempre retornar um array com a mesma quantidade de elementos ou menos
//retorne os valores maiores que 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const maior = []
// for (let valor of numeros){
//     if (valor > 10){
//         maior.push(valor);
//     };
// }
// console.log(maior)
const callbackFilter = (valor) => { //a ordem dos paramteros é valor do índice, índice, valor completo do array
    return valor > 10; //se uma função precisa retornar um valor booleano, substitua o if e else pela própria condição, o retorno de true e false é automático
}
const numerosFiltrados = numeros.filter(callbackFilter); //o metodo filter recebe uma callback contendo o modo como a filtragem dos valores do array será feita
//console.log(numerosFiltrados, 'Essa é a numerosFiltrados');

//O jeito mais comum de se usar o filter é passando uma função anônima:
const numerosFiltrados2 = numeros.filter(function (valor){
    return valor > 10;
})
//console.log(numerosFiltrados2, 'Essa é a numerosFiltrados2');

//mas para reduzir ainda mais o código pode-se usar uma arrow function:
const numerosFiltrados3 = numeros.filter(valor => valor > 10)
//console.log(numerosFiltrados3, 'Essa é a numerosFiltrados3');



//Retorne as pessoas que tem o nome com 5 letras ou mais
//Retorna as pessoas com mais de 50 anos
//Retorne as pessoas cujo nome termina com a
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length > 5 //retorna um objeto
)
console.log(pessoasComNomeGrande);
const pessoasMaisVelhas = pessoas.filter(obj => obj.idade > 50)
console.log(pessoasMaisVelhas);
const nomeTerminaComA = pessoas.filter(obj => obj.nome.toLowerCase().endsWith('a')); //colocar os nomes em minusculo e detectar se eles terminam com 'a'
console.log(nomeTerminaComA)