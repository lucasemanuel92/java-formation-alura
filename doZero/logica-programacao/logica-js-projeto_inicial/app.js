alert('Bem Vindo ao Jogo do Número Secreto');
let numeroSecreto = 5;
let guess;
// Iniciando o contador
let counter = 1;

// Criando laço enquanto (while)
while (guess != numeroSecreto) {
    guess = prompt('Escolha um numero entre 1 e 10');
    // Criando a comparação/condição
    if (guess == numeroSecreto) {
        alert(`Você acertou. O numero secreto é ${numeroSecreto}, com ${counter} tentativas`);
    } else {
        if (guess > numeroSecreto) {
            alert(`O numero secreto é menor que ${guess}`);
        } else {
            alert(`O numero secreto é maior que ${guess}`);
        }
        counter++;
    }
}
