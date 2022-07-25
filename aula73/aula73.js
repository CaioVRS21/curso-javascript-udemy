//calback function

function tempo (min  = 1000, max = 3000){
    const num = Math.random((max - min) + min);
    return num.floor;
}

function f1 (callBack){
    setTimeout(function(){
        console.log('Primeiro');
        if (callBack) callBack();
    }, tempo());
}

function f2 (callBack){
    setTimeout(function(){
        console.log('Segundo');
        if (callBack) callBack();
    }, tempo());
}

function f3 (callBack){
    setTimeout(function(){
        console.log('Terceiro');
        if (callBack) callBack();
    }, tempo());
}

//f1(f1CallBack);

function f1CallBack(){
    f2(f2CallBack);
}

function f2CallBack(){
    f3(f3CallBack);
}

function f3CallBack(){
    console.log('Último');
}

function soma (valor1, valor2, callback){
        result = valor1 + valor2;
        callback(result);
}

function multiplica (valor1, valor2, callback){
        result = valor1 * valor2
        callback(result);
}
function exibir (num){
    console.log('O resultado é ' + num)
}
soma(2, 2, exibir);

multiplica (2, 4, exibir);

