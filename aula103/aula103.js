//Getters e setters em classes
const _velocidade = Symbol(); //o symbol atrela a variavel a um simbolo aleatório e cada symbol é diferente do outro fazendo com que mesmo duas variaveis iguais ou similares em identificação não sejam iguais
class Carro{
    constructor(nome){
        this.nome = nome;
        this[_velocidade] = 0;
    }

    get velocidade(){
        return this[_velocidade]; //retorna o valor na chamada
    }

    set velocidade(valor){ //captura e reconfigura o valor da variavel
        if (typeof valor !== 'number') return;
        if (valor >= 100 || valor <= 0) return;
        this[_velocidade]  = valor;
    }

    acelerar(){
        if (this[_velocidade] >= 100) return 
        this[_velocidade]++;
    };

    freiar(){
        if (this[_velocidade] <= 0) return 
        this[_velocidade]--;
    };    
}

const c1 = new Carro('Fusca');
c1.velocidade = -1; //setter
console.log(c1.velocidade); //getter

//LEMBRETE: Getters e Setters são atributos e não funções