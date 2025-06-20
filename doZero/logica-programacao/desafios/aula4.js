// Resolução dos desafios da aula 04.Iniciando com JavaScript
// Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.
console.log('Bem-Vindo aos desafios da aula 4');

//Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem 
// "Olá, [seu nome]!" no console do navegador.
let nome = 'Lucas';
console.log(`Olá, ${nome}`);

// Crie uma variável chamada "nome" e atribua a ela o seu nome. 
// Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!".
let segundoNome = 'Emanuel';
alert(`Olá, ${segundoNome}`);

// Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. 
// Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
let linguagemProgramacao = prompt('Qual sua linguagem de programação favorita?');
console.log(linguagemProgramacao);

// Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. 
// Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado".
// Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.
// Faça o mesmo com a subtração
let valor1 = 10;
let valor2 = 25;
let resultadoSoma = valor1 + valor2;
console.log(resultadoSoma);

let resultadoSub = valor1 - valor2;
console.log(resultadoSub);

//Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar 
// se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.
let idade = prompt('Insira sua idade: ');
if (idade >= 18) {
    console.log('Você é maior de idade');
} else {
    console.log('Você é menor de idade');
}

// Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. 
// Use if-else para imprimir a respectiva mensagem.
let numeroQualquer = prompt('Insira um número qualquer: ');
if (numeroQualquer >= 0) {
    console.log('O número é positivo');
} else {
    console.log('O número é negativo');
}

// Use um loop while para imprimir os números de 1 a 10 no console.
let counter = 0;
while (counter < 10) {
    console.log(counter);
    counter++;
}

// Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else 
// para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.
let nota = 8;
if (nota >= 7) {
    console.log('Aprovado');
} else {
    console.log('Reprovado');
}

// Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.
let random1 = Math.random();
console.log(random1);

// Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.
let random2 = parseInt(Math.random() * 10 + 1);
console.log(random2);

// Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.
let random3 = parseInt(Math.random() * 1000 + 1);
console.log(random3);