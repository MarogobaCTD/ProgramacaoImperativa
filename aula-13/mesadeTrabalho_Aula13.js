// ●	Número da conta (somente números)
// ●	Tipo de conta (conta corrente ou poupança em $)
// ●	Saldo em $ (valor apenas)
// ●	Titular da conta (nome completo)

let contaBancaria = {
    conta: '12345',
    tipo: 'Conta Corrente',
    saldo: 100.00,
    titular: 'Fulano da Silva',
}

//console.log(contaBancaria);

// 1.	Pense na melhor forma de representar tais contas, e por quê? (discutir coma equipe sobre as diferentes estruturas e qual é a mais conveniente)
// 2.	Uma vez decidido qual será o tipo de dados para representar as contas das contas, crie uma conta de teste e verifique se as propriedades mencionadas acima são criadas corretamente.
// 3.	Agora que sabemos como representar usuários e suas contas, o cliente nos forneceu uma lista de contas que devemos ser capazes de criar. Para isso, devemos gerar uma função construtora que facilite a criação das contas bancárias correspondentes mais rapidamente. 

function Contas(conta, tipoConta, saldo, titular){
    this.conta = conta;
    this.tipo = tipoConta;
    this.saldo = saldo;
    this.titular = titular;
}

// 4.	A partir dos 10 usuários, gereuma lista onde todos eles convergem (lista de objetos)
// 5.	Também nos pedem a criação de um objeto literal chamado banco que terá uma propriedade chamada clientes, ele será composto pela lista de objetos gerados no ponto anterior.
// 6.	o objeto do banco criará um método chamado consultarCliente que receberá um nome (titular) por parâmetro e deve pesquisar na lista de contas e retornar ao objeto do cliente que corresponde a esse nome inserido.
// 7.	Crie outro método chamado depósito que receberá como parâmetros, o titular da conta e uma quantidade de dinheiro para depositar. O método deve chegar à conta correspondente e, em seguida, adicionar a quantidade de dinheiro para depositar o saldo da conta, então você deve dar um aviso pelo console com a mensagem "Depósito realizado, seu novo saldo é: xxx" .
// 8.	Crie um último método chamado saque que também receberá dois parâmetros, o titular da conta e o valor a ser extraído. O método deve obter a conta correspondente e subtrair o valor do saldo atual. Caso o resultado seja inferior a 0, você deve imprimir uma mensagem através do console de "Fundos insuficientes",caso contrário você deve imprimir "Extração feita com sucesso, seu novo saldo é: xxx"

let contas = [];
contas.push(new Contas(5486273622,'Conta Corrente', 27771.00,'Abigael Natte'));
contas.push(new Contas(1183971869,'Conta Poupança', 8675.00,'Ramon Connell'));
contas.push(new Contas(9582019689,'Conta Poupança', 27363.00,'Jarret Lafuente'));
contas.push(new Contas(1761924656,'Conta Poupança', 32415.00,'Ansel Ardley'));
contas.push(new Contas(7401971607,'Conta Poupança', 18789.00,'Jacki Shurmer'));
contas.push(new Contas(630841470,'Conta Corrente', 28776.00,'Jobi Mawtus'));
contas.push(new Contas(4223508636,'Conta Corrente', 2177.00,'Thomasin Latour'));
contas.push(new Contas(185979521,'Conta Poupança', 25994.00,'Lonnie Verheijden'));
contas.push(new Contas(3151956165,'Conta Corrente', 7601.00,'Alonso Wannan'));
contas.push(new Contas(2138105881,'Conta Poupança', 33196.00,'Bendite Huggett'));

console.log(contas);

let banco = {
    clientes: contas,
    consultarCliente: function(nome){
        let contaCliente = [];
        for(let i=0; i<this.clientes.length;i++){
            if (this.clientes[i].titular == nome){
                contaCliente = this.clientes[i];
            }
        }
        return contaCliente;
    },

    deposito: function(nome, valor){
        for(let i=0; i<this.clientes.length;i++){
            if (this.clientes[i].titular == nome){
                this.clientes[i].saldo += valor;
                return "Depósito realizado, seu novo saldo é: " + this.clientes[i].saldo;
            }
        }
    },

    saque: function(nome, valor){
        for(let i=0; i<this.clientes.length;i++){
            if (this.clientes[i].titular == nome){
                if (this.clientes[i].saldo < valor) {
                    return "Fundos insuficientes!";
                } else {
                    this.clientes[i].saldo -= valor;
                    return "Extração feita com realizado, seu novo saldo é: " + this.clientes[i].saldo;
                }
            }
        }
    },
}

//console.log(banco);

console.log(banco.saque('Ansel Ardley', 100.10));


// Propriedade Única
// Você deve criar uma função chamada propriedadeUnica que recebe uma array de objetos como parâmetro e uma string.  
// Você deve devolver um novo array de objetos, tendo apenas a propriedade que foi passada como string.  
// exemplo: 
let array = [ { nome: "Lean", idade: 27 }, { nome: "Eze", idade: 49} ]
// propriedadeUnica(array, "idade") deve retornar [ { idade: 27 }, { idade: 49 } ]
// propriedadeUnica(array, "nome") deve retornar [ { nome: "Lean"}, { nome: "Eze" } ]

console.log(array[1]);
//console.log(array.pop());

let novo = array.pop();
console.log(novo);

console.log(Object.getOwnPropertyNames(novo).pop());

//   function propriedadeUnica(arrayObj, texto){
//       let novoArray = [];
//       for(let i = 0; i < arrayObj.length; i++){
//          if (arrayObj.hasOwnProperty('idade') = texto){
//              novoArray = {}
//          }
//       }
     
//   }



// Calculadora de notas
// Crie o objeto do aluno,que consistirá nas seguintes propriedades básicas:
// ●	número
// ●	Número do arquivo
// ●	Lista de notas
// Gostaríamos de calcular a média do aluno e se ela é aprovada com base em uma nota de aprovação que será dada. Para este exercício vamos deixar você pensar sobre todos os métodos e propriedades que podem ser necessários para que nosso programa funcione corretamente da maneira solicitada.
