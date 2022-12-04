//Aula exercício sobre Fetch API
// const request = obj => {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open(obj.method, obj.url, true);//metodo, oque eu quero obter com este método é saber se é assíncrono ou não
//         xhr.send();//se fosse um post
//         xhr.addEventListener('load', () => {
//             if (xhr.status >= 200 && xhr.status < 300){ /*Códigos HTTP são números entre 100 e 505, para este exercício só serão aceitos os códigos "duzentos"*/
//                 resolve(xhr.responseText);
//             } else {
//                 reject(xhr.statusText /*Caso o código não esteja dentro dos 200s será criado um objeto contendo o código e a mensagem relativa ao código, para fins deste exeercício será mostrado apenas o código do erro*/);
//             }
//         });
//     });
// };

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a'){
        e.preventDefault();
        carregaPagina(el);
    }
})

 async function carregaPagina(el){
    try {
    const href = el.getAttribute('href'); //Para capturar o link que está sendo clicado
    const response = await fetch(href);
    if (response.status !== 200) throw new Error('ERRO');
    const html = await response.text();
    carregaResultado(html);
    } catch {(e => console.log(e))}
    // const objConfig = { //igual a request criada no ínicio do código e deve receber as mesmas propriedades
    //     method: 'GET',
    //     url: href
    // }
}



function carregaResultado (response){//Para capturar a div resultado e inserir o texto da outra página nesta div
    const resultado = document.querySelector('.resultado'); 
    resultado.innerHTML = response;
}






// fetch('Pagina1.html')
// .then(resposta => {
//     if (resposta.status !== 200) throw new Error('ERROR')
//     return resposta.text(); //também retorna uma promise e para buscar uma promise dentro de um then se usa outro then
// }).then(html => {
//     const resultado = document.querySelector('.resultado'); 
//     resultado.innerHTML = html;
// })
// .catch(e => console.log(e)); //O fetch retorna por padrão uma promise