//Factory Functions + prototypes
//Mixing: quando "jogamos" metodos sem herença ou ligação uns com os outros em um só objeto, no modelo abaixo todos os metódos estão "soltos" e ligados a uma constante que se tornará o prototype da Factory Function criaPessoa, desta forma podemos criar diversos metódos e liga-los a uma constante que terá o papel de prototype.

const falar = {
    falar() {console.log(`${this.nome} está falando`)}
};

const beber = {
    beber() {console.log(`${this.nome} está bebendo`)}
};

const comer = {
    comer() {console.log(`${this.nome} está comendo`)}
};

const pessoaPrototype = Object.assign({}/*Um objeto vazio como target está sendo criado para a pessoaPrototype */, falar, beber, comer);

function criaPessoa (nome, sobrenome){
    return Object.create(pessoaPrototype, { //Property descriptor
            nome: {value: nome},
            sobrenome: {value: sobrenome}
        })
    }
const p1 = criaPessoa('Caio', 'Veras');
p1.falar();
p1.comer();
p1.beber();