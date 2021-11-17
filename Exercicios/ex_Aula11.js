// for (let i=0; i<5; i++){
//     console.log("Olá Mundo!");
// }

// console.log("Números ímpares")
// for (let i=1; i<=10; i++){
//     if (i % 2 != 0){
//         console.log(i);
//     }
// }

// for (let i = 1; i < 10; i++){
//     console.log("Tabuada de " + i);
//     for (let x = 1; x < 10; x++){
//         console.log(i +" * " + x + " = " + i * x);
//     }
// }

function impar(inte){
    let i = 1;
    console.log("Números Ímpares");
    while (i<=inte){
        if (i % 2 != 0){
            console.log(i);
        }
        i++;
    }
    return " ";
}

function par(inte){
    let i = 1;
    console.log("Números Pares");
    while (i<=inte){
        if (i % 2 == 0){
            console.log(i);
        }
        i++;
    }
    return " ";
}

function imprimirNumeros(inte){
    impar(inte);
    par(inte);
}

imprimirNumeros(10);