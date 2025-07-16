// Desafio aula 2
// Criar uma função que exiba 'Olá, mundo' no console
function ola() {
    console.log('Olá, mundo');
}

// Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function olaNome(nome) {
    console.log(`Olá, ${nome}!`)
}
olaNome('Lucas');

// Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobroNumero(numero) {
    // Usar o return para armazenar o resultado da conta
    return numero * 2;
}
// Variável que guarda o dobro
let resultado = dobroNumero(5);
console.log(resultado)

// Criar uma função que recebe três números como parâmetros e retorna a média deles.
function mediaNumeros(a, b, c) {
    return (a + b + c) / 3;
}
let resultadoMedia = mediaNumeros(2, 4, 6);
console.log(resultadoMedia);

// Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function exibirMaior(a, b) {
    return a > b ? a : b;
}
let valorMaior = exibirMaior(3, 6);
console.log(valorMaior);

//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número 
// por ele mesmo
function squareNumber(d) {
    return d **2;
}
let resultadoQuadrado = squareNumber(3);
console.log(resultadoQuadrado);