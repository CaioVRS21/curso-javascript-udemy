// Funções construtoras
//Tanto as construtoras qnto as factory criam objeto mas as construtoras são mais automatizadas em certos aspectos
//Construtoras precisam começar com letra maiúscula e um parâmetro new
//New automaticamente um onjeto vazio e faz o this. apontar para esse objeto vazio e retorna esse objeto, tirando a necessidade de usar return
function Pessoa (nome, sobrenome){
    //Essas variaveis são atributos e/ou metodos privados, inalcansaveis por notação de ponto e não podem ser acessados fora do corpo desta função
    const ID = 12345;
    const metodo = e => {
        console.log('Oi')
    };
    //Atributos ou metodos públicos
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p1 = new Pessoa('Caio', 'Veras');
console.log(p1) //Retorna um objeto com as chaves nome e sobrenome
const p2 = new Pessoa('Maria', 'Ester');
console.log(p2.metodo);