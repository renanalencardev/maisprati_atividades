/*
   Escreva um algoritmo para ler uma quantidade indeterminada de valores inteiros. Para
cada valor fornecido escrever uma mensagem que indica se cada valor fornecido é PAR
ou ÍMPAR. O algoritmo será encerrado imediatamente após a leitura de um valor NULO ou
NEGATIVO.
* */
const entrada = require('prompt-sync')();
console.log("-------- PAR OU ÍMPAR --------")
let numero = parseInt(entrada("Digite um valor inteiro: "));
while (numero >= 0 && numero !== null){
    if(numero % 2 === 0)
        console.log("Número Par.");
    else
        console.log("Número Ímpar");
    numero = parseInt(entrada("Digite outro valor: "));
}