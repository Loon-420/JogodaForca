// ===========================================
// 1. DADOS DO JOGO E CATEGORIAS
// ===========================================
const CATEGORIAS = {
    animais: ["CACHORRO", "GATO", "ELEFANTE", "LEAO", "TIGRE", "ABACATE", "ORANGOTANGO"],
    carros: ["FUSCA", "CELTA", "CORSA", "PALIO", "GOL", "UNO", "FERRARI"],
    paises: ["BRASIL", "CANADA", "JAPAO", "ITALIA", "MEXICO", "ARGENTINA", "PORTUGAL"],
    aleatorio: [] // Será preenchido com todas as palavras combinadas
};

let palavraSecreta = "";
let letrasAdivinhadas = [];
let erros = 0;
const MAX_ERROS = 6;
const partesBoneco = ["pernaDir", "pernaEsq", "bracoDir", "bracoEsq", "corpo", "cabeca-container"]; 
const partesBonecoCorpo = ["corpo", "bracoEsq", "bracoDir", "pernaEsq", "pernaDir"];

// Preenche a categoria "aleatorio" combinando todas as outras palavras
CATEGORIAS.aleatorio = [].concat(...Object.keys(CATEGORIAS).filter(key => key !== 'aleatorio').map(key => CATEGORIAS[key]));


// ===========================================
// 2. ELEMENTOS DO DOM (PARA FACILITAR O ACESSO)
// ===========================================
const secaoMenu = document.getElementById('secaoMenu');
const secaoPersonalizacao = document.getElementById('secaoPersonalizacao');
const secaoJogo = document.getElementById('secaoJogo');

const selectCategoria = document.getElementById('selectCategoria');
const botaoComecarJogo = document.getElementById('botaoComecarJogo');
const botaoIrParaPersonalizacao = document.getElementById('botaoIrParaPersonalizacao');
const botaoVoltarParaMenu = document.getElementById('botaoVoltarParaMenu');
const botaoVoltarAoMenuJogo = document.getElementById('botaoVoltarAoMenuJogo');
const botaoNovoJogo = document.getElementById('botaoNovoJogo');

const inputFoto = document.getElementById('inputFotoParticipante');
const botaoEscolher = document.getElementById('botaoEscolherFoto');
const previewFoto = document.getElementById('previewFoto');
const statusFoto = document.getElementById('statusFoto');
const cabecaFotoJogo = document.getElementById('cabeca-foto');

const inputCor = document.getElementById('inputCorTema');
const botaoSalvar = document.getElementById('botaoSalvarTema');
const root = document.documentElement;

const palavraDisplay = document.getElementById('palavraDisplay');
const forcaDesenho = document.getElementById('forcaDesenho');
const tecladoDiv = document.getElementById('teclado');
const mensagemJogo = document.getElementById('mensagemJogo');


// ===========================================
// 3. FUNÇÕES DE NAVEGAÇÃO DE SEÇÕES
// ===========================================
function mostrarSecao(secaoId) {
    secaoMenu.style.display = 'none';
    secaoPersonalizacao.style.display = 'none';
    secaoJogo.style.display = 'none';

    document.getElementById(secaoId).style.display = 'block';
}

// ===========================================
// 4. FUNÇÕES DE PERSONALIZAÇÃO (TEMA E FOTO)
// ===========================================

function configurarPersonalizacao() {
    // --- Lógica da Foto do Participante ---
    botaoEscolher.addEventListener('click', () => {
        inputFoto.click();
    });

    inputFoto.addEventListener('change', (event) => {
        const arquivo = event.target.files[0];
        if (arquivo) {
            statusFoto.textContent = 'Carregando...';
            const reader = new FileReader();
            reader.onload = function(e) {
                const fotoBase64 = e.target.result;
                previewFoto.src = fotoBase64;
                cabecaFotoJogo.src = fotoBase64; 
                localStorage.setItem('fotoJogadorForca', fotoBase64); 
                statusFoto.textContent = 'Foto salva!';
            };
            reader.readAsDataURL(arquivo);
        }
    });

    const fotoSalva = localStorage.getItem('fotoJogadorForca');
    if (fotoSalva) {
        previewFoto.src = fotoSalva;
        cabecaFotoJogo.src = fotoSalva; 
    }

    // --- Lógica da Cor do Tema ---
    const corSalva = localStorage.getItem('temaCorPrincipal') || '#4CAF50';
    root.style.setProperty('--cor-principal', corSalva);
    inputCor.value = corSalva; 
    
    inputCor.addEventListener('input', (event) => {
        const novaCor = event.target.value;
        root.style.setProperty('--cor-principal', novaCor);
        document.querySelector('meta[name="theme-color"]').setAttribute('content', novaCor);
    });

    botaoSalvar.addEventListener('click', () => {
        const corFinal = inputCor.value;
        localStorage.setItem('temaCorPrincipal', corFinal);
        alert('Tema salvo com sucesso!');
    });
}

// ===========================================
// 5. FUNÇÕES DE LÓGICA DO JOGO
// ===========================================

function iniciarJogo() {
    // 1. Reseta o estado
    erros = 0;
    letrasAdivinhadas = [];
    
    // Seleciona a palavra com base na categoria escolhida
    const categoriaSelecionada = selectCategoria.value;
    const palavrasDaCategoria = CATEGORIAS[categoriaSelecionada];
    palavraSecreta = palavrasDaCategoria[Math.floor(Math.random() * palavrasDaCategoria.length)];

    // 2. Reseta o visual
    mensagemJogo.textContent = "Adivinhe a palavra! Máximo de 6 erros.";
    botaoNovoJogo.style.display = 'none';
    botaoVoltarAoMenuJogo.style.display = 'inline-block'; // Garante que o botão de voltar apareça no jogo
    
    document.getElementById('cabeca-container').style.opacity = '0'; 
    partesBonecoCorpo.forEach(id => {
        document.getElementById(id).style.opacity = '1'; 
    });
    
    // 3. Renderiza o jogo
    renderizarPalavra();
    renderizarTeclado();
    mostrarSecao('secaoJogo'); // Mostra a seção do jogo
}

function renderizarPalavra() {
    let display = "";
    for (const letra of palavraSecreta) {
        display += (letrasAdivinhadas.includes(letra) ? letra : "_") + " ";
    }
    palavraDisplay.textContent = display.trim();
}

function renderizarTeclado() {
    tecladoDiv.innerHTML = '';
    const alfabeto = "ABCDEFGHIJKLMNOPQRSTUVWXYZÇ";

    for (const letra of alfabeto) {
        const botao = document.createElement('button');
        botao.textContent = letra;
        botao.classList.add('btn-letra');
        botao.addEventListener('click', () => tentarAdivinhar(letra, botao));
        tecladoDiv.appendChild(botao);
    }
}

function tentarAdivinhar(letra, botao) {
    if (letrasAdivinhadas.includes(letra) || erros >= MAX_ERROS) {
        return; 
    }

    letrasAdivinhadas.push(letra);
    botao.disabled = true;

    if (palavraSecreta.includes(letra)) {
        botao.classList.add('acerto');
        renderizarPalavra();
        verificarFimDeJogo();
    } else {
        botao.classList.add('erro');
        erros++;
        removerParteBoneco(); 
        verificarFimDeJogo();
    }
}

function removerParteBoneco() {
    if (erros > 0 && erros <= MAX_ERROS) {
        const idDaParteASumir = partesBoneco[erros - 1]; 
        document.getElementById(idDaParteASumir).style.opacity = '0'; 
    }
    if (erros === 1) { 
        document.getElementById('cabeca-container').style.opacity = '1';
    }
}

function verificarFimDeJogo() {
    const palavraAtual = palavraDisplay.textContent.replace(/ /g, '');

    if (palavraAtual === palavraSecreta) {
        mensagemJogo.textContent = "🎉 PARABÉNS! Você Venceu!";
        finalizarJogo(true);
    } else if (erros >= MAX_ERROS) {
        mensagemJogo.textContent = `Você Perdeu! A palavra era: ${palavraSecreta}`;
        finalizarJogo(false);
    }
}

function finalizarJogo(vitoria) {
    document.querySelectorAll('.btn-letra').forEach(btn => btn.disabled = true);
    botaoNovoJogo.style.display = 'block';
}

// ===========================================
// 6. INICIALIZAÇÃO E EVENT LISTENERS GLOBAIS
// ===========================================

document.addEventListener('DOMContentLoaded', () => {
    configurarPersonalizacao(); 
    mostrarSecao('secaoMenu'); // Inicia mostrando o menu

    // Eventos de Navegação
    botaoComecarJogo.addEventListener('click', iniciarJogo);
    botaoIrParaPersonalizacao.addEventListener('click', () => mostrarSecao('secaoPersonalizacao'));
    botaoVoltarParaMenu.addEventListener('click', () => mostrarSecao('secaoMenu'));
    botaoVoltarAoMenuJogo.addEventListener('click', () => mostrarSecao('secaoMenu'));
    
    // Evento de Novo Jogo (dentro da seção do jogo)
    botaoNovoJogo.addEventListener('click', iniciarJogo);
});
