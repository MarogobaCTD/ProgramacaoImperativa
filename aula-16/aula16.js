// let bemVindo = () => 'Olá Mundo!';

// let dobro = numero => numero * 2;

// let soma = (a, b) => a + b;

// let horaAtual = () => {
//     let data = new Date();
//     return data.getHours() + ':' +
//     data.getMinutes();
//     }

// console.log(bemVindo);
// console.log(dobro(9));
// console.log(soma(7,8));
// console.log(horaAtual());

// setTimeout(function (){
//     console.log('Olá Mundo!')
// }, 1000)
// setTimeout;

// let print = () => console.log('Olá mundo!');
// setInterval(print, 300);

function nomeCompleto(nome, sobrenome){
    return nome + ' ' + sobrenome;
}

console.log(nomeCompleto('Marcelo', 'Barbosa'));

function bomDia(nome, sobrenome, callback){
    return 'Bom dia ' + callback(nome, sobrenome);
}

console.log(bomDia('Marcelo', 'Barbosa', nomeCompleto));

function iniciais(nome, sobrenome) {
    return nome[0] + sobrenome[0];
   };

console.log(bomDia('Marcelo', 'Barbosa', iniciais));


function acaoCarro(callback){
    return callback;
}

function andar(){
    return 'o carro está andando';
}

function parar(){
    return 'o carro parou';
}

console.log(acaoCarro(andar()));