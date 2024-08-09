// Substituições e Inversas
const substitutions = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

const reverseSubstitutions = Object.fromEntries(
    Object.entries(substitutions).map(([key, value]) => [value, key])
);

// Funções Auxiliares
function limpaAreaTexto() {
    document.getElementById('areaDecodificacao').innerHTML = "";
    document.getElementById('secondArea').innerHTML = "";
}

function limpaAreaDigitada() {
    document.getElementById('digiteTexto').value = "";
}

function botaoCopiar() {
    let copiarButton = document.getElementById('copiar');
    if (!copiarButton) {
        copiarButton = document.createElement('button');
        copiarButton.id = 'copiar';
        copiarButton.textContent = 'Copiar';
        copiarButton.onclick = copiar;
        const buttonContainer = document.createElement('div');
        buttonContainer.appendChild(copiarButton);
        document.getElementById('secondArea').appendChild(buttonContainer);
    }
}

function verificaCaracteres(texto) {
    return /^[a-z\s]+$/.test(texto);
}

function mostraErro(mensagem) {
    limpaAreaTexto();
    const erroHtml = `<div class="error">${mensagem}</div>`;
    document.getElementById('areaDecodificacao').innerHTML = erroHtml;
}

// Funções de Criptografia e Descriptografia
function codifica(texto) {
    return texto.split('').map(char => substitutions[char] || char).join('');
}

function descriptografar() {
    const textoDigitado = document.getElementById('digiteTexto').value;

    if (!textoDigitado) {
        mostraErro('Digite algo no campo de texto.');
    } else if (!verificaCaracteres(textoDigitado)) {
        mostraErro('Você digitou caracteres inválidos. Use apenas letras minúsculas, sem acentos e caracteres especiais');
    } else {
        limpaAreaTexto();
        let resultado = textoDigitado;

        // Aplica as substituições inversas
        for (const [key, value] of Object.entries(reverseSubstitutions)) {
            resultado = resultado.split(key).join(value);
        }

        document.getElementById('areaDecodificacao').innerHTML = resultado;
        botaoCopiar();
    }
}

function criptografar() {
    const texto = document.getElementById('digiteTexto').value;

    if (!texto) {
        mostraErro('Digite algo no campo de texto.');
    } else if (!verificaCaracteres(texto)) {
        mostraErro('Você digitou caracteres inválidos. Use apenas letras minúsculas, sem acentos e caracteres especiais');
    } else {
        limpaAreaTexto();
        document.getElementById('areaDecodificacao').innerHTML = codifica(texto);
        botaoCopiar();
    }
}

// Função para copiar o texto
function copiar() {
    const textoParaCopiar = document.getElementById('areaDecodificacao').innerText;

    navigator.clipboard.writeText(textoParaCopiar).then(() => {
        const copiarButton = document.getElementById('copiar');
        copiarButton.textContent = 'COPIADO';
        limpaAreaDigitada();
        document.getElementById('digiteTexto').placeholder = 'Texto copiado...';

        setTimeout(() => {
            copiarButton.textContent = 'Copiar';
            document.getElementById('digiteTexto').placeholder = 'Cole aqui, ou digite outro texto..';
        }, 5000);
    }).catch(err => console.error('Falha ao copiar o texto: ', err));
}

function setupTextToSpeech() {
    const elements = document.querySelectorAll('.hover-text');
    elements.forEach(element => {
        element.addEventListener('mouseover', function() {
            responsiveVoice.speak(this.textContent, "Brazilian Portuguese Female");
        });
        element.addEventListener('mouseout', function() {
            responsiveVoice.cancel();
        });
    });
}

// Inicializa a função de leitura de texto quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', setupTextToSpeech);



