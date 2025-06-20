alert('Bem Vindo ao Jogo do Número Secreto');
let numeroSecreto = parseInt(Math.random() * 100 + 1);
let guess;
// Iniciando o contador
let counter = 1;

// Criando laço enquanto (while)
while (guess != numeroSecreto) {
    guess = prompt('Escolha um numero entre 1 e 100');
    // Criando a comparação/condição
    if (guess == numeroSecreto) {
            
            break;
    } else {
        if (guess > numeroSecreto) {
            alert(`O numero secreto é menor que ${guess}`);
        } else {
            alert(`O numero secreto é maior que ${guess}`);
        }
        counter++;
    }
}

// contador > 1 ? 'faça isso' caso contrario 'faça isso'
let palavraTentativa = counter > 1 ? 'tentantivas' : 'tentativa'
alert(`Isso ai! Você descobriu o número secreto ${numeroSecreto} com ${counter} ${palavraTentativa}`);