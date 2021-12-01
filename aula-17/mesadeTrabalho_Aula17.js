// Crie uma função que receba um array composto por números e retorna uma nova matriz (array) com todos os valores divididos pela soma
// de toda a matriz, usando map() e reduce().

let Numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let Soma = Numeros.reduce((acumulador, valor) => {return acumulador + valor});

//console.log(Soma);

let NovoArray = Numeros.map((valor, index) => {return index / Soma});

console.log(NovoArray);

// Crie uma função que receba um array de palavras e um número, e que retorna uma matriz (array) com apenas as palavras que têm mais 
//do que uma quantidade de letras maior do que o número informado. (verifique como funciona o método filter ())

let Palavras = ['Carro', 'Boneca', 'Televisão', 'Notebook'];

let PalavrasMaior = Palavras.filter((palavras) => {return palavras.length > 5})

console.log(PalavrasMaior);

// Crie um array de objetos literais, onde cada objeto será um aluno e terá dois atributos: nome e nota. Crie duas funções que ordenam 
//o array: uma ordenará os alunos em ordem alfabética e a outra o fará por nota, da mais alta para a mais baixa. 

let Alunos = [{Nome: 'Maria', Nota: 7.5}, {Nome: 'Carlos', Nota: 8}, {Nome: 'João', Nota: 5}];

console.log(Alunos.sort((a, b) => {return a.Nome.localeCompare(b.Nome)}));
console.log(Alunos.sort((a, b) => {return b.Nota - a.Nota}));


// Temos que fazer um sistema para um Agricultor controlar suas vendas. Ele tem um controle de vendas em um caderno, onde os 
//produtos estão organizados por nome, preço e quantidade vendida. 
// Portanto, crie um array de objetos literais com essas informações. No sistema, você tem que adicionar uma função (ou várias) 
//que realize os seguintes passos:

let Produtos = [{nome: 'Banana', preco: 1.99, qtd: 12}, 
                {nome: 'Maçã', preco: 2, qtd: 5}, 
                {nome: 'Banana', preco: 5.97, qtd: 36},
                {nome: 'Pêra', preco: 19.50, qtd: 12},
                {nome: 'Morango', preco: 5.00, qtd: 1},
                {nome: 'Amexa', preco: 18.00, qtd: 36},
                {nome: 'Pêra', preco: 39, qtd: 24},
                {nome: 'Morango', preco: 15.00, qtd: 3}];
// Calcular o lucro total de todos os produtos;
let lucroTotal = Produtos.reduce((acumulador, valor) => acumulador + valor.preco, 0);

//console.log(lucroTotal);

// Permitir pesquisar um produto pelo nome e calcular seu lucro total;
let fruta = 'Banana';

let lucroProduto = Produtos.filter((produtos) => {return produtos.nome == fruta});

//console.log(lucroProduto);

let lucroTotalProduto = lucroProduto.reduce((acumulador, valor) => acumulador + valor.preco, 0);

//console.log('Produto pesquisado: ' + fruta + ' - valor total: ' + lucroTotalProduto);

// Permite receber um valor e indicar todos os produtos que venderam mais que esse valor;
let valorIndicado = 10;

let produtosVenderamMais = Produtos.filter((produtos) => {return produtos.preco > valorIndicado});

//console.log(produtosVenderamMais);

//  Classifique todos os produtos pela quantidade de dinheiro que geraram.
let classificaodProdutos = Produtos.sort((a, b) => {return b.preco - a.preco});

//console.log(classificaodProdutos);

// Encontre um produto e atribua a ele um novo valor (reutilize o código que permite encontrar o produto pelo nome).


// Calcule o lucro total após pagar 45% do lucro em impostos.



