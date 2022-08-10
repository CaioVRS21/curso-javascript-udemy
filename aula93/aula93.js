//Prototypes
/*
Javascript é baseado em protótipos para passar propriedades e metódos de um objeto para o outro

Definição de protótipo
Protótipo é o termo usado para se referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções

Todos os objetos tem um referência interna para um protótipo (_proto_) que vem da propriedade prototype da função construtora que foi usada para criá-lo. Quando tantamos acessar um membro nde um objeto, primeiro o motor do JS vai tentar encontrar este membro no próprio objeto e depois a cadeia de protótipos é usada até o topo (null) até encontrar (ou não) tal membro
*/

//Construtora -> molde para gerar novos objetos (classe)
function Pessoa (nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;
    //this.nomeCompleto = () => this.nome + ' ' + this.sobrenome; //Todo metodo dentro da função construtora sobreescreve os que estão no prototype
}

Pessoa.prototype.falaAlgo ='hahahaha'; //O prototype está ligado a função construtora, logo toda const criada com essa funão terá acesso aos mesmos prototypes
Pessoa.prototype.nomeCompleto = function () {return this.nome + ' ' + this.sobrenome};

//Instância = instânciação
const pessoa1 = new Pessoa('Luiz', 'O.'); // <- Pessoa = Função construtora
const pessoa2 = new Pessoa ('Caio', 'V.'); //<- Pessoa = Função construtora

console.dir(pessoa1);
console.dir(pessoa2);