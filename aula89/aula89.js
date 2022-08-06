//Recaptuando Objetos
//Objetos são constituidos de um par de chaves '{}' e valores inseridos nessas chaves, sejam eles funções, strings, números e etc.
//Ex.:
const pessoa = {
    nome: 'Caio',
    sobrenome: 'Veras'
};
const chave = 'nome'
//console.log(pessoa.nome); //chamada por notação de ponto, mais simples e intuítiva
//console.log(pessoa['sobrenome']); //chamada por colchetes, melhor para acessar valores dinâmicos
//console.log(pessoa[chave]);

//Constructor de objetos
const pessoa1 = new Object();
pessoa1.nome = 'Caio';
pessoa1.sobrenome = 'Veras'
pessoa1.falarNome = function() {
    return `${this.nome} está dizendo seu nome`; //É possível também inserir funções/metodos dentro de um objeto fazendo com que estas tenham acesso aos elementos do objeto
};
//console.log(pessoa1.nome);
pessoa1.falarNome();

//Para apagar uma chave
//delete pessoa1.nome;
//console.log(pessoa1);

//Factory Functions para criar modelos de objetos
function criaPessoa (nome, sobrenome) {
    return {
        nome,
        sobrenome,
        get nomeCompleto () {
            return `${this.nome} ${this.sobrenome}`;
        }
    };
};
//const p1 = criaPessoa('Caio', 'Veras')
//console.log(p1.nomeCompleto) //por ser um getter os () após nomeCompleto são desnecessários

//Constructor function para criação de objetos
function Pessoa (nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}
//new cria um objeto vazio e atrela a palavra this. a este objeto vazio e retorna o valor deste this.
const p2 = new Pessoa('Caio', 'Veras');
//console.log(p2) //automaticamente retorna um objeto

//Para "congelar" um objeto e deixar seus valores inalteráveis
Object.freeze(p2);