//Métodos estáticos
//São métodos que podem ser acessados sem instâncear a classe (sem usar o new)
class ControleRemoto {
    constructor(tv){
        this.tv = tv;
        this.volume = 0;
    };

    //Métodos da instância
    aumentaVolume(){
        return this.volume += 2;
    }

    diminuiVolume(){
        return this.volume -= 2;
    }

    //Um método estático está ligado a classe porém não é possível chama-lo com uma instância "controle1.trocaPilha();" = erro ; "ControleRemoto.trocaPilha();" = forma correta
    static trocaPilha (){
        console.log('A pilha foi trocada'); //Métodos estáticos automaticamenta setam seu this para a classe de origem
    }
}

const controle1 = new ControleRemoto('LG');
controle1.aumentaVolume();
controle1.aumentaVolume();
controle1.diminuiVolume();
ControleRemoto.trocaPilha();
console.log(controle1)