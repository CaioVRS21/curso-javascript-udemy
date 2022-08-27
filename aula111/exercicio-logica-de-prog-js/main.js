//Aula exercício sobre XMLHttpRequest(GET) (AJAX) e Promises
const request = obj => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(obj.method, obj.url, true);//metodo, oque eu quero obter com este método e se é assíncrono ou não
        xhr.send();//se fosse um post
        xhr.addEventListener('load', () => {
            if (xhr.status >= 200 && xhr.status < 300){ /*Códigos HTTP são números entre 100 e 505, para este exercício só serão aceitos os códigos "duzentos"*/
                resolve(xhr.responseText);
            } else {
                reject(xhr.statusText /*Caso o código não esteja dentro dos 200s será criado um objeto contendo o código e a mensagem relativa ao código, para fins deste exeercício será mostrado apenas o código do erro*/);
            }
        });
    });
};

document.addEventListener('click', e => {
    const el = e.target;
    const tag = el.tagName.toLowerCase();

    if (tag === 'a'){
        e.preventDefault();
        carregaPagina(el);
    }
})

async function carregaPagina(el){
    const href = el.getAttribute('href'); //Para capturar o link que está sendo clicado

    const objConfig = { //igual a request criada no ínicio do código e deve receber as mesmas propriedades
        method: 'GET',
        url: href
    }
    try{
        const response = await request(objConfig)
        carregaResultado(response);
    } catch(e){
        console.log(e)
    }
    
}



function carregaResultado (response){//Para capturar a div resultado e inserir o texto da outra página nesta div
    const resultado = document.querySelector('.resultado'); 
    resultado.innerHTML = response;
}