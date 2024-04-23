/*
    Escreva um algoritmo que leia o código de origem de um produto e imprima a região
    do mesmo, conforme a tabela abaixo:
    Código de origem:
1- Sul, 2- Norte, 3- Leste, 4- Oeste, 5 ou 6 - Nordeste, 7, 8 ου 9 - Sudeste, 10 até 20 - Centro-Oeste, 25 até 50 - Nordeste
Fora dos Intervalos - Produto Importado
* */

const entrada = require('prompt-sync')();
console.log("-------- REGIÃO DO PRODUTO --------")
let codigoOrigem = parseInt(entrada("Digite o código de origem do produto: "));
console.log()
if (codigoOrigem === 1) {
    console.log(`O código ${codigoOrigem} representa a região Sul.`);
} else if (codigoOrigem === 2) {
    console.log(`O código ${codigoOrigem} representa a região Norte.`);
} else if (codigoOrigem === 3) {
    console.log(`O código ${codigoOrigem} representa a região Leste.`);
} else if (codigoOrigem === 4) {
    console.log(`O código ${codigoOrigem} representa a região Oeste.`);
} else if (codigoOrigem === 5 || codigoOrigem === 6) {
    console.log(`O código ${codigoOrigem} representa a região Nordeste.`);
} else if (codigoOrigem >= 7 && codigoOrigem <= 9) {
    console.log(`O código ${codigoOrigem} representa a região Sudeste.`);
} else if (codigoOrigem >= 10 && codigoOrigem <= 20) {
    console.log(`O código ${codigoOrigem} representa a região Centro-Oeste.`);
} else if (codigoOrigem >= 25 && codigoOrigem <= 50) {
    console.log(`O código ${codigoOrigem} representa a região Nordeste.`);
} else {
    console.log("Produto importado.");
}