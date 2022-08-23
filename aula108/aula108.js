//Promises
//Promise é um objeto usado para processamento assíncrono. Uma Promise (de "promessa") representa um valor que pode estar disponível agora, no futuro ou nunca.
function rand(min, max){
    max *= 1000;
    min *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) =>{ //new Promise cria a constructor de uma nova Promise que deve obrigatóriamente receber os parametros resolve (que recebe o bloco de código que será executado no .then) e reject(que recebe o erro que irá para o .catch)
        if (typeof msg !== 'string') reject (new Error('ERRO'))
        setTimeout(()=> {
            resolve(msg);
        }, tempo);
    });
}

esperaAi('Frase 1', rand(1, 3))
.then(resposta => { //.then executa uma arrow function que executa um bloco de código que só será executado somente após a execução da função principal pelo qual o .then está ligado e cada then ligado a frase será executado em ordem, independente do tempo que cada função será executada elas serão executadas em ordem
    console.log(resposta)
    return esperaAi('Frase 2', rand(1, 3))
})
.then(resposta => {
    console.log(resposta)
    return esperaAi(0, rand(1, 3))
})
.then(reposta => {
    console.log(reposta)
})
.catch(e => {
    console.log('ERRO: ', e); //.catch vai receber a mensagem de erro vinda de reject e cortar a Promisses independente de onde o erro ocorreu
})

//Porém todo e qualquer outro código que não está ligado a esta Promise ainda será executado normalmente e em paralelo, o JS não vai esperar até que as Promisses se realizem para executar as demais funções