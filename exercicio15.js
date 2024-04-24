/*
    Fazer um algoritmos para receber um número decimal e o peso de cada número até
    que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
    respectivos.
    calculamos o produto de cada valor pelo seu peso,
    somamos os produtos encontrados, e dividimos a soma pela soma dos pesos
* */
console.log("-------- MÉDIA PONDERADA --------")
const entrada = require('prompt-sync')();
let numero = parseFloat(entrada("Digite um número: "));
let peso = parseInt(entrada("Digite o peso: "));
let somaProdutos = 0;
let somaPesos = 0;
while (numero !== 0){
    somaProdutos += numero * peso;
    somaPesos += peso;
    numero = parseFloat(entrada("Digite outro número ou 0 para encerrrar: "));
    if(numero !== 0)
        peso = parseFloat(entrada("Digite o novo peso: "));
}
console.log();
console.log("Média ponderada: ", somaProdutos / somaPesos);

