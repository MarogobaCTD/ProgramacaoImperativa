
function adicionar(valor1, valor2){
    return valor1 + valor2;
}

function subtracao(valor1, valor2){
    return valor1 - valor2;
}

function multiplicacao(valor1, valor2){
    return valor1 * valor2;
}

function divisao(valor1, valor2){
    return valor1 / valor2;
}

function quadradoDoNumero(numero){
   return multiplicacao(numero, numero);
}

function mediaDeTresNumeros(numero1, numero2, numero3){
    let soma = adicionar(numero1, numero2);
    soma = adicionar(soma, numero3);
    return divisao(soma, 3);

}

function calculaPorcentagem(numero, percentual){
    let valor = multiplicacao(numero, percentual);
    return valor / 100;
}

function geradorDePorcentagem(numero1, numero2){
    let valor = divisao(numero1, numero2);
    return valor * 100;
}

console.log ("-------------- Teste de Operações / Calculadora --------------");

console.log("Vamos testar a soma dos valores 5 e 3");
console.log("O resultado de 5 + 3 é " + adicionar(5,3));

console.log("Vamos testar a subtração dos valores 5 e 3");
console.log("O resultado de 5 - 3 é " + subtracao(5,3));

console.log("Vamos testar a multiplicação dos valores 5 e 3");
console.log("O resultado de 5 * 3 é " + multiplicacao(5,3));

console.log("Vamos testar a divisão dos valores 8 e 2");
console.log("O resultado de 8 / 2 é " + divisao(8,2));

console.log("Vamos testar a divisão dos valores 8 e 0");
console.log("O resultado de 8 / 0 é " + divisao(8,0));

console.log("O quadrado do número 5 é " +  quadradoDoNumero(5));

console.log("A media dos três números 5, 7, 9 é " +  mediaDeTresNumeros(5,7,9));

console.log("Qual o valor de 30% de 850? O Valor é " +  calculaPorcentagem(850, 30));

console.log("Qual o percentual de 3 por 35? O percentual é " +  geradorDePorcentagem(3, 35).toFixed(2) + "%");
