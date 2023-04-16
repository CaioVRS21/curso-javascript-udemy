/*Objetos*/
//Forma literal de construção de um objeto
const pessoa = {
    nome: 'Caio',
    sobrenome: 'Veras'
};

console.log(pessoa);
console.log(pessoa.nome + ' ' + pessoa.sobrenome);
//Estas duas formas de se alcançar as chaves do objeto são iguais
console.log(pessoa['nome'] + ' ' + pessoa['sobrenome'] + ' (com colhetes)');
//Porém somente na notação de colchetes é possível usar uma variável para identificar e posteriormente chamar uma chave
var chave = 'nome'
console.log(pessoa[chave] + ' (com colchetes e varíavel)')

//Outra maneira de se construir um objeto é utilizando "new"
const pessoa2 = new Object;
pessoa2.nome = 'Camille';
pessoa2.sobrenome = 'Beatriz';
console.log(pessoa2)

//Objetos também podem ter dentro de si métodos, que são funções que executam uma ação
pessoa.falarNome = function(){
    nomeCompleto = this.nome + ' ' + this.sobrenome
    return nomeCompleto
};
console.log(`Olá! Meu nome é ${pessoa.falarNome()}`)

//Criando um objeto com uma Factory Function
console.log('Factory Function: ')
function criaPessoa(nome, sobrenome){
    return {
        nome, 
        sobrenome,
        get nomeCompleto(){
            return this.nome + ' ' + this.sobrenome
        }
    }
}

pessoa3 = criaPessoa('Gabriel', 'Melo');
console.log(pessoa3)
console.log(pessoa3.nomeCompleto)

//Criando um objeto com uma Costructor Function
console.log('Construtor Function: ')
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
}

const p1 = new Pessoa('Caio', 'Veras');
const p2 = new Pessoa('Bruno', 'Littaif');
console.log(p1);
console.log(p2);