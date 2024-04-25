//Escreva um algoritmo para ler o número de eleitores de um município, o número de
// votos brancos, nulos e válidos. Calcular e escrever o percentual que cada um representa
// em relação ao total de eleitores.

const entrada = require('prompt-sync')();
console.log("-------- PERCENTUAL DE VOTOS --------")
let eleitores = parseInt(entrada("Digite o total de eleitores: "));
let branco = parseInt(entrada("Digite a quantidade de votos em branco: "));
let nulo = parseInt(entrada("Digite a quantidade de votos nulos: "));
let valido = parseInt(entrada("Digite a quantidade de votos válidos: "));

let percentualBranco = branco * 100 / eleitores;
let percentualNulo = nulo * 100 / eleitores;
let percentualValido = valido * 100 / eleitores;
console.log();
console.log("-------- TOTAL --------")
console.log(`O percentual de votos em branco é de: ${percentualBranco}%`);
console.log(`O percentual de votos nulos é de: ${percentualNulo}%`);
console.log(`O percentual de votos válidos é de: ${percentualValido}%`);
























