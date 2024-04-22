/*
    Escreva um algoritmo para ler as notas das duas avaliações de um aluno no semestre,
    calcular e escrever a média semestral e a seguinte mensagem: ‘PARABÉNS! Você foi
    aprovado’, somente se o aluno foi aprovado (considere 6.0 a nota mínima para
    aprovação).
*/
const entrada = require('prompt-sync')();
console.log("-------- MÉDIA SEMESTRAL --------")
let notaUm = parseFloat(entrada("Digite a primeira nota: "));
let notaDois = parseFloat(entrada("Digite a segunda nota: "));
console.log()
console.log("-------- RESULTADO --------")
if((notaUm + notaDois) / 2 >= 6.0)
    console.log("PARABÉNS! Você foi aprovado.");
else
    console.log("Você foi REPROVADO! Estude mais.")