// Crie um array que contenha nomes de produtos para compra. 

// Após isso, exiba no console os resultados das funções relacionadas aos arrays, que são: Join, Pop, Push, Shift e Unshift. 

// Também se deve escrever com suas palavras, o que cada função realiza. Seguem abaixo alguns exemplos.

// console.log(“O método Join realiza tal coisa”)
// console.log(RESULTADO_DO_JOIN)


let arrayProdutos = ['Arroz', 'Feijão', 'Óleo', 'Tempero', 'Açucar', 'Tomate', 'Alface', 'Cenoura'];

console.log('Array criado!');
console.log(arrayProdutos);

console.log('O método Join uni os elementos do array com a string que foi passada " - ": ')
console.log(arrayProdutos.join(' - '));

console.log('O método Pop retira o último produto do array:')
let ultimaCor = arrayProdutos.pop();
console.log(ultimaCor);

console.log('O método push incluí um novo elemento no array: ');
arrayProdutos.push('Batata');
console.log(arrayProdutos);

console.log('O método Shift retira o primeiro elemento do array: ');
let retirado = arrayProdutos.shift();
console.log(retirado);
console.log(arrayProdutos);

console.log('O método unshift incluí um novo elemento no início do array: ');
console.log(arrayProdutos.unshift('Macarrão'));
console.log(arrayProdutos);




