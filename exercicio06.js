/*
    Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
    formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
    Isósceles, escaleno ou eqüilátero.
    Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
    Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
    Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
    Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
*/
const entrada = require('prompt-sync')();
console.log("-------- TRIÂNGULO --------")
let ladoA = parseFloat(entrada("Digite o valor do primeiro lado do triângulo: "))
let ladoB = parseFloat(entrada("Digite o valor do segundo lado do triângulo: "))
let ladoC = parseFloat(entrada("Digite o valor do terceiro lado do triângulo: "))

if(ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB){
    if(ladoA === ladoB && ladoA === ladoC){
        console.log("Triângulo Equilátero.");
    } else if (ladoA !== ladoB && ladoB !== ladoC){
        console.log("Triângulo Escaleno.");
    } else {
        console.log("Triângulo Isósceles.");
    }
} else {
    console.log("Os lados fornecidos não formam um triângulo.")
}

