//Manipulando prototypes
//Objetos literais funcionam como new Object
const objA = {
    chaveA: 'A'
    //Todo objeto possui a chave _proto_ dentro de si e objA._proto_ é igual a Object.prototype
};
//é possível linkar o prototype de dois objetos distintos? Sim, da seguinte forma:

const objB = {
    chaveB: 'B'
};
Object.setPrototypeOf(objB, objA)
//Agora a cadeia hierarquica é objB -> objA -> prototype. Permitindo assim criar grandes correntes de objetos que reaproveita os blocos dentro de outros objetos em camadas superiores
console.log(objB.chaveA)

//Porém buscar ou alterar a _proto_ é arriscado uma vez que pode afetar a performance e confiabilidade de um código, o melhor é usar o metódo Object.getPrototypeOf()