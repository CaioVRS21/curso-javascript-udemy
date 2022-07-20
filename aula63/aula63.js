//tratamento de erros com try, catch, throw e finally

function soma (x, y){
    if (typeof x !== 'number' || typeof y !== 'number'){
    throw(
        '[ERROR] x e y precisam ser números'
    )}
    return x + y;
}

try {
    console.log(soma(3,4));
    console.log(soma('3', 4));
} catch (error){
    console.log(error)
} finally {
    console.log('Fim da execução')
}