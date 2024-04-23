/*
    As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
    forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
    compradas, calcule e escreva o valor total da compra.
* */

const entrada = require('prompt-sync')();
let numeroMacas = parseInt(entrada("Quantidade de maçãs compradas: "));
if (numeroMacas < 12) {
    console.log(`Foram compradas ${numeroMacas} maçãs. Total: R$ ${numeroMacas * 0.30}`);
} else {
    console.log(`Foram compradas ${numeroMacas} maçãs. Total: R$ ${numeroMacas * 0.25}`);
}