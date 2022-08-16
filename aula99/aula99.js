//Polimorfismo
//Superclass == Função construtora principal

function Conta (agencia, conta, saldo){
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function (valor){
    if (this.saldo < valor){
        this.verSaldo();
        console.log('Sem saldo para saque deste valor');
        return;
    };
    this.saldo -= valor;
    this.verSaldo();
};
Conta.prototype.depositar = function (valor){
    this.saldo += valor;
    this.verSaldo();
};
Conta.prototype.verSaldo = function (){
    console.log(`Ag/c: ${this.agencia}/${this.conta} | ` + 
    `Saldo: ${this.saldo.toFixed(2)}`);
};

function Contacorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo); //Herança para herdar os parâmetros e metódos da superclasse
    this.limite = limite;
};

Contacorrente.prototype = Object.create(Conta.prototype);
Contacorrente.prototype.constructor = Contacorrente;

//Sobreescrita do metódo "sacar", Polimorfismo é o princípio pelo qual duas ou mais classes derivadas de uma mesma superclasse podem invocar métodos que têm a mesma identificação (assinatura) mas comportamentos distintos, especializados para cada classe derivada, usando para tanto uma referência a um objeto do tipo da superclasse.
//Como a conta corrente possui um limite de saque, não necessáriamente o usuário precisa ter aquele valor ou maior em sua conta para permitir o saque
Contacorrente.prototype.sacar = function (valor){
    if ((this.saldo + this.limite) < valor){
        this.verSaldo();
        console.log('Sem saldo para saque deste valor');
        return;
    };
    this.saldo -= valor;
    this.verSaldo();
};

function ContaPoupança(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo); //Herança para herdar os parâmetros e metódos da superclasse
};

ContaPoupança.prototype = Object.create(Conta.prototype);
ContaPoupança.prototype.constructor = ContaPoupança;