let pessoas = require('./modulos/pessoas');

console.log(pessoas);
   
// Minha Primeira Aplicação I
// Tem-se um conjunto de dados contendo a altura e o sexo (M ou F) de 15 pessoas. Faça um programa que calcule e escreva:
	
// a maior e a menor altura do grupo;
function MaioreMenorAltura(array){
    pessoas.sort((a,b) => {return b.altura - a.altura});
    console.log('A pessoa com maior altura é : ' + pessoas[0].nome + ' com ' + pessoas[0].altura + 'm.');
    pessoas.sort((a,b) => {return a.altura - b.altura});
    console.log('A pessoa com menor altura é : ' + pessoas[0].nome + ' com ' + pessoas[0].altura + 'm.');
}

MaioreMenorAltura(pessoas);

// a média de altura das mulheres;
function MediaAltura(array) {
    let mulher = array.filter((pessoa) => {return pessoa.sexo == 'F'});
    let soma = mulher.reduce((acumulador,valor) => acumulador + valor.altura, 0);
    let media = soma / mulher.length;
    return 'A média de altura das mulheres é: ' + media;
}

console.log(MediaAltura(pessoas));
// o número de homens.
function NumeroHomens(array) {
    let homem = array.filter((pessoa) => {return pessoa.sexo == 'M'});
    return 'A quantidade de homens é: ' + homem.length;
}

console.log(NumeroHomens(pessoas));

//
// function MediaAltura2(array,sexo) {
//     let pessoa = array.filter((pessoa) => {return pessoa.sexo == sexo});
//     let soma = pessoa.reduce((acumulador,valor) => acumulador + valor.altura, 0);
//     let media = soma / pessoa.length;
//     return 'A média de altura ' + (sexo == 'F' ? 'das mulheres ' : 'dos homens ') + ': ' + media;
// }

// console.log(MediaAltura2(pessoas, 'F'));
// console.log(MediaAltura2(pessoas, 'M'));

// function NumeroPessoas(array, sexo) {
//     let pessoa = array.filter((pessoa) => {return pessoa.sexo == sexo});
//     return 'A quantidade de ' + (sexo == 'F' ? 'mulheres ' : 'homens ') + ': ' + pessoa.length;
// }

// console.log(NumeroPessoas(pessoas, 'M'));
// console.log(NumeroPessoas(pessoas, 'F'));