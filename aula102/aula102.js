//Introdução a classes
//Instânciar é criar um objeto a partir de uma classe;
//Uma classe tem o seu comoportamento similar a de uma função construtora
class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome;
        this.sobrenome = sobrenome;
    } //É possível fazer uma classe sem constructor, mas com ela fica mais fácil receber os parâmetros a serem atrelados a esta classe

    falar (){
        console.log(`${this.nome} está falando`);
    }

    beber (){
        console.log(`${this.nome} está falando`);
    }

    comer (){
        console.log(`${this.nome} está falando`);
    }

    /*Todos os metodos acima já são automaticamente inseridos no prototype da classe, dispensando a necessidade criar um prototype, atrelhar o prototype e etc*/
}

const p1 = new Pessoa('Caio', 'Veras'); //todas as pessaos criadas a partir da classe Pessoa irão receber os mesmo metodos do prototype de Pessoa, assim herdando estes metodos