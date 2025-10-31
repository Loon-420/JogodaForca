// ===========================================
// 1. DADOS DO JOGO E CATEGORIAS (COM DICAS)
// ===========================================
const CATEGORIAS = {
    animais: [
        { palavra: "CACHORRO", dica: "O melhor amigo do homem." },
        { palavra: "ELEFANTE", dica: "Tem uma tromba e orelhas grandes." },
        { palavra: "GIRAFA", dica: "O animal mais alto do mundo." },
        { palavra: "LEAO", dica: "O rei da selva." },
        { palavra: "PANDA", dica: "Urso preto e branco que come bambu." },
        { palavra: "ZEBRA", dica: "Cavalo listrado." }
    ],
    carros: [
        { palavra: "FUSCA", dica: "Um clássico da Volkswagen." },
        { palavra: "CORSA", dica: "Um popular modelo da Chevrolet." },
        { palavra: "PALIO", dica: "Um carro compacto da Fiat." },
        { palavra: "ONIX", dica: "Um dos carros mais vendidos no Brasil." },
        { palavra: "FERRARI", dica: "Marca italiana de carros esportivos de luxo." },
        { palavra: "BMW", dica: "Marca alemã conhecida por carros de luxo e desempenho." }
    ],
    paises: [
        { palavra: "BRASIL", dica: "País do carnaval e do futebol." },
        { palavra: "CANADA", dica: "País grande na América do Norte, conhecido pelo xarope de bordo." },
        { palavra: "JAPAO", dica: "Terra do Sol Nascente." },
        { palavra: "ITALIA", dica: "País em forma de bota, famoso por massas e pizzas." },
        { palavra: "EGITO", dica: "Famoso pelas pirâmides e faraós." },
        { palavra: "FRANCA", dica: "Famoso pela Torre Eiffel." }
    ],
    filmes: [
        { palavra: "MATRIX", dica: "Pílula azul ou pílula vermelha?" },
        { palavra: "TITANIC", dica: "Grande navio, um iceberg e um romance." },
        { palavra: "STARWARS", dica: "Uma galáxia muito, muito distante..." },
        { palavra: "VINGADORES", dica: "Heróis mais poderosos da Terra se unem." },
        { palavra: "JURASSICPARK", dica: "Parque com dinossauros." },
        { palavra: "HARRYPOTTER", dica: "O menino bruxo." }
    ],
    series: [
        { palavra: "STRANGERTHINGS", dica: "Crianças em uma pequena cidade com eventos sobrenaturais nos anos 80." },
        { palavra: "LACASADEPAPEL", dica: "Um grupo planeja roubos à Casa da Moeda." },
        { palavra: "GOT", dica: "Luta pelo Trono de Ferro." },
        { palavra: "BREAKINGBAD", dica: "Um professor de química se torna um chefão das drogas." },
        { palavra: "THEOFFICE", dica: "Focada no dia a dia de funcionários de um escritório de papel." },
        { palavra: "FRIENDS", dica: "Seis amigos morando em Nova York." }
    ],
    cores: [
        { palavra: "AZUL", dica: "A cor do céu e do mar." },
        { palavra: "VERMELHO", dica: "Cor da paixão e do perigo." },
        { palavra: "AMARELO", dica: "Cor do sol." },
        { palavra: "VERDE", dica: "Cor da natureza e esperança." },
        { palavra: "ROXO", dica: "Cor da realeza." },
        { palavra: "LARANJA", dica: "Cor de uma fruta cítrica." }
    ],
    frutas: [
        { palavra: "BANANA", dica: "Uma fruta amarela que os macacos adoram." },
        { palavra: "MACA", dica: "Fruta que dizem manter o médico longe." },
        { palavra: "UVA", dica: "Pequenas frutas que crescem em cachos." },
        { palavra: "ABACAXI", dica: "Fruta tropical com coroa e casca espinhosa." },
        { palavra: "MORANGO", dica: "Pequena fruta vermelha, doce e popular." },
        { palavra: "MELANCIA", dica: "Fruta grande e verde por fora, vermelha e suculenta por dentro." }
    ],
    comidas: [
        { palavra: "PIZZA", dica: "Redonda, com queijo e vários recheios." },
        { palavra: "LASANHA", dica: "Prato italiano com camadas de massa, molho e queijo." },
        { palavra: "HAMBURGUER", dica: "Carne moída entre dois pães." },
        { palavra: "SUSHI", dica: "Prato japonês com arroz e peixe cru." },
        { palavra: "FEIJOADA", dica: "Prato típico brasileiro com feijão preto e carnes." },
        { palavra: "BOLO", dica: "Doce servido em aniversários." }
    ],
    aleatorio: [] // Será preenchido com todas as palavras combinadas
};

// Preenche a categoria "aleatorio" combinando todas as outras palavras
CATEGORIAS.aleatorio = [].concat(...Object.keys(CATEGORIAS).filter(key => key !== 'aleatorio').map(key => CATEGORIAS[key]));

let palavraSecretaObj = null; // {palavra: "...", dica: "..."}
let palavraSecreta = "";
let dicaAtual = "";
let letrasAdivinhadas = [];
let erros = 0;
const MAX_ERROS = 6;
const partesBoneco = ["pernaDir", "pernaEsq", "bracoDir", "bracoEsq", "corpo", "cabeca-container"]; 
const partesBonecoCorpo = ["corpo", "bracoEsq", "bracoDir", "pernaEsq", "pernaDir"];

// Multiplayer
let jogadores = []; // [{nome: "...", pontuacao: 0}]
let jogadorAtualIndex = 0;
let numJogadores = 1;


// ===========================================
// 2. ELEMENTOS DO DOM (PARA FACILITAR O ACESSO)
// ===========================================
const secaoMenu = document.getElementById('secaoMenu');
const secaoPersonalizacao = document.getElementById('secaoPersonalizacao');
const secaoJogo = document.getElementById('secaoJogo');
const secaoResultadosFinais = document.getElementById('secaoResultadosFinais');

const inputNumJogadores = document.getElementById('inputNumJogadores');
const divNomesJogadores = document.getElementById('divNomesJogadores');
const selectCategoria = document.getElementById('selectCategoria');
const botaoComecarJogo = document.getElementById('botaoComecarJogo');
const botaoIrParaPersonalizacao = document.getElementById('botaoIrParaPersonalizacao');
const botaoVoltarParaMenu = document.getElementById('botaoVoltarParaMenu');
const botaoVoltarAoMenuJogo = document.getElementById('botaoVoltarAoMenuJogo');
const botaoNovoJogo = document.getElementById('botaoNovoJogo');
const botaoVoltarDoResultado = document.getElementById('botaoVoltarDoResultado');

const inputFoto = document.getElementById('inputFotoParticipante');
const botaoEscolher = document.getElementById('botaoEscolherFoto');
const previewFoto = document.getElementById('previewFoto');
const statusFoto = document.getElementById('statusFoto');
const cabecaFotoJogo = document.getElementById('cabeca-foto');

const inputCor = document.getElementById('inputCorTema');
const botaoSalvar = document.getElementById('botaoSalvarTema');
const root = document.documentElement;

const infoJogadorAtualDiv = document.getElementById('infoJogadorAtual');
const nomeJogadorAtualSpan = document.getElementById('nomeJogadorAtual');
const pontuacaoJogadorAtualSpan = document.getElementById('pontuacaoJogadorAtual');
const dicaDisplay = document.getElementById('dicaDisplay');
const textoDicaSpan = document.getElementById('textoDica');
const palavraDisplay = document.getElementById('palavraDisplay');
const forcaDesenho = document.getElementById('forcaDesenho');
const tecladoDiv = document.getElementById('teclado');
const mensagemJogo = document.getElementById('mensagemJogo');
const listaResultadosDiv = document.getElementById('listaResultados');


// ===========================================
// 3. FUNÇÕES DE NAVEGAÇÃO DE SEÇÕES
// ===========================================
function mostrarSecao(secaoId) {
    secaoMenu.style.display = 'none';
    secaoPersonalizacao.style.display = 'none';
    secaoJogo.style.display = 'none';
    secaoResultadosFinais.style.display = 'none';

    document.getElementById(secaoId).style.display = 'block';

    if (secaoId === 'secaoJogo' && numJogadores === 1) {
        infoJogadorAtualDiv.style.display = 'none';
    } else if (secaoId === 'secaoJogo' && numJogadores > 1) {
        infoJogadorAtualDiv.style.display = 'flex';
    }
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

// Prepara o jogo para o turno atual
function prepararTurno() {
    erros = 0;
    letrasAdivinhadas = [];
    
    // Seleciona uma palavra aleatória da categoria escolhida
    const categoriaSelecionada = selectCategoria.value;
    const palavrasDaCategoria = CATEGORIAS[categoriaSelecionada];
    
    // Evitar palavras repetidas em turnos diferentes do mesmo jogo
    let palavraJaUsada = true;
    while(palavraJaUsada) {
        palavraSecretaObj = palavrasDaCategoria[Math.floor(Math.random() * palavrasDaCategoria.length)];
        // Simples verificação: se a palavra não estiver no array de palavras já usadas pelos jogadores no jogo atual
        // Para simplificar, vou permitir repetição, mas em jogos maiores seria bom controlar isso.
        palavraJaUsada = false; // Desativa a verificação para este exemplo
    }

    palavraSecreta = palavraSecretaObj.palavra;
    dicaAtual = palavraSecretaObj.dica;

    mensagemJogo.textContent = "Adivinhe a palavra! Máximo de 6 erros.";
    botaoNovoJogo.style.display = 'none';
    botaoVoltarAoMenuJogo.style.display = 'inline-block';
    
    document.getElementById('cabeca-container').style.opacity = '0'; 
    partesBonecoCorpo.forEach(id => {
        document.getElementById(id).style.opacity = '1'; 
    });
    
    renderizarPalavra();
    renderizarTeclado();
    textoDicaSpan.textContent = dicaAtual;
    
    if (numJogadores > 1) {
        nomeJogadorAtualSpan.textContent = jogadores[jogadorAtualIndex].nome;
        pontuacaoJogadorAtualSpan.textContent = jogadores[jogadorAtualIndex].pontuacao;
    }
}

// Inicia o jogo multiplayer ou single player
function iniciarJogo() {
    numJogadores = parseInt(inputNumJogadores.value);
    jogadores = [];
    jogadorAtualIndex = 0;

    // Pega os nomes dos jogadores
    if (numJogadores > 1) {
        const inputsNomes = document.querySelectorAll('#divNomesJogadores input');
        inputsNomes.forEach((input, index) => {
            jogadores.push({
                nome: input.value || `Jogador ${index + 1}`,
                pontuacao: 0
            });
        });
    } else {
        jogadores.push({ nome: "Você", pontuacao: 0 }); // Single player
    }

    prepararTurno(); // Começa o primeiro turno
    mostrarSecao('secaoJogo'); 
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
        mensagemJogo.textContent = `🎉 PARABÉNS, ${jogadores[jogadorAtualIndex].nome}! Você Venceu o turno!`;
        jogadores[jogadorAtualIndex].pontuacao += 100; // Adiciona pontos
        finalizarTurno(true);
    } else if (erros >= MAX_ERROS) {
        mensagemJogo.textContent = `Você Perdeu, ${jogadores[jogadorAtualIndex].nome}! A palavra era: ${palavraSecreta}`;
        finalizarTurno(false);
    }
}

function finalizarTurno(vitoria) {
    document.querySelectorAll('.btn-letra').forEach(btn => btn.disabled = true);
    botaoNovoJogo.style.display = 'block';
    botaoNovoJogo.textContent = (numJogadores > 1 && jogadorAtualIndex < numJogadores - 1) ? "Próximo Jogador" : "Ver Resultados Finais";
    pontuacaoJogadorAtualSpan.textContent = jogadores[jogadorAtualIndex].pontuacao; // Atualiza a pontuação final do jogador no turno
}

function passarTurnoOuFinalizar() {
    if (numJogadores > 1 && jogadorAtualIndex < numJogadores - 1) {
        jogadorAtualIndex++; // Passa para o próximo jogador
        prepararTurno();
        botaoNovoJogo.textContent = "Próximo Turno / Novo Jogo"; // Reseta o texto do botão
    } else {
        // Fim do jogo (todos os jogadores jogaram ou single player)
        mostrarResultadosFinais();
    }
}

function mostrarResultadosFinais() {
    listaResultadosDiv.innerHTML = '';
    const resultadosOrdenados = [...jogadores].sort((a, b) => b.pontuacao - a.pontuacao);

    resultadosOrdenados.forEach((jogador, index) => {
        const divResultado = document.createElement('div');
        divResultado.classList.add('resultado-jogador');
        divResultado.innerHTML = `
            <span>${index + 1}º - <strong>${jogador.nome}</strong></span>
            <span class="pontuacao">${jogador.pontuacao} pontos</span>
        `;
        listaResultadosDiv.appendChild(divResultado);
    });
    mostrarSecao('secaoResultadosFinais');
}

// ===========================================
// 6. EVENTOS DE MENU E JOGADORES
// ===========================================

// Gera inputs de nome para os jogadores
inputNumJogadores.addEventListener('change', (event) => {
    numJogadores = parseInt(event.target.value);
    divNomesJogadores.innerHTML = ''; // Limpa inputs anteriores
    
    if (numJogadores > 1) {
        divNomesJogadores.style.display = 'block';
        for (let i = 0; i < numJogadores; i++) {
            const inputNome = document.createElement('input');
            inputNome.type = 'text';
            inputNome.classList.add('input-personalizado');
            inputNome.placeholder = `Nome do Jogador ${i + 1}`;
            divNomesJogadores.appendChild(inputNome);
            divNomesJogadores.appendChild(document.createElement('br')); // Quebra de linha
        }
    } else {
        divNomesJogadores.style.display = 'none';
    }
});


// ===========================================
// 7. INICIALIZAÇÃO E EVENT LISTENERS GLOBAIS
// ===========================================

document.addEventListener('DOMContentLoaded', () => {
    configurarPersonalizacao(); 
    mostrarSecao('secaoMenu'); 

    // Eventos de Navegação
    botaoComecarJogo.addEventListener('click', iniciarJogo);
    botaoIrParaPersonalizacao.addEventListener('click', () => mostrarSecao('secaoPersonalizacao'));
    botaoVoltarParaMenu.addEventListener('click', () => mostrarSecao('secaoMenu'));
    botaoVoltarAoMenuJogo.addEventListener('click', () => mostrarSecao('secaoMenu'));
    botaoVoltarDoResultado.addEventListener('click', () => mostrarSecao('secaoMenu'));
    
    // Evento para "Próximo Turno / Novo Jogo"
    botaoNovoJogo.addEventListener('click', passarTurnoOuFinalizar);

    // Inicializa os inputs de nome se o valor padrão de numJogadores for > 1
    inputNumJogadores.dispatchEvent(new Event('change'));
});
