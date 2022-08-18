//Herança com classes
class DispositivoEletrônico {
    constructor (nome){
        this.nome = nome;
        this.ligado = false;
    }

    ligar(){
        if (this.ligado === false) return this.ligado = true;
        if (this.ligado === true){
            console.log(`O ${this.nome} já está ligado`)
        }
    }

    desligar(){
        if (this.ligado === true) return this.ligado = false;
        if (this.ligado === false){
            console.log(`O ${this.nome} já está desligado`)
            return;
        }
    }
    
}

//Agora a classe Smartphone herda tudo de DispositivoEletrônico, porém para herdar e poder reconfigurar o constructor da classe pai (ou Superclass) faz-se o seguinte
class Smartphone extends DispositivoEletrônico{
    constructor(nome, cor, modelo){
        super(nome); //super funciona para classes do mesmo jeito que .call para construtoras, unindo o constructor da classe filha com a classe pai e passando quais os argumentos que serão herdados, super é obrigátoria para classes filhas
        this.cor = cor;
        this.modelo = modelo;
    }
}; 

const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy')
console.log(s1);

