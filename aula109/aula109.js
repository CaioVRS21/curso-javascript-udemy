//Métodos úteis para Promisses
function rand(min, max){
    max *= 1000;
    min += 1000;
    return Math.floor(Math.random() * (max - min) + min);
}

function esperaAi(msg, tempo){
    return new Promise((resolve, reject) => {
        if (typeof msg !== 'string') {
            reject ('ERROR')
            return;
        };
        setTimeout(() => {
            resolve(msg);
        }, tempo);
    });
};

const promessas = [
    esperaAi('Promise1', rand(1, 3)),
    esperaAi('Promise2', rand(1, 3)),
    esperaAi('Promise3', rand(1, 3)),
    esperaAi('1000', rand(1, 3))
]

//Promisse.all retorna um array com os valores de todas as promisses resolvidas de uma só vez, por isso só é necessário um then e um catch que atuará em todos as Promisses passadas no all
// Promise.all(promessas)
// .then(valor => {
//     return console.log(valor);
// })

//Promise.race retorna a primeira Promisse resolvida, valores sozinhos serão sempre retornados nesta chamada uma vez que eles são como funções já resolvidas e erros também são retornados imediataente
// Promise.race(promessas)
// .then(valor => {
//      console.log(valor);
// })
// .catch(erro => {
//      console.log(erro)
// })

//Promise.resolve e Promise.reject retorna uma promessa resolvida e uma rejeitada respectivamente

function baixaPagina(){
    const emCache = true;
    if (emCache){
        // return Promise.resolve('Página em cache'); //É mais usada para situações onde já possuo os dados de uma condição como aqui e uma função de fato só será executada caso a coondição não for verdadeira

        return Promise.reject('Página em cache') //É todo valor passado em uma reject cai imediatmente no catch
    } else {
        return esperaAi('Baixei a página', rand(1, 3));
    }
}

baixaPagina()
.then(dadosPagina => {
    console.log(dadosPagina);
})
.catch(e => {console.log(e)})