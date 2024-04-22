// Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
// valor correspondente em graus Fahrenheit.
const entrada = require('prompt-sync')();

let celcius = parseFloat(entrada("Digite a temperatura em ° Celcius: "));

let fahrenheit = celcius * 1.8 + 32;
console.log(`Temperatura em fahrenheit: ${fahrenheit}.`);