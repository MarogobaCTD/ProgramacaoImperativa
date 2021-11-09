//1
function polcent(polegadas){
    return polegadas * 2.54;
}

console.log(polcent(2));
//2
function funcaojs(texto){
    return "http://www." + texto + ".com.br";
}

console.log(funcaojs("google"));

//3
function funcaoExclama(texto){
    return texto+"!";
}

console.log(funcaoExclama("Olá Mundo"));

//4
function idadeCachorro(idade){
    let idCao = idade * 7;
    return "A idade do seu cachorro é " + idCao;
}

console.log(idadeCachorro(5));

//5
function valorHorasTrabalhadas(salario){
    return "A sua hora trabalhada é R$ " + parseFloat((salario / 160)).toFixed(2);
}

console.log(valorHorasTrabalhadas(13250));

//6
function calculadoraIMC(altura, peso){
    let alturacm = altura * 100;
    let imc = parseFloat(peso / (altura * altura)).toFixed(2);

    return "O seu IMC é " + imc;
}

console.log(calculadoraIMC(1.7, 87.7));