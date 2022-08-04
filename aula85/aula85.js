//Map
//Diferente do filter, map retorna um array do mesmo tamanho original porém com seus valores alterados

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const numerosDobrados = numeros.map(valor => valor * 2);
//console.log(numerosDobrados);



//Retorne apenas uma string com o nome da pessoa
//Remova apenas a chave nome do objeto
//Adicione uma chave id em cada objeto
const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 32},
    {nome: 'Wallace', idade: 47},
];

//Map altera os dados do array original, então para não perder os dados ou modificar o array original o melhor é copiar o array 'const newObj = [...pessoas]'

//const nomePessoa = pessoas.map(obj => obj.nome);
//console.log(nomePessoa);
// const removeNome = pessoas.map(obj => {
//     delete obj.nome
//     return obj})
//console.log(removeNome);
//outro metodo de remover a chave nome é criar um novo objeto sem essa chave:
//const removeNome2 = pessoas.map(obj => ({idade: obj.idade}))
//console.log(removeNome2);
const addId = pessoas.map((obj, indice) => {
    const newObj = {...obj}
    newObj.id = indice + 1
    return newObj;
})
console.log(addId)
console.log(pessoas)