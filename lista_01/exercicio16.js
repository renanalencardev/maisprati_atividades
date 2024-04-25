/*
    Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.
* */
console.log("-------- 50 PRIMOS MAIORES QUE 100 --------")
let cont = 0;
let numero = 101;

while (cont < 50) {
    let primo = true;
    let divisor = 2;
    while (divisor <= Math.sqrt(numero)) {
        if (numero % divisor === 0) {
            primo = false;
            break;
        }
        divisor++;
    }
    if (primo) {
        console.log(numero);
        cont++;
    }
    numero++;
}
