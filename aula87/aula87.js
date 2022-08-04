//Unindo filter, map e reduce
//Obter todos os números pares (filter)
//Dobrar os números encontrados (map)
//Somar o dobro de todos os pares (reduce)
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

const result = numeros
.filter(valor => valor % 2 === 0)
.map(valor => valor *2)
.reduce((ac, valor) => ac + valor)
console.log(result)