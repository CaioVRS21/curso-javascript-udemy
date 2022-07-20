//Atribuição via desestruturação de objetos
const dados = {
    nome: 'Caio',
    sobrenome: 'Veras',
    idade: 21,
    endereco:{
        rua: 'Alberto Vasquez',
        numero: 320
    }
}

//para fazer uma desetruturação pode-se apenas criar variaveis com o mesmo nome dos indices do objeto
// const {nome, sobrenome, idade} = dados
// console.log(nome, sobrenome, idade)
//é possivel também atribuir um valor padrão para o caso da váriavel não ter um valor a partir do objeto
// const {nome = '', sobrenome, idade} = dados
// console.log(nome, sobrenome, idade)

//também é possível resgatar o valor de um objeto de dentro de outro objeto
//const {endereco} = dados //mas nesse caso todo o objeto será resgatado, para obter um valor de dentro desse objeto é necessário
const {endereco: {rua, numero}} = dados //agora os dados dentro do objeto serão atribudos as respectivas variaveis
console.log(rua, numero)