/*
SEGUINDO A MESA DE TRABALHO DA AULA 13. DESENVOLVA ESSE ALGORITMO 
1 - CRIE UMA FUNÇÃO CONSTRUTORA PARA O OBJETO CONTA BANCARIA COM AS SEGUINTES PROPRIEDADES:

● Número da conta (somente números)
● Tipo de conta (conta corrente ou poupança em $)
● Saldo em $ (valor apenas)
● Titular da conta (nome completo) */

function contaBancaria(conta, tipoConta, saldo, titular){
    this.conta = conta;
    this.tipo = tipoConta;
    this.saldo = saldo;
    this.titular = titular;

    return this;
}

// 2 - MOLDE AS INFORMAÇÕES DO ARQUIVO https://drive.google.com/file/d/16L2NejZU49mCLbo6RTmSKtuElOTOYUXv/view
// PARA O FORMATO JSON, E EXPORTE ESSE JSON COMO MODULO

let dadosJSON = require('./modulos/dadosJSON');

//console.log(dadosJSON);

// 3 - DESENVOLVA UM ALGORITOMO QUE IRA RECEBER O MODULO ARRAY DE JSON E CRIE DINAMICAMENTE OS 
// OBJETOS CONTA BANCARIA EM UM SEGUNDO ARRAY LISTA USUARIOS ARMAZENE ESSE OBJETOS 

function parseJson(arrayJson){
    let dadosConvertidos = JSON.parse(arrayJson);
    let listaUsuarios = [];

    for (let i=0; i < dadosConvertidos.length; i++){
       listaUsuarios.push(new contaBancaria(dadosConvertidos[i].numero, dadosConvertidos[i].tipo, dadosConvertidos[i].saldo, dadosConvertidos[i].titular));
    }

    return listaUsuarios;
}

let contas = parseJson(dadosJSON);

console.log(contas);

// 4 - CRIE DE UM OBJETO LITERAL CHAMADO BANCO QUE TERÁ UMA PROPRIEDADE CHAMADA CLIENTES, ELE SERÁ COMPOSTO 
// PELA LISTA DE OBJETOS GERADOS NO PONTO ANTERIOR.

// 5 - O OBJETO DO BANCO CRIARÁ UM MÉTODO CHAMADO CONSULTARCLIENTE QUE RECEBERÁ UM
// NOME (TITULAR) POR PARÂMETRO E DEVE PESQUISAR NA LISTA DE CONTAS E RETORNAR AO
// OBJETO DO CLIENTE QUE CORRESPONDE A ESSE NOME INSERIDO.

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
}


console.log(banco.consultarCliente('Alonso Wannan'));