//Metodos úteis para objetos
//Copiando um objeto
const produto = {nome: 'Caneca', preco: 25};
//const outroProduto = {...produto};
//outroProduto.nome = 'Camisa';
//outroProduto.preco = 40;

//Outro metodo
const produto2 = Object.assign({}, produto); //{} => cria um objeto vazio, produto => nome da origem dos dados
//console.log(produto2);

//Para mostrar as chaves de um objeto
console.log(Object.keys(produto, produto2)); //retorna um array com as chaves de um objeto

//Para mostrar os valores de um objeto
console.log(Object.values(produto)); //retorna um array com os valores de um objeto

//Para mostrar as chaves e valores de um objeto
console.log(Object.entries(produto)) //retorna dois arrays, um com as chaves e o outro com os valores de um objeto