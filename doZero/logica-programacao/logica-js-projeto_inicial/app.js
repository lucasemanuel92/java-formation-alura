alert('Bem Vindo ao Jogo do Número Secreto');
let numeroSecreto = 5;
let guess = prompt('Escolha um número entre 1 e 10');

// Criando a comparação/condição
if (guess == numeroSecreto) {
    alert(`Você acertou. O numero secreto é ${numeroSecreto}`);
} else {
    alert('Você errou!')
}