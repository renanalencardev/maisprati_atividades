/*
   Escrever um algoritmo que leia 5 valores para uma variável N e, para cada um deles,
   calcule e mostre a tabuada de 1 até N. Mostre a tabuada na forma:
1 x N = N
2 x N = 2N
3 x N = 3N
* */

const entrada = require('prompt-sync')();
let cont = 1;
while (cont <= 5) {
    let tabuada = parseInt(entrada("Digite o primeiro número: "));
    let multiplicador = 1;
    while (multiplicador <= tabuada){
        console.log(multiplicador, " x ", tabuada, " = ", multiplicador * tabuada);
        multiplicador++;
    }
    cont++;
}