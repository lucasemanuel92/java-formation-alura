// Resolução dos desafios da aula 01.Iniciando com JavaScript
// Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". 
// Caso contrário, mostre "Boa semana!".
let diaDaSemana = prompt('Qual é o dia da Semana hoje?');
if (diaDaSemana == 'Sabado' || 'Domingo') {
    console.log('Bom fim de semana.');
} else {
    console.log('Boa semana');
}

// Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.
let numeroSinal = prompt('Digite um numero qualquer');
if (numeroSinal >= 0) {
    console.log('O número é positovo');
} else {
    console.log('O número é negativo');
}

// Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". 
// Caso contrário, mostre "Tente novamente para ganhar."
let pontuacao = 150;
if (pontuacao > 100) {
    console.log('Parabéns, você venceu');
} else {
    console.log('Tente novamente para ganhar');
}

// Crie uma mensagem que informa o usuário sobre o saldo da conta, 
// usando uma template string para incluir o valor do saldo.
let saldo = 3456.50;
console.log(`Seu saldo é de $${saldo} reais`);

// Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
let nome = prompt('Digite seu nome: ');
console.log(`Bem vindo ${nome}`);