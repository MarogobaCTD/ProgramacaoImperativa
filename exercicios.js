// let valor = 5;
// let fatoral = 1;
// for(let i = valor; i > 1; i--){
//     fatoral *= i;
// }
// console.log(fatoral)

let x = 5;
let y = x++ + ++x;
console.log("y="+y);
x=3;
y=x*(x+1)*x++;
x=5;
y=3;
y*=x+1;
console.log('x= '+x);
console.log('y= '+y);

function soletar(texto){
    console.log(texto.replace('-', '').toLocaleUpperCase().split('').join('-'));
}

soletar('digital-house');
soletar('ctd');

let frutasAmarelas = ['Melão', 'Mamão', 'Limão'];
let [fruta1, fruta2, fruta3] = frutasAmarelas;

console.log(fruta1);
console.log(fruta2);
console.log(fruta3);
console.log(frutasAmarelas);

for(var i=0; i<50; i+=10){
    console.log(i);
}
console.log(i);

var z = 0;
for (let index = 20; index < 50; index+=10) {
    z+=index;
}
console.log(z);

let frutasAmarelas2 = ['Melão', 'Mamão', 'Limão siciliano'];
let frutasVermelhas = ['Morango', 'Cereja', 'Maça  red'];
let frutasVerdes = ['Limão', 'kiwi', 'Maça verde'];

frutasVermelhas1 = frutasVermelhas.map(fruta => fruta.toLocaleUpperCase());
console.log(frutasVermelhas1);
let todasFrutas = [...frutasAmarelas2, ...frutasVermelhas1, ...frutasVerdes];
console.log(todasFrutas);

let numeros= [10, 8, 7, 99, 0, 1, 6];
console.log(numeros.sort(function(a,b){ return a,b;}));
console.log(numeros.sort(function(a,b){ a-b;}));
console.log(numeros.sort(function(a,b){ return a-b;}));
console.log(numeros.sort(function(a,b){ return a*b;}));
console.log(numeros.sort(function(a,b){ return b-a;}));

