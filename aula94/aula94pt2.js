function Produto (nome, preco){
    this.nome = nome;
    this.preco = preco;
}

Produto.prototype.desconto = function(percentual) {
    this.preco = this.preco - (this.preco * (percentual/100));
};

Produto.prototype.aumento = function(percentual) {
    this.preco = this.preco + (this.preco * (percentual/100));
};

let p1 = new Produto('Camiseta', 25);
let p2 = {
    nome: 'Calça',
    preco: 50
}
Object.setPrototypeOf(p2, Produto.prototype) //Agora o prototype de p2 é o mesmo de Produto
p1.desconto(100);
p2.aumento(100);
console.log(p2);