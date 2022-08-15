//Herança
function Produto (nome, preco){
    this.nome = nome;
    this.preco = preco;
};

Produto.prototype.aumento = function (percentual){
   return this.preco = this.preco + (this.preco * (percentual/100));   
};

Produto.prototype.desconto = function (percentual){
    return this.preco = this.preco - (this.preco * (percentual/100));
};

function Camiseta (nome, preco, cor){
    Produto.call(this, nome, preco); //argumentos herdados de Produto
    this.cor = cor;
}

Camiseta.prototype = Object.create(Produto.prototype); //Foi criado um objeto vazio com o prototype de Produto, fazendo assim uma cópia do prototype de Produto dentro de Camiseta, porém fazendo isso a Camiseta perderá seu conscructor e o sistema irá reconhecer a função como se fosse Produto (Produto {nome: 'Regata', preco: 50, cor: 'verde'}), para que isso não ocorrá é necesssário linkar Camiseta a seu constructor novamente, para isso se faz o seguinte:
Camiseta.prototype.constructor = Camiseta; //Agora Camiseta tem seu constructor novamente

//Camiseta (e qualquer outra constructor criada que herda os atributos de Produto) pode tanto ter tanto mais metodos linkados somente a seu prototype quanto mais parâmetros somente para si (Como Camiseta que possuí 'cor' enquanto o Produto não)

function Caneca(nome, preco, material, estoque){
    Produto.call(this, nome, preco);
    this.material = material;
    Object.defineProperty(this, 'estoque',{
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque;
        },
        set: function(valor){
            if (typeof valor !== 'number') return;
            estoque = valor;
        }
    })
}

Caneca.prototype = Object.create(Produto.prototype);
Caneca.prototype.constructor = Caneca;

const produto = new Produto ('Chaveiro', 5);
const camiseta = new Camiseta('Regata', 50, 'verde');
const caneca = new Caneca ('Xícara', 15, 'cerâmica', 5)

caneca.estoque = 100

console.log(produto);
console.log(camiseta);
console.log(caneca);