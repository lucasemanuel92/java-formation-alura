// Resolução dos desafios da aula 03.Iniciando com JavaScript
// Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let count = 0;
while (count <= 10) {
    console.log(count);
    count++;
}

// Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
let counter = 10;
while (counter >= 0) {
    console.log(counter);
    counter--;
}

// Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, 
// usando um loop while no console do navegador.
let contadorRegressivo = prompt('Digite o número que a contagem regressiva irá iniciar: ');
while (contadorRegressivo >= 0) {
    console.log(contadorRegressivo);
    contadorRegressivo--;
}

// Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, 
// usando um loop while no console do navegador.
let contador = 0;
let contadorProgressivo = prompt('Digite o número que a contagem irá começar: ');
while (contador != contadorProgressivo) {
    console.log(contador);
    contador++;
}