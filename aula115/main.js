class Pessoa {
    constructor(nome, sobrenome, idade){
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.idade = idade;
    }

     dizAi(){
        let nomeJunto = this.nome + ' ' + this.sobrenome
        return `O cara se chama ${nomeJunto} e tem ${this.idade}`
    }
}

const pessoa1 = new Pessoa('Caio', 'Veras', 21)
console.log(pessoa1.dizAi())