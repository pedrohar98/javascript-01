alert('Boas vindas ao jogo do número secreto');
let numeroMaximo = 5000;
let numeroSecreto = parseInt(Math.random() * 100 + 1);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

// enquanto chute não for igual ao numeroSecreto
while (chute != numeroSecreto) {
    chute = prompt (`Escolha um número de 1 a ${numeroMaximo}`);
    // se chute for igual ao numeroSecreto
    if (chute == numeroSecreto) {
        break;
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        // Incrementa apenas nas tentativas erradas, tentativas = tentativas + 1;
        tentativas++;
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} em ${tentativas} ${palavraTentativa}.`);
// if (tentativas > 1) {
//     alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} em ${tentativas} tentativas.`);
// } else {
//     alert(`Isso aí! Você descobriu o número secreto ${numeroSecreto} em ${tentativas} tentativas.`)
// }
