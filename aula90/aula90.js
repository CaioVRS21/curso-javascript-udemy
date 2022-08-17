//aula de Object.defineProperty() e Object.defineProperties()
function Produto (nome, preco, estoque){
    this.nome = nome;
    this.preco = preco;
    //this.estoque = estoque; //agora comentado "estoque" não existe mais neste objeto, então como manipulá-lo

    // o this referência o objeto da função construtora
    Object.defineProperty(this, 'estoque', { 
        enumerable: true, //para permitir a exibição de um objeto
        value: estoque, //estoque foi criado mas até agora ele não possuia um valor definido, agora ele recebe o valor do parametro "estoque" 
        writable: true, //agora o valor da chave estoque pode ser alterado
        configurable: true, //permite se chave pode ou não ser reconfigurável
    })
    // as chaves são o "property descriptor" que é também um objeto

    //Para configurar várias chaves
    Object.defineProperties(this, {
        nome: {
        enumerable: true, 
        value: nome,  
        writable: true, 
        configurable: true
        },
        preco: {
            enumerable: true, 
            value: preco,  
            writable: true, 
            configurable: true
        }
    })
}

const p1 = new Produto('camiseta', 20, 3000);
console.log(p1);