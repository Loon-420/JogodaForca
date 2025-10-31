// ===========================================
// 1. DADOS DO JOGO
// ===========================================
const PALAVRAS = ["JAVASCRIPT", "PROGRAMACAO", "PROGRESSIVE", "FORCA", "CELULAR", "GITHUB", "ANDROID"];
let palavraSecreta = "";
let letrasAdivinhadas = [];
let erros = 0;
const MAX_ERROS = 6;
const partesBoneco = ["cabeca", "corpo", "bracoEsq", "bracoDir", "pernaEsq", "pernaDir"];

// ===========================================
// 2. FUNÇÕES DE PERSONALIZAÇÃO (TEMA E FOTO)
// ===========================================

function configurarPersonalizacao() {
    // --- Lógica da Foto do Participante ---
    const inputFoto = document.getElementById('inputFotoParticipante');
    const botaoEscolher = document.getElementById('botaoEscolherFoto');
    const previewFoto = document.getElementById('previewFoto');
    const statusFoto = document.getElementById('statusFoto');

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
                localStorage.setItem('fotoJogadorForca', fotoBase64); // Salva a foto
                statusFoto.textContent = 'Foto salva!';
            };
            reader.readAsDataURL(arquivo);
        }
    });

    // Carrega a foto salva ao iniciar
    const fotoSalva = localStorage.getItem('fotoJogadorForca');
    if (fotoSalva) {
        previewFoto.src = fotoSalva;
    }

    // --- Lógica da Cor do Tema ---
    const inputCor = document.getElementById('inputCorTema');
    const botaoSalvar = document.getElementById('botaoSalvarTema');
    const root = document.documentElement;
    
    // Aplica o tema salvo ou o padrão
    const corSalva = localStorage.getItem('temaCorPrincipal') || '#4CAF50';
    root.style.setProperty('--cor-principal', corSalva);
    inputCor.value = corSalva; 
    
    // Pré-visualização em tempo real
    inputCor.addEventListener('input', (event) => {
        const novaCor = event.target.value;
        root.style.setProperty('--cor-principal', novaCor);
        // Opcional: Atualiza a cor do meta tag para barra de status (Melhor UX)
        document.querySelector('meta[name="theme-color"]').setAttribute('content', novaCor);
    });

    // Salvar permanentemente o tema
    botaoSalvar.addEventListener('click', () => {
        const corFinal = inputCor.value;
        localStorage.setItem('temaCorPrincipal', corFinal);
        alert('Tema salvo com sucesso!');
    });
}

// ===========================================
// 3. FUNÇÕES DE LÓGICA DO JOGO
// ===========================================

// Inicia um novo jogo
function iniciarJogo() {
    // 1. Reseta o estado
    erros = 0;
    letrasAdivinhadas = [];
    palavraSecreta = PALAVRAS[Math.floor(Math.random() * PALAVRAS.length)];

    // 2. Reseta o visual
    document.getElementById('mensagemJogo').textContent = "Adivinhe a palavra! Máximo de 6 erros.";
    document.getElementById('botaoNovoJogo').style.display = 'none';
    partesBoneco.forEach(id => {
        document.getElementById(id).style.display = 'none';
    });
    
    // 3. Renderiza o jogo
    renderizarPalavra();
    renderizarTeclado();
}

// Atualiza o display da palavra (ex: J A V A S C R I P T vira _ _ _ _)
function renderizarPalavra() {
    let display = "";
    for (const letra of palavraSecreta) {
        display += (letrasAdivinhadas.includes(letra) ? letra : "_") + " ";
    }
    document.getElementById('palavraDisplay').textContent = display.trim();
}

// Cria os botões de A a Z
function renderizarTeclado() {
    const tecladoDiv = document.getElementById('teclado');
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

// Lógica ao clicar em uma letra
function tentarAdivinhar(letra, botao) {
    if (letrasAdivinhadas.includes(letra) || erros >= MAX_ERROS) {
        return; 
    }

    letrasAdivinhadas.push(letra);
    botao.disabled = true; // Desabilita o botão

    if (palavraSecreta.includes(letra)) {
        botao.classList.add('acerto');
        renderizarPalavra();
        verificarFimDeJogo();
    } else {
        botao.classList.add('erro');
        erros++;
        desenharBoneco();
        verificarFimDeJogo();
    }
}

// Desenha uma parte do boneco a cada erro
function desenharBoneco() {
    if (erros <= MAX_ERROS) {
        document.getElementById(partesBoneco[erros - 1]).style.display = 'block';
    }
}

// Verifica se o jogo acabou
function verificarFimDeJogo() {
    const palavraAtual = document.getElementById('palavraDisplay').textContent.replace(/ /g, '');

    if (palavraAtual === palavraSecreta) {
        document.getElementById('mensagemJogo').textContent = "🎉 PARABÉNS! Você Venceu!";
        finalizarJogo(true);
    } else if (erros >= MAX_ERROS) {
        document.getElementById('mensagemJogo').textContent = `Você Perdeu! A palavra era: ${palavraSecreta}`;
        finalizarJogo(false);
    }
}

// Finaliza o jogo, desabilita letras e mostra o botão Novo Jogo
function finalizarJogo(vitoria) {
    // Desabilita todas as letras
    document.querySelectorAll('.btn-letra').forEach(btn => btn.disabled = true);
    document.getElementById('botaoNovoJogo').style.display = 'block';
}

// ===========================================
// 4. INICIALIZAÇÃO
// ===========================================

document.addEventListener('DOMContentLoaded', () => {
    // Configura os inputs de personalização (Foto e Tema)
    configurarPersonalizacao(); 
    
    // Configura o botão Novo Jogo
    document.getElementById('botaoNovoJogo').addEventListener('click', iniciarJogo);
    
    // Inicia o jogo no carregamento
    iniciarJogo();
});
