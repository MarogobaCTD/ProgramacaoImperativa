// Vamos fortalecer nosso conhecimento sobre arrays explorando diferentes ações. Veremos se eles se comportam como esperamos ou 
//se ocorrem resultados inesperados.
// Em primeiro lugar, vamos praticar as ações mais comuns e necessárias:

// Acessar elementos específicos de um array.
// Modificar cada um dos elementos de um array e imprimi-los no console.
// Adicionar elementos a um array.
// Extrair elementos de um array.
// Comparar elementos de um array com os elementos de outro. 


let arrayProdutos = ['Arroz', 'Feijão', 'Óleo', 'Tempero', 'Açucar', 'Tomate', 'Alface', 'Cenoura'];

console.log('Acessar elementos específicos de um array.');
console.log(arrayProdutos[1]);

console.log('Modificar cada um dos elementos de um array e imprimi-los no console.');
arrayProdutos[1] = 'Sorvete';
arrayProdutos[3] = 'Café';
arrayProdutos[4] = 'Balão';
console.log(arrayProdutos);

console.log('Adicionar elementos a um array.');
arrayProdutos.push('Salsa', 'Detergente', 'Escova de dente');
arrayProdutos.unshift('Chocolate', 'Frango', 'Sabão em Pó');
console.log(arrayProdutos);

console.log('Comparar elementos de um array com os elementos de outro.');
let arraySupermercado = ['Detergente', 'Palha de aço', 'Papel higiênico', 'Pasta Dental', 'Chocolate', 'Bala', 'Açucar'];
console.log(arrayProdutos.indexOf(arraySupermercado[0]));
console.log(arrayProdutos.indexOf(arraySupermercado[1]));


// Neste exercício, você terá que pensar sobre o que esses códigos retornam sem testá-lo no console.
let numbers =[22, 33, 54, 66, 72];
console.log(numbers[numbers.length]);
//-1

let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ];
console.log(grupoDeAmigos[1][0]);
//Spiderman

let str = 'una string qualquer';
let grupoDeAmigosI = [ [45, 89, 0], ["Digital", "House", true], ["string", "123","false", 54, true, str] ];
console.log(grupoDeAmigosI[2][grupoDeAmigosI[2].length - 1]);
//una string qualquer

// Crie a função imprimirInverso que pega um Array como um argumento e imprime cada elemento em ordem reversa no console (você não precisa inverter o Array).
// Crie a função inverter que recebe um Array como argumento e retorna um novo invertido.

function inverter(arrayInverter){

    return arrayInverter.reverse();

}

function imprimirInverso(arrayRecebido){
    console.log(inverter(arrayRecebido));
}

console.log('Meu array:');
console.log(arrayProdutos);
console.log('Meu array Invertido:');
imprimirInverso(arrayProdutos);

function soma(total, num) {
    return total + num;
  }
  
  function somarArray(arrayEntrada){
  
      return arrayEntrada.reduce(soma);
  }

console.log('Somas do meus arrays:');
console.log('somarArray([1,2,3]');
console.log(somarArray([1, 2, 3]));


console.log('somarArray([10, 3, 10, 4]');
console.log(somarArray([10, 3, 10, 4]));

console.log('somarArray([-5,100]');
console.log(somarArray([-5,100]));

let texto = '';
function agrupaString(item) {
    texto += item;
}

function meuJoin(arrayEntrada){
    texto = '';
    arrayEntrada.forEach(agrupaString); 
    return texto;   
}

console.log('Unindo o array sem o método Join:');
console.log('["O","l","á"]');
console.log(meuJoin(['O','l','á']));
console.log('["t","c","h","a,"u"]');
console.log(meuJoin(['t','c','h','a','u']));


//Coleções de filmes
let arrayFilmes = ["star wars", "matrix",  "mr. robot", "o preço do amanhã",  "a vida é bela"];

console.log('Consultando meu array no início:');
console.log(arrayFilmes[0]);
console.log(arrayFilmes[3]);
console.log(arrayFilmes);

//Array convertido em maiúscula
function maiusculo(item, index){
    arrayFilmes[index] = item.toUpperCase();
}

function arrayMaiusculo(arrayEntrada){
    arrayEntrada.forEach(maiusculo);
    return arrayEntrada;
}
console.log('Meu array maiúsculo:')
console.log(arrayMaiusculo(arrayFilmes));

//Criação de outra estrutura
let novosFilmes = ["toy story", "finding Nemo", "kung-fu panda", "wally", "fortnite"];
console.log('Meus novos filmes:');
console.log(novosFilmes);

//Concatena os arrays
//Deletar o filme errado e grava na variável
let novoArrayFilmes = [];
let filmeErrado = '';
function concatArray(arrayEntrada, arrayConcat){
    filmeErrado = arrayConcat.pop();
    novoArrayFilmes = arrayEntrada.concat(arrayConcat);
    return novoArrayFilmes;
}

console.log('Concatenando os arrays: arrayFilmes e novosFilmes');
console.log(concatArray(arrayFilmes, novosFilmes));
console.log('Filme errado: ' + filmeErrado);

//classificações feitas por diferentes usuários do mundo nos filmes com o seguinte formato
const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];
let compara = [];

function compareNotas(item, index){
    compara[index] = compara[index] == item ? 'Igual' : 'Diferente';
}

function compareArrays(arrayEntrada, arrayCompara){
    compara = arrayCompara;
    arrayEntrada.forEach(compareNotas);
    return compara;
}
console.log('Classificação dos filmes por bloco');
console.log('Asia: ' + asiaScores);
console.log('Europa: ' + euroScores);
console.log(compareArrays(asiaScores,euroScores));

