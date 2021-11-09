/*Olá, você foi contratado para executar este projeto. É importante que você analise, entenda o pedido do cliente e desenvolva conforme solicitado. Veja abaixo os requisitos do projeto:

- Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

      1 - Pipoca – 10 segundos (padrão);
      2 - Macarrão – 8 segundos (padrão);
      3 - Carne – 15 segundos (padrão);
      4 - Feijão – 12 segundos (padrão);
      5 - Brigadeiro – 8 segundos (padrão); 

- O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
- Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
- Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
- Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
- No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".*/

function microondas(itemMenu, tempo){
    let tempoPadrao = 0;

    switch (itemMenu){
        case 1:
            tempoPadrao = 10;
            break;
        case 2:
        case 5:
            tempoPadrao = 8;
            break;
        case 3:
            tempoPadrao = 15;
            break;
        case 4:
            tempoPadrao = 12;
            break;
        default:
            tempoPadrao = -1; 
    }
    
    if (tempoPadrao < 0) {
        return 'Prato inexistente!';
    } else if (tempo != 0 && tempo < tempoPadrao){
        return 'Tempo insuficiente!';
    } else if (tempo >= (tempoPadrao * 3)){
        return 'Kabummm!';
    } else if (tempo >= (tempoPadrao * 2)) {
        return 'Comida queimada!';
    } else {
        return 'Prato pronto, bom apetite!!!';
    }

}

console.log(microondas(1,0)); /*Prato pronto*/
console.log(microondas(3,45)); /*Kabum*/
console.log(microondas(10,15)); /*Prato inexistente*/
console.log(microondas(5,17)); /*Comida Queimada*/
console.log(microondas(4,10)); /*Tempo insuficiente*/