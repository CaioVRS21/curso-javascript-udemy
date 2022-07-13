//Atribuição via desestruturação de Arrays
// let a = 'A'
// let b = 'B'
// let c = 'C'
// const letras = [b, c, a];
// [a , b ,c] = letras;
// console.log(a, b, c)

const listas = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] //para buscar o número 6 faz-se a seguinte operação
//Uma maneira mais fácil de se obter um valor dentro de uma lista dentro do array principal é o seguinte:
const [lista1, lista2, lista3] = listas //cada variavel recebe uma lista
console.log(lista2[2])//será printado o valor do índice 2 (seis) da segunda lista (valor da variavel lista 2)
// const [,[, , seis]] = listas //o primeiro espaço é para pular a primeira lista presente no index 0 do array principal, então abre-se outro colchtes já que queremos um elemento de dentro da segunda lista, dois espaços para pular os números 4 e 5 e então o nome da váriavel
// console.log(seis)


//const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//const [um, , tres, , cinco] = numeros //os espaços entre as variáveis também estão ligados aos index do array, as variaveis irão apenas receber o valor as quais estão atribuidos, se tem um espaço vazio no index 1 (número dois) então o valor desse index não será atribuido a ninguém
//console.log(um, tres, cinco)



//const [primeiroNumero, segundoNumero, ...resto] = numeros //primeiroNumero e segundoNumero recebem o primeiro e o segundo valor do array respctivamente, caso houvesse 9 variáveis cada uma receberia em ordem o valor do respectivo índice do array, assim o desestruturando
//console.log(primeiroNumero, segundoNumero)
//console.log(resto) // as reticências nesse caso são chamadas de rest operator, elas atribuem a variavel a qual estão ligadas todos os valores restantes de um array