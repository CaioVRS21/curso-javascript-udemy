//Método splice
const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];
//nomes.splice(indice de ínicio da operação, quantos indice deletar, elem1, elem2 (indices para adicionar))

//nomes.splice(4, 1) remove o elementos 4 e somente o quatro porque o valor 1 indica quantos elementos serão retirados

//nomes.splice(2, 3) remove a partir de 'Eduardo até o último item (nesse caso que só tem 5 itens)

//const removidos = nomes.splice(4, 1); //retorna um array contendo o valor ou valores removidos do array original

//const removidosNeg = nomes.splice(-1, 1); //o último indice de um array de trás para a frente começa em -1 então este exemplo retornará 'Júlia' e também a removerá do array principal, uma vez que ela é  último elemento

const addNomes = nomes.splice(3, 0, 'Luiz')//No índice 3 nenhum valor será removido (por isso o 0) mas um novo valor será adcionado nele (que é 'Luiz'), agora 'Gabriel' que era o índice 3 virá o 4. Passando uma quantidade de valores a serem removidos no lugar do 0 faz com que esses valores sejam substituídos pelo novo valor ('Luiz') e os removidos serão salvos por esta variável

console.log(nomes, addNomes)