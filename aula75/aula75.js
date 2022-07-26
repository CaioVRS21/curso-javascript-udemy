//Estudos sobre funções factory
function criaPessoa (nome, sobrenome, altura, peso){
    return{
        nome,
        sobrenome,
        set nomeCompleto(valor){
            valor = valor.split(' ');
            this.nome = valor.shift();
            this.sobrenome = valor.join(' ')
        },
        fala(assunto){
            //            this.x é quem chamou, caso o p1
            //            neste exemplo, sem o this. o valor de nome é o mesmo do parâmetro, porém com o this. o valor de nome será o mesmo do set acima
            console.log(`${this.nome} tem ${peso}kg e ${altura}m está falando sobre ${assunto}, seu imc é de ${this.calcImc}`)
            //             sem o this. o código não conseguirá capturar o valor de calcImc()
            return '';
        },
        altura,
        peso,
        get calcImc(){ //O getter faz com que a função passe a se comportar como um atributo do objeto
            result = (altura/Math.pow(peso, 2))
            return result.toFixed(2);
        }
    };
};
const p1 = criaPessoa('Caio', 'Veras', 80, 1.73);
p1.nomeCompleto = 'Maria Esther'
// console.log(p1.nome)
// console.log(p1.sobrenome)
console.log(p1.fala('sobre carros'));