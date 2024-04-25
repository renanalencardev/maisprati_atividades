/*
    Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
    a média aritmética desses números.
* */
console.log("-------- MÉDIA --------")
const entrada = require('prompt-sync')();
let numero = parseInt(entrada("Digite um número: "));
let cont = 1;
let soma = numero;
while (numero !== 0){
    numero = parseFloat(entrada("Digite outro número ou 0 para encerrrar: "));
    cont++;
    soma+=numero;
}
console.log("A média dos números digitados é: ", soma / cont);
