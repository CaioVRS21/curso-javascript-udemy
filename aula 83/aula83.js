//Concatenando arrays
const a1 = [1, 2, 3];
const a2 = [4, 5, 6];
const a3 = a1 + a2; //Os valores usando este metodo mais convencional até concatena os arrays mas o resultado será '1, 2, 34, 5, 6' e estes valores serão transformados em strings
const a4 = a1.concat(a2); // este modo verdadeiramente concatena o array e mantém seu typeof que é um objeto
const a5 = a1.concat(a2, [7, 8, 9], 'Luiz'); //agora os novos valores também serão adcionados dentro deste novo array que concatena todos os valores em um só grande array
const a6 = [...a1, ...a2];//usando o operador spread (...) para capturar os valores dos outros arrays e colocando eles dentro de um novo array também resulta na concatenação
console.log(a6);