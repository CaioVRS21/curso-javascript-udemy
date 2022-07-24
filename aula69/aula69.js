function teste (){
    console.log(arguments); //argumentes é uma varável que guarda todos os parâmetros de uma function (com nome function, arrow functions e outros modelos não se comportam deste modo)
};
//teste('oi', 1, 2, 3, 4, 5, 6, undefined);

function teste2 (a, b = 2, c = 8){ //caso os parâmetros venham vazios (como undefined e/ou não declarados na chamada, é possível adicioar valores padrão para os parâmetros de uma função, valores null, strings vazias e NaN ainda serão recebidos pelos parâmetros)
    console.log( a + b + c );
}
//teste2(5, undefined, NaN);

function teste3 ({nome, sobrenome, idade}){ //desta forma é possível realizar uma atribuição por desestruturação
    console.log(nome, sobrenome, idade)
}
let pessoa = {
    nome: 'Caio',
    sobrenome: 'Veras',
    idade: 21
};
//teste3(pessoa)

function teste3Array ([valor1, valor2, valor3]){ //o mesmo de cima porém em um array
    console.log(valor1, valor2, valor3);
};
const vetor = [1, 2, 3];
teste3Array(vetor);