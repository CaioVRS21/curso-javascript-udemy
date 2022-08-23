//Async/Await
function rand(min, max){
    max *= 1000;
    min *= 1000;
    return Math.floor(Math.random() * (max - min) + min);
};

function esperaAi(msg, tempo){
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('ERROR') 
                return
            };

            resolve (msg.toUpperCase() + ' - passei na Promise')
        }, tempo)
    })
}

// esperaAi('Fase 1', rand(1, 3))
// .then(resposta =>{
//     console.log(resposta);
//     return esperaAi('Fase 2', rand(1, 3));
// })
// .then(resposta => {
//     console.log(resposta);
//     return esperaAi('Fase 3', rand(1, 3));
// })
// .then(resposta => {
//     console.log(resposta);
// })
// .catch(e => e);


//Com async e await o mesmo código feito acima pode ser refeito de forma bem mais limpa, utilizadno async e await
//O try catch pode ser usado neste caso do jeito que está no exemplo abaixo mas ainda é possível usar .catch em cada uma das funções
async function executa (){
    try{
    const fase1 = await esperaAi('fase 1', rand(1, 3));
    console.log(fase1);
    const fase2 = await esperaAi(3, rand(1, 3));
    console.log(fase2);
    const fase3 = await esperaAi('fase 3', rand(1, 3));
    console.log(fase3);
    console.log('Finalizamos na fase:', fase3)
} catch(e){
    console.log(e)
}
}
executa();
