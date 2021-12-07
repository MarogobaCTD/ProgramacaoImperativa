// Cada espectador de um cinema respondeu a um questionário no qual constava sua idade e a sua opinião em relação ao filme: ótimo - 3, bom - 2, regular -1.
// Faça um programa que receba a idade e a opinião de 15 espectadores, calcule e imprima:


let espectadores = [];

function Espectador(idade,opiniao){
    this.idade = idade;
    this.opiniao = opiniao;
}

espectadores.push(new Espectador(17,3));
espectadores.push(new Espectador(13,2));
espectadores.push(new Espectador(15,1));
espectadores.push(new Espectador(18,3));
espectadores.push(new Espectador(22,2));
espectadores.push(new Espectador(34,3));
espectadores.push(new Espectador(50,1));
espectadores.push(new Espectador(25,2));
espectadores.push(new Espectador(30,3));
espectadores.push(new Espectador(14,1));
espectadores.push(new Espectador(21,3));
espectadores.push(new Espectador(20,2));
espectadores.push(new Espectador(15,1));
espectadores.push(new Espectador(22,3));
espectadores.push(new Espectador(23,2));

console.log(espectadores);

const opiniao = espectadores.filter(pessoa => pessoa.opiniao == 3);
const media = opiniao.reduce((acumulador,valor) => acumulador + valor.idade, 0) / opiniao.length;
// a média das idades das pessoas que responderam ótimo;
console.log('A média das idades das pessoas que responderam ótimo é ' + media.toFixed(2));

// a quantidade de pessoas que responderam regular;
const opiniao1 = espectadores.filter(pessoa => pessoa.opiniao == 2);
console.log('A quantidade de pessoas que responderam regular é ' + opiniao1.length);

// a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.
const opiniao2 = espectadores.filter(pessoa => pessoa.opiniao == 2);
const porcentagem = (opiniao2.length / espectadores.length) * 100;

console.log('O porcentagem de pessoas que responderam bom é ' + porcentagem.toFixed(2));




