/*
 Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
    ● Some 25 ao primeiro inteiro;
    ● Triplique o valor do segundo inteiro;
    ● Modifique o valor do terceiro inteiro para 12% do valor original;
    ● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
    dos primeiros três inteiros.
*/

const entrada = require('prompt-sync')();
console.log("-------- OPERAÇÕES --------")
let num1 = parseInt(entrada("Digite o primeiro número inteiro: "));
let num2 = parseInt(entrada("Digite o segundo número inteiro: "));
let num3 = parseInt(entrada("Digite o terceiro número inteiro: "));
let num4 = parseInt(entrada("Digite o quarto número inteiro: "));

num4 = num1 + num2 + num3;
num1 += 25;
num2 *= 3;
num3 *= 0.12;

console.log()
console.log("-------- RESULTADO --------")
console.log("A soma do primeiro número com 25 é igual a:", num1);
console.log(`O triplo do segundo número é: ${num2}`);
console.log(`12% do terceiro número é: ${num3}`);
console.log("A soma dos três primeiros é: ", num4)