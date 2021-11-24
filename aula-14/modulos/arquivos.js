let calcular = {
    adicionar: function (valor1, valor2){
        return valor1 + valor2;
    },

    subtracao: function (valor1, valor2){
        return valor1 - valor2;
    },

    multiplicacao: function (valor1, valor2){
        return valor1 * valor2;
    },

    divisao: function (valor1, valor2){
        return valor1 / valor2;
    },

    quadradoDoNumero: function (numero){
    return multiplicacao(numero, numero);
    },

    mediaDeTresNumeros: function (numero1, numero2, numero3){
        let soma = adicionar(numero1, numero2);
        soma = adicionar(soma, numero3);
        return divisao(soma, 3);

    },

    calculaPorcentagem: function (numero, percentual){
        let valor = multiplicacao(numero, percentual);
        return valor / 100;
    },

    geradorDePorcentagem: function (numero1, numero2){
        let valor = divisao(numero1, numero2);
        return valor * 100;
    },
}

module.exports = calcular;


