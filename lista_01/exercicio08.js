/*
    Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
e escreve-los em ordem crescente.
* */

const entrada = require('prompt-sync')();
console.log("-------- ORDEM CRESCENTE --------")
let valorUm = parseFloat(entrada("Digite o primeiro valor: "));
let valorDois = parseFloat(entrada("Digite o segundo valor: "));
console.log();
if(valorUm !== valorDois){
    if(valorUm < valorDois){
        console.log("Ordem crescente dos valores: ", valorUm, valorDois);
    } else {
        console.log("Ordem crescente dos valores: ", valorDois, valorUm);
    }
}else {
    console.log("Valores iguais!!")
}