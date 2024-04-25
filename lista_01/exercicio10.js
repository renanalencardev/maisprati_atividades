/*
   Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
* */
const entrada = require('prompt-sync')();
console.log("-------- IMPRIMIR 10X --------")
let num = entrada("Digite o número a ser impresso 10x: ");
num+="\n"
console.log(num.repeat(10));