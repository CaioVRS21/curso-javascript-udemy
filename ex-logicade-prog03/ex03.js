//Criar uma função que lê um número entre 0 a 100 e retorna os seguintes valores
//Se o número for divisível por 3: Fizz
//Se o número for divisível po 5: Buzz
//Se o número é divisível por 3 e 5: FizzBuzz
//Se o número não for divisível por 3 e 5: Retorna o próprio número
//Checar se o número é realmente um número

function fizzBuzz(num){
    if (typeof num !== 'number') return num;
    if (num % 3 === 0 && num % 5 === 0) return 'FizzBuzz';
    if (num % 3 === 0) return 'Fizz';
    if (num % 5 === 0) return 'Buzz';
    if (num % 3 != 0 && num % 5 != 0) return num;
    
}
for ( i = 0; i <= 100; i++){
    console.log(i, fizzBuzz(i))
}

