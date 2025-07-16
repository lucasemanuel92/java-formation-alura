//  MODELO BÁSICO, MAS NÃO É
    // Alterar o valor selecionando um valor 
// let titulo = document.querySelector('h1');
    // Altera dentro do HTML o elemento com esse título
// titulo.innerHTML = 'Jogo do Número Secreto';

// let paragrafo = document.querySelector('p');
// paragrafo.innerHTML = 'Escolha um número entre 1 - 10';


// Crio a função
function exibirTextos(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}
// Chamo a função para ela ser executada
exibirTextos('h1', 'Jogo do Número Secreto');
exibirTextos('p', 'Escolha um número entre 1 e 10');

// Criando uma função atráves de um botão "onclick"
function verificarChute() { 
    
}

