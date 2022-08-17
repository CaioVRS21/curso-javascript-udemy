//getters e setters para objetos
function Produto (nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    //this.estoque = estoque; 
    let estoquePrivado = estoque //para que estoque orginial não seja alterado

    
    Object.defineProperty(this, 'estoque', { 
        enumerable: true,   //mostra a chave 
        configurable: true, //a permite ser configurável
        get: function (){
            return estoquePrivado;
        },
        set: function(valor){
            if (typeof valor !== 'number'){
                throw new TypeError('Valor inválido')
            }
            estoquePrivado = valor;
        }
    })
}

const p1 = new Produto('camiseta', 20, 40);
//p1.estoque = 'teste' //retorna como 'Valor inválido' mas o 40 será printado por se tornar o estoquePrivado
//Se o valor setado abaixo para estoque for diferente de number, o valor ali em cima (40) será atribuido ao estoquePrivado e o valor inválido irá para o set
p1.estoque = 88
//console.log(p1.estoque);


//exemplo com factory function
function criaProduto(nome){
    return{
        get nome(){
            return nome;
        },
        set nome(valor){
            valor = valor.replace('coisa', ''); //agora os valores passados podem ser facilmente interceptados e alterados qndo necessário
            nome = valor;
        }
    }
}
const p2 = criaProduto('Caio')
//console.log(p2); //retorna {nome: [Getter/Setter]}
p2.nome = 'Qualquer coisa'
console.log(p2.nome)

