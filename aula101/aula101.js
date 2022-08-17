//Map() em objetos
const pessoas = [
    {id: 3, nome: 'Caio'},
    {id: 2, nome: 'Bruno'},
    {id: 1, nome: 'Melo'}
];

const novasPessoas = new Map();

for(const pessoa of pessoas){
    const {id} = pessoa;
    novasPessoas.set(id, {...pessoa});
}; //desta forma a ordem de inserção presente no array pessoas se mantem, além de fazer com o valor dos IDs permaneça númerico

console.log(novasPessoas)