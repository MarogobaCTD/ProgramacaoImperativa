const alice = [23, 69, 32];
const bob = [45, 69, 32];

function encontrarGanhador(a, b) {
    let ptsPrimeiroParticipante = 0;
    let ptsSegundoParticipante = 0;

    for (let i = 0; i < b.length; i++) {
        if (a[i]>b[i]){
            ptsPrimeiroParticipante++; 
        } else if (a[i]<b[i]){
            ptsSegundoParticipante++;
        }
    }
    //return ptsPrimeiroParticipante > ptsSegundoParticipante ? "1o participante" : "2o participante";
    if (ptsPrimeiroParticipante > ptsSegundoParticipante) {
        return "1o participante";
    } else if (ptsSegundoParticipante > ptsPrimeiroParticipante){
        return "2o participante";
    } else {
        return "empate";
    }
}

console.log("O ganhador é: " + encontrarGanhador(alice, bob));



// Crie a função digitalHouse() que receberá 2 números como parâmetros. A função deve
// imprimir na tela os números de 1 a 100, mas levando em conta os seguintes critérios:
// ● Se o número a ser impresso for um múltiplo do primeiro parâmetro inserido,
// você deve exibir a string &quot;Digital&quot; em vez do número.
// ● Se o número a ser impresso for um múltiplo do segundo parâmetro inserido,
// você deve exibir a string &quot;House&quot; em vez disso.
// ● Se o número a ser imprimir for um múltiplo de ambos os parâmetros, você
// deve exibir a string &quot;Digital House&quot; em vez do número.

function digitalHouse(a, b){
    for (let i = 1; i <= 100; i++) {
       console.log(i);
       if ((i % a == 0) && (i % b == 0)) {
           console.log("Digital House");
        } else if (i % a == 0) {
            console.log("Digital");
           } else if (i % b == 0) {
               console.log("House");
           } else {
               console.log("Não é multiplo");
           }
       }
    return "";
}

digitalHouse(4, 9);


function somaArray(a) {
    let soma = 0
    for (let i = 0; i < a.length; i++) {
        soma += a[i];
    }
    return soma;
  }

console.log("Soma array [1,2,3] = " + somaArray([1,2,3]));
console.log("Soma array [10, 3, 10, 4] = " + somaArray([10, 3, 10, 4]));
console.log("Soma array [-5,100] = " + somaArray([-5,100]));

function agrupaString(a) {
    let texto = "";
    for (let index = 0; index < a.length; index++) {
        texto += a[index];
    }
    return texto;
}

console.log("Soma array ['o','l','a'] = " + agrupaString(['o','l','a']));
console.log("Soma array ['t','c','h','a','u'] = " + agrupaString(['t','c','h','a','u'] ));