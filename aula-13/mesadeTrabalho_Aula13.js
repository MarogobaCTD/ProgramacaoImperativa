// ●	Número da conta (somente números)
// ●	Tipo de conta (conta corrente ou poupança em $)
// ●	Saldo em $ (valor apenas)
// ●	Titular da conta (nome completo)

let contaBancaria = {
    conta: '12345',
    tipo: ['Conta Corrente', 'Conta Poupança'],
    saldo: 100.00,
    titular: 'Fulano da Silva'
}

console.log(contaBancaria);

// 1.	Pense na melhor forma de representar tais contas, e por quê? (discutir coma equipe sobre as diferentes estruturas e qual é a mais conveniente)
// 2.	Uma vez decidido qual será o tipo de dados para representar as contas das contas, crie uma conta de teste e verifique se as propriedades mencionadas acima são criadas corretamente.
// 3.	Agora que sabemos como representar usuários e suas contas, o cliente nos forneceu uma lista de contas que devemos ser capazes de criar. Para isso, devemos gerar uma função construtora que facilite a criação das contas bancárias correspondentes mais rapidamente. 

function Contas(conta, tipoConta, saldo, titular){
    this.conta = conta;
    this.tipo = tipoConta;
    this.saldo = saldo;
    this.titular = titular;


}


let contas = [];
contas.push(new Contas(5486273622,'Conta Corrente', 27771,'Abigael Natte'));
contas.push(new Contas(1183971869,'Conta Poupança', 8675	,'Ramon Connell'));
contas.push(new Contas(9582019689,'Conta Poupança', 27363,'Jarret Lafuente'));
contas.push(new Contas(1761924656,'Conta Poupança', 32415,'Ansel Ardley'));
contas.push(new Contas(7401971607,'Conta Poupança', 18789,'Jacki Shurmer'));
contas.push(new Contas(630841470,'Conta Corrente', 28776,'Jobi Mawtus'));
contas.push(new Contas(4223508636,'Conta Corrente', 2177	,'Thomasin Latour'));
contas.push(new Contas(185979521,'Conta Poupança', 25994,'Lonnie Verheijden'));
contas.push(new Contas(3151956165,'Conta Corrente', 7601	,'Alonso Wannan'));
contas.push(new Contas(2138105881,'Conta Poupança', 33196,'Bendite Huggett'));

console.log(contas);