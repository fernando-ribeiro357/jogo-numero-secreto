function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

alert('Bem vindo(a) ao Jogo do Número Secreto');
let min = 1;
let max = 50;
let numeroSecreto = getRandomInt(min, max);
console.log(numeroSecreto);
let chute;
let tentativas = 1;

while (numeroSecreto != chute) {
    chute = prompt(`Qual é o número secreto entre ${min} e ${max}?`)

    if (numeroSecreto == chute) {
        break;
    } else {
        if (numeroSecreto > chute) {
            alert(`O número secreto é maior que ${chute}`);
        } else {
            alert(`O número secreto é menor que ${chute}`);
        }
        tentativas++;
    }

}
let palavraTentativa = (tentativas > 1) ? 'tentativas' : 'tentativa';
alert(`Acertou o número Secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}`);

