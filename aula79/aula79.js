//Funções recursivas são, a grosso modo, funções que se chamam, mais ou menos como uma estrutura de repetição, mas a recursividade tem um limite de aproximadamente 1000 funções recursivas

function conta(max){
    console.log(max);
    if (max >= 10) return; //assim que atingir o limite a função não mais será executada
    max++; //a cada loop max soma mais um
    conta(max); //ao fim da execução do código a função chama a si própria
}
conta(0);