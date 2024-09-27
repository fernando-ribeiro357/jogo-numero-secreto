let listaDeNumerosSorteados = [];
let numeroLimite = 100;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function falarTexto(texto, voz='Brazilian Portuguese Female') {
    responsiveVoice.speak(texto, voz, { rate: 1.2 });
}

function exibirMensagemInicial() {
    let titulo = 'Jogo do número secreto';
    let paragrafo = `Escolha um número entre 1 e ${numeroLimite}`
    exibirTextoNaTela('h1', titulo);
    exibirTextoNaTela('p', paragrafo);
    falarTexto(titulo);
    falarTexto(paragrafo);
    limparCampo();
}

exibirMensagemInicial();


function verificarChute() {
    let chute = document.querySelector('input').value;
    let textoMensagem;
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        falarTexto(mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');

    } else {
        if (chute > numeroSecreto) {
            textoMensagem=`O número secreto é menor que ${chute}`
        } else {            
            textoMensagem=`O número secreto é maior que ${chute}`
        }
        exibirTextoNaTela('p', textoMensagem);
        falarTexto(textoMensagem,)
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }
    if (listaDeNumerosSorteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido);
//        console.log(listaDeNumerosSorteados)
        return numeroEscolhido;
    }
}

function limparCampo() {
    inputChute = document.querySelector('input');
    inputChute.value = '';
    inputChute.focus();
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}

document.querySelector('input').addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'Enter':
                verificarChute();
                break;
            
            case 'Escape':
                // reiniciarJogo();
                document.getElementById('reiniciar').click();
                break;
        }
    }, true,
);