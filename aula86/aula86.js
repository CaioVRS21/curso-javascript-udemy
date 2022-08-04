//reduce
//Tem o papel de reduzir um array a um único elemento
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];
const pares = numeros.filter(valor => valor % 2 == 0);
//console.log(pares);
const dobro = numeros.map(valor => valor * 2);
//console.log(dobro);
const somaTudo = numeros.reduce((acumulador, valor) => { //O valor o acumulador é por definição o primeiro elemento do array, esse valor pode ser alterado
    acumulador += valor
    return acumulador;
}); //pra definir um valor inicial para o acumulador coloca no final "}, valor desejado)"
//console.log(somaTudo);
const pares2 = numeros.reduce((acumulador, valor) => {
    if (valor % 2 === 0) acumulador.push(valor)
    return acumulador;
}, []) //nesse exemplo o valor inicial do acumulador é um array vazio, a cada interação do laço a função vai checar se o resto de uma divisão é 0 (logo o número é par) e adicionar esse valor no acumulador
//console.log(pares2);
const dobro2 = numeros.reduce((acumulador, valor) => {
    acumulador.push(valor * 2)
    return acumulador;
}, [])
//console.log(dobro2);

const pessoas = [
    {nome: 'Luiz', idade: 62},
    {nome: 'Maria', idade: 23},
    {nome: 'Eduardo', idade: 55},
    {nome: 'Leticia', idade: 19},
    {nome: 'Rosana', idade: 64},
    {nome: 'Wallace', idade: 63},
];

const pessoaMaisVelha = pessoas.reduce((acumulador, valor) => { //nesses casos o valor é sempre o segundo objeto
    if (acumulador.idade > valor.idade) return acumulador; //a comparação é, o primeiro elemento é maior que o segundo? se sim, retorna o acumulador, se não, o valor recebe o acumulador e retorna o valor
    return valor; //quem for mais velho vira o acumulador
})
console.log(pessoaMaisVelha);