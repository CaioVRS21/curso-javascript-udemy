let nome = 'Caio Veras'
let data = new Date
let hora = data.getHours()
if(hora > 0 && hora <= 12){
console.log(`Olá, meu nome é ${nome} e são ${hora} da manhã`)
return;
}

if(hora > 12 && hora <= 18){
    console.log(`Olá meu nome é ${nome} e são ${hora} da tarde`)
    return;
}

if(hora > 18){
    console.log(`Olá meu nome é ${nome} e são ${hora} da manhã`)
    return;
}