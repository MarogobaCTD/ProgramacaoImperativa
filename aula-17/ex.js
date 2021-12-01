// Crie um array de números pares, e utilizando a função .map() nesse array, crie um novo array com apenas números ímpares.
let Pares = [2, 4, 6, 8, 10];

let Impares = Pares.map(function(valor, index){
    return valor + 1
});

console.log(Impares);


// Crie um array de nomes, que possua dois índices com o nome Maria. Utilize o .filter() para obter apenas esses dois índices com o nome Maria.

let Nomes = ['Maria', 'Jose', 'Joao', 'Darcia', 'Carla', 'Maria', 'Eduardo'];

let FiltroNomes = Nomes.filter(function(valor){
  return valor == 'Maria';
});

console.log(FiltroNomes);

// Crie um array de números e utilize a função .reduce() para devolver uma string com os números formatados.
// Exemplo [1,5,9,3,7] => “1 – 5 – 9 – 3 – 7”

let Numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let Formatados = Numeros.reduce(function(acumulador, valor){
    return acumulador + ' - ' + valor;
})
console.log(Formatados);

// Crie um array de animais, após isso passe por cada índice utilizando o .forEach() e imprima a frase “O animal é NOME_DO_ANIMAL”.
let Animais = ['Cachorro', 'Gato', 'Papagaio', 'Macaco', 'Leão', 'Tartaruga'];

Animais.forEach(function(animal){
    console.log('O animal é ' + animal);
})

