/*
   Escreva um algoritmo que gere os números de 1000 a 1999 e escreva aqueles que,
divididos por 11, dão resto igual a 5.
* */
const entrada = require('prompt-sync')();
console.log("-------- RESTO IGUAL A 5 --------")

let numero = 0;
while (numero !== 2000){
    numero++;
    if(numero % 11 === 5)
        console.log(numero);
}

