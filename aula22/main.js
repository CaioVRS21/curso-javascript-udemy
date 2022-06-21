let A = 'A'
let B = 'B'
let C = 'C'

function modificaVAR(){
    let A = 'B'
    let B = 'C'
    let C = 'A'

    console.log(A, B, C);
}

modificaVAR(A, B, C)

//outro metodo

var ATemp = A; //valor de A salvo em outra variável
A = B
B = C
C = ATemp

console.log(A, B, C)