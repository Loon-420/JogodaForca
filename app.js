// ===========================================
// 1. DADOS DO JOGO E CATEGORIAS (COM DICAS E NÍVEIS)
// ===========================================
const CATEGORIAS = {
    frutas: [
        { palavra: "ABACAXI", dicas: { facil: "É amarelo por dentro, mas espinhoso por fora.", medio: "Uma fruta tropical, com uma coroa e sabor agridoce.", dificil: "Bromeliácea nativa da América do Sul, rica em vitamina C." } },
        { palavra: "MORANGO", dicas: { facil: "Pequeno, vermelho e tem sementes por fora.", medio: "Fruta vermelha muito usada em sobremesas, muitas vezes com chantilly.", dificil: "É um pseudofruto, cujo nome científico é Fragaria." } },
        { palavra: "BANANA", dicas: { facil: "Amarela e alongada, macacos adoram.", medio: "Fruta energética, rica em potássio, cresce em cachos.", dificil: "É uma baga, parte de um grupo de plantas herbáceas de grande porte do gênero Musa." } },
        { palavra: "LARANJA", dicas: { facil: "Cítrica, redonda e de cor vibrante.", medio: "Fruta que dá suco, rica em vitamina C.", dificil: "Híbrido de pomelo e tangerina, cultivada desde a antiguidade." } },
        { palavra: "UVA", dicas: { facil: "Pequena, pode ser roxa ou verde, usada para fazer vinho.", medio: "Cresce em cachos, pode ser sem sementes e é usada para fazer suco ou geléia.", dificil: "É uma baga, proveniente da videira, utilizada na produção de vinhos." } },
        { palavra: "MACA", dicas: { facil: "Vermelha ou verde, mantém o médico longe.", medio: "Fruta crocante, um ditado popular diz que uma por dia mantém o médico longe.", dificil: "É um pomo, fruto da macieira (Malus domestica), originária da Ásia Central." } },
        { palavra: "PERA", dicas: { facil: "Parece uma gota, pode ser verde ou amarela.", medio: "Fruta suculenta, pode ser encontrada em diversas variedades, geralmente mais larga na base.", dificil: "É um pomo, fruto da pereira (Pyrus communis), da família Rosaceae." } },
        { palavra: "MANGA", dicas: { facil: "Tropical, suculenta e com um grande caroço.", medio: "Fruta amarela ou alaranjada, muito suculenta e fibrosa, com um caroço grande no centro.", dificil: "Drupa de grande porte, fruto da mangueira (Mangifera indica), nativa do sul da Ásia." } },
        { palavra: "KIWI", dicas: { facil: "Pequeno, peludo por fora e verde por dentro.", medio: "Fruta com casca marrom e peluda, polpa verde vibrante e pequenas sementes pretas comestíveis.", dificil: "Baga comestível da videira lenhosa Actinidia deliciosa, originária da China." } },
        { palavra: "CEREJA", dicas: { facil: "Pequena, vermelha e com caroço.", medio: "Pequena fruta redonda e geralmente vermelha, frequentemente usada para decorar bolos e coquetéis.", dificil: "Drupa do gênero Prunus, com um único caroço, popular em climas temperados." } }
    ],
    animais: [
        { palavra: "ELEFANTE", dicas: { facil: "Maior mamífero terrestre, tem tromba.", medio: "Grande mamífero africano ou asiático, conhecido por suas orelhas grandes e tromba.", dificil: "É um proboscídeo da família Elephantidae, único membro vivo da ordem Proboscidea." } },
        { palavra: "GIRAFA", dicas: { facil: "Animal alto, com pescoço longo e pintas.", medio: "Mamífero africano conhecido por seu pescoço extremamente longo e padrão de manchas na pele.", dificil: "É o mamífero terrestre mais alto, pertencente ao gênero Giraffa, da família Giraffidae." } },
        { palavra: "LEAO", dicas: { facil: "Rei da selva, tem juba.", medio: "Grande felino conhecido como 'rei da selva', com uma juba imponente nos machos.", dificil: "É um dos quatro grandes felinos do gênero Panthera, nativo da África e da Índia." } },
        { palavra: "TIGRE", dicas: { facil: "Felino com listras pretas.", medio: "Maior felino do mundo, conhecido por suas listras verticais pretas sobre fundo laranja.", dificil: "É um Panthera tigris, o maior e mais pesado dos felinos selvagens, nativo da Ásia." } },
        { palavra: "ZEBRA", dicas: { facil: "Parece um cavalo, mas tem listras brancas e pretas.", medio: "Animal africano da família dos equídeos, com padrão distintivo de listras pretas e brancas.", dificil: "É um membro do gênero Equus, nativa da África central e do sul." } },
        { palavra: "PINGUIM", dicas: { facil: "Ave que não voa, vive no gelo e nada bem.", medio: "Ave marinha que não voa, encontrada principalmente no Hemisfério Sul, conhecida por seu andar engraçado.", dificil: "Aves aquáticas da família Spheniscidae, adaptadas para a vida marinha e sem capacidade de voo." } },
        { palavra: "GOLFINHO", dicas: { facil: "Mamífero marinho inteligente, salta na água.", medio: "Mamífero aquático muito inteligente, conhecido por suas acrobacias e som de 'clique'.", dificil: "Cetáceo odontoceto da família Delphinidae, com cerca de 40 espécies, vive em todos os oceanos." } },
        { palavra: "CORUJA", dicas: { facil: "Ave noturna, gira a cabeça quase completamente.", medio: "Ave de rapina noturna com grandes olhos frontais e habilidade de girar a cabeça quase 360 graus.", dificil: "Ordem Strigiformes, aves de rapina noturnas com audição e visão altamente desenvolvidas." } },
        { palavra: "RINOCERONTE", dicas: { facil: "Grande, tem um ou dois chifres no nariz.", medio: "Grande mamífero herbívoro africano ou asiático, conhecido por seu(s) chifre(s) no focinho.", dificil: "Perissodáctilo da família Rhinocerotidae, um dos maiores mamíferos terrestres, em perigo de extinção." } },
        { palavra: "CROCODILO", dicas: { facil: "Réptil grande e perigoso, vive na água e na terra.", medio: "Grande réptil carnívoro que vive em regiões tropicais, conhecido por sua mandíbula poderosa e dentes afiados.", dificil: "Pertence à família Crocodylidae, uma das linhagens mais antigas de répteis na Terra." } }
    ],
    paises: [
        { palavra: "BRASIL", dicas: { facil: "País do futebol e do samba.", medio: "Maior país da América do Sul, conhecido por sua vasta floresta amazônica e carnaval.", dificil: "Quinto maior país do mundo em área e população, com capital em Brasília." } },
        { palavra: "CANADA", dicas: { facil: "Vizinho do norte dos EUA, maple leaf.", medio: "Segundo maior país do mundo em área, com capital em Ottawa e famoso por suas paisagens geladas e xarope de bordo.", dificil: "Monarquia constitucional e democracia parlamentar, membro do G7 e da Commonwealth, com duas línguas oficiais." } },
        { palavra: "JAPAO", dicas: { facil: "Terra do sol nascente, sushi e samurais.", medio: "País insular na Ásia Oriental, conhecido por sua cultura milenar, tecnologia avançada e cerejeiras em flor.", dificil: "Arco insular estratovulcânico no Pacífico, com a maior área metropolitana do mundo (Tóquio)." } },
        { palavra: "FRANCA", dicas: { facil: "País da Torre Eiffel e croissant.", medio: "Local da Torre Eiffel e do Louvre, famoso por sua culinária, vinhos e moda, com capital em Paris.", dificil: "República semipresidencialista, membro fundador da União Europeia, com vasto império colonial histórico." } },
        { palavra: "ITALIA", dicas: { facil: "País em forma de bota, pizza e Roma.", medio: "Local do Coliseu e da culinária de massas, com capital em Roma e rica história artística.", dificil: "República parlamentar unitária, berço do Império Romano e do Renascimento, com forte influência cultural global." } },
        { palavra: "CHINA", dicas: { facil: "País da Grande Muralha e pandas.", medio: "País mais populoso do mundo, lar da Grande Muralha e de pandas, com capital em Pequim.", dificil: "República popular unipartidária, com a segunda maior economia do mundo e uma história imperial de milênios." } },
        { palavra: "INDIA", dicas: { facil: "País do Taj Mahal e especiarias.", medio: "Segundo país mais populoso do mundo, conhecido pelo Taj Mahal, yoga e culinária picante.", dificil: "República parlamentar federal, com rica diversidade linguística e religiosa, berço de quatro grandes religiões." } },
        { palavra: "EGITO", dicas: { facil: "País das pirâmides e faraós.", medio: "Nação africana com as famosas pirâmides de Gizé, o Rio Nilo e uma antiga civilização.", dificil: "República com vasta história antiga, influenciada por gregos, romanos e árabes, com capital no Cairo." } },
        { palavra: "MEXICO", dicas: { facil: "País dos tacos, sombreros e mariachis.", medio: "País latino-americano conhecido por sua culinária (tacos), música (mariachi) e civilizações antigas como a maia e asteca.", dificil: "República constitucional federal na América do Norte, com rica herança cultural pré-colombiana e colonial." } },
        { palavra: "AUSTRALIA", dicas: { facil: "Terra dos cangurus, coalas e Grande Barreira de Corais.", medio: "Maior ilha do mundo e continente, lar de cangurus e coalas, com uma vasta vida selvagem única.", dificil: "Monarquia constitucional parlamentar, com vasto território desértico e ecossistemas únicos, membro da Commonwealth." } }
    ]
};
// Preenche a categoria "aleatorio" combinando todas as outras palavras
CATEGORIAS.aleatorio = [].concat(...Object.keys(CATEGORIAS).filter(key => key !== 'aleatorio').map(key => CATEGORIAS[key]));


let palavraSecretaObj = null; // {palavra: "...", dicas: {...}}
let palavraSecreta = "";
let dicaAtual = "";
let letrasAdivinhadas = [];
let erros = 0;
const MAX_ERROS = 6;
// ORDEM DAS PARTES DO BONECO PARA DESAPARECER
const partesBonecoParaDesaparecer = ["pernaDir", "pernaEsq", "bracoDir", "bracoEsq", "corpo", "cabeca-container"]; 
// O CABECA-CONTAINER agora está no final, pois ela só deve "desaparecer" quando o jogo termina
// Ou seja, ela já começa APERECENDO e desaparece na última chance de erro.

// Multiplayer e Estatísticas
let numJogadores = 1;
let jogadores = []; // [{nome: "Jogador 1", pontuacao: 0, palavrasAcertadas: 0, palavrasPerdidas: 0, acertosLetras: 0, errosLetras: 0}]
let jogadorAtualIndex = 0;
let jogoEmAndamento = false;


// ===========================================
// 2. ELEMENTOS DO DOM (PARA FACILITAR O ACESSO)
// ===========================================
const secaoInicio = document.getElementById('secaoInicio');
const secaoConfig = document.getElementById('secaoConfig');
const secaoJogo = document.getElementById('secaoJogo');
const secaoProximoTurno = document.getElementById('secaoProximoTurno');
const secaoEstatisticas = document.getElementById('secaoEstatisticas');
const secaoPersonalizacao = document.getElementById('secaoPersonalizacao');
const secaoMultiplayer = document.getElementById('secaoMultiplayer');

const nomeJogadorInput = document.getElementById('nomeJogador');
const fotoPerfilInput = document.getElementById('fotoPerfilInput');
const fotoPerfilDisplay = document.getElementById('fotoPerfilDisplay');
const mensagemFotoStatus = document.getElementById('mensagemFotoStatus');
const selectTema = document.getElementById('selectTema');

const selectCategoria = document.getElementById('selectCategoria');
const selectDificuldadeDica = document.getElementById('selectDificuldadeDica');
const numJogadoresSelect = document.getElementById('numJogadores');
const containerNomesJogadores = document.getElementById('containerNomesJogadores');

const palavraDisplay = document.getElementById('palavraDisplay');
const tecladoDiv = document.getElementById('teclado');
const mensagemJogo = document.getElementById('mensagemJogo');
const textoDicaSpan = document.getElementById('textoDica');

const nomeJogadorAtualSpan = document.getElementById('nomeJogadorAtual');
const pontuacaoJogadorAtualSpan = document.getElementById('pontuacaoJogadorAtual');
const mensagemProximoTurno = document.getElementById('mensagemProximoTurno');
const dashboardEstatisticasDiv = document.getElementById('dashboardEstatisticas');

// Botões
const btnIniciarJogo = document.getElementById('btnIniciarJogo');
const btnConfig = document.getElementById('btnConfig');
const btnPersonalizar = document.getElementById('btnPersonalizar');
const btnSalvarConfig = document.getElementById('btnSalvarConfig');
const btnVoltarInicio = document.getElementById('btnVoltarInicio'); // Este botão não está sendo usado no HTML atual
const btnContinuarOuFinalizar = document.getElementById('btnContinuarOuFinalizar');
const btnVerEstatisticas = document.getElementById('btnVerEstatisticas');
const btnNovoJogoEstat = document.getElementById('btnNovoJogoEstat');
const btnVoltarJogoEstat = document.getElementById('btnVoltarJogoEstat');
const btnAplicarPersonalizacao = document.getElementById('btnAplicarPersonalizacao');
const btnVoltarConfig = document.getElementById('btnVoltarConfig');
const btnVoltarMultiplayer = document.getElementById('btnVoltarMultiplayer');
const btnConfirmarJogadores = document.getElementById('btnConfirmarJogadores');
const btnMultiplayer = document.getElementById('btnMultiplayer');


// ===========================================
// 3. FUNÇÕES DE NAVEGAÇÃO DE SEÇÕES
// ===========================================
function mostrarSecao(idSecao) {
    const secoes = [secaoInicio, secaoConfig, secaoJogo, secaoProximoTurno, secaoEstatisticas, secaoPersonalizacao, secaoMultiplayer];
    secoes.forEach(secao => {
        if (secao) secao.style.display = 'none';
    });
    const secaoAtiva = document.getElementById(idSecao);
    if (secaoAtiva) {
        secaoAtiva.style.display = 'block';
    }
}


// ===========================================
// 4. FUNÇÕES DE PERSONALIZAÇÃO (TEMA E FOTO)
// ===========================================
function carregarTema() {
    const temaSalvo = localStorage.getItem('temaJogo');
    if (temaSalvo) {
        document.documentElement.setAttribute('data-theme', temaSalvo);
        selectTema.value = temaSalvo;
    } else {
        document.documentElement.setAttribute('data-theme', 'padrao');
        selectTema.value = 'padrao';
    }
}

function aplicarTema(tema) {
    document.documentElement.setAttribute('data-theme', tema);
    localStorage.setItem('temaJogo', tema);
}

function carregarFotoPerfil() {
    const fotoSalva = localStorage.getItem('fotoPerfil');
    if (fotoSalva) {
        fotoPerfilDisplay.src = fotoSalva;
        document.getElementById('cabeca-foto').src = fotoSalva;
    } else {
        // Use o caminho correto para o placeholder
        fotoPerfilDisplay.src = '/JogodaForca/placeholder.png'; 
        document.getElementById('cabeca-foto').src = '/JogodaForca/placeholder.png'; 
    }
}

function salvarFotoPerfil(event) {
    const arquivo = event.target.files[0];
    if (arquivo) {
        const reader = new FileReader();
        reader.onload = function(e) {
            localStorage.setItem('fotoPerfil', e.target.result);
            carregarFotoPerfil(); // Atualiza a foto em todos os lugares
            mensagemFotoStatus.textContent = "Foto salva com sucesso!";
            mensagemFotoStatus.style.color = 'green';
        };
        reader.readAsDataURL(arquivo);
    } else {
        mensagemFotoStatus.textContent = "Nenhuma foto selecionada.";
        mensagemFotoStatus.style.color = 'red';
    }
}


// ===========================================
// 5. FUNÇÕES DE LÓGICA DO JOGO PRINCIPAL
// ===========================================

// Prepara o jogo para um novo turno ou reinício da palavra
function prepararTurno(novaPalavra = true) {
    if (novaPalavra) {
        erros = 0;
        letrasAdivinhadas = [];
        
        dificuldadeDica = selectDificuldadeDica.value;
        const categoriaSelecionada = selectCategoria.value;
        const palavrasDaCategoria = CATEGORIAS[categoriaSelecionada];
        
        let novaPalavraObj;
        do {
            novaPalavraObj = palavrasDaCategoria[Math.floor(Math.random() * palavrasDaCategoria.length)];
        } while (palavrasDaCategoria.length > 1 && novaPalavraObj === palavraSecretaObj); 

        palavraSecretaObj = novaPalavraObj;
        palavraSecreta = palavraSecretaObj.palavra;
        dicaAtual = palavraSecretaObj.dicas[dificuldadeDica];
    }

    mensagemJogo.textContent = `Adivinhe a palavra! Máximo de ${MAX_ERROS} erros.`;
    
    // --- Lógica do Boneco INVERTIDA ---
    // No início do turno, TODAS as partes do boneco devem estar visíveis (opacity: 1)
    // A cada erro, uma parte irá para opacity: 0
    document.getElementById('cabeca-container').style.opacity = '1'; // A cabeça SEMPRE começa visível
    partesBonecoParaDesaparecer.forEach(id => {
        const parte = document.getElementById(id);
        if (parte) parte.style.opacity = '1'; // Todas as partes do corpo começam visíveis
    });
    // -----------------------------------
    
    renderizarPalavra();
    renderizarTeclado();
    textoDicaSpan.textContent = dicaAtual;
    
    if (numJogadores > 1) {
        nomeJogadorAtualSpan.textContent = jogadores[jogadorAtualIndex].nome;
        pontuacaoJogadorAtualSpan.textContent = jogadores[jogadorAtualIndex].pontuacao;
    }

    jogoEmAndamento = true; 
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
        
        if (letrasAdivinhadas.includes(letra)) {
            botao.disabled = true;
            if (palavraSecreta.includes(letra)) {
                botao.classList.add('acerto');
            } else {
                botao.classList.add('erro');
            }
        } else {
            botao.addEventListener('click', () => tentarAdivinhar(letra, botao));
        }
        tecladoDiv.appendChild(botao);
    }
}

function tentarAdivinhar(letra, botao) {
    if (!jogoEmAndamento || letrasAdivinhadas.includes(letra) || erros >= MAX_ERROS) {
        return; 
    }

    letrasAdivinhadas.push(letra);
    botao.disabled = true;

    if (palavraSecreta.includes(letra)) {
        botao.classList.add('acerto');
        jogadores[jogadorAtualIndex].acertosLetras++;
        renderizarPalavra();
        verificarFimDeJogo(); 
    } else {
        botao.classList.add('erro');
        jogadores[jogadorAtualIndex].errosLetras++;
        erros++;
        // --- AQUI VAMOS CHAMAR A FUNÇÃO PARA ESCONDER A PARTE DO BONECO ---
        esconderParteBoneco(); 
        verificarFimDeJogo(true); 
    }
    pontuacaoJogadorAtualSpan.textContent = jogadores[jogadorAtualIndex].pontuacao; 
}

// NOVO: Função para ESCONDER as partes do boneco (opacity de 1 para 0)
function esconderParteBoneco() {
    if (erros > 0 && erros <= MAX_ERROS) {
        const idDaParteAEsconder = partesBonecoParaDesaparecer[erros - 1]; 
        const parteElement = document.getElementById(idDaParteAEsconder);
        if (parteElement) {
            parteElement.style.opacity = '0'; // Esconde a parte
        }
    }
}

function verificarFimDeJogo(erroLetra = false) {
    const palavraAtualDisplay = palavraDisplay.textContent.replace(/ /g, '');

    if (palavraAtualDisplay === palavraSecreta) {
        mensagemJogo.textContent = `🎉 PARABÉNS, ${jogadores[jogadorAtualIndex].nome}! Você adivinhou a palavra!`;
        jogadores[jogadorAtualIndex].pontuacao += 100; 
        jogadores[jogadorAtualIndex].palavrasAcertadas++;
        finalizarTurno(true);
        return; 
    } 
    
    if (erros >= MAX_ERROS) {
        mensagemJogo.textContent = `Você Perdeu, ${jogadores[jogadorAtualIndex].nome}! A palavra era: ${palavraSecreta}`;
        jogadores[jogadorAtualIndex].palavrasPerdidas++;
        
        // --- Garante que todas as partes do boneco estejam "desaparecidas" ao perder ---
        partesBonecoParaDesaparecer.forEach(id => {
            const parte = document.getElementById(id);
            if (parte) parte.style.opacity = '0'; 
        });
        // -----------------------------------------------------------------------------
        
        finalizarTurno(false);
        return;
    }

    if (erroLetra && numJogadores > 1) {
        passarAVez(); 
    }
}


function finalizarTurno(vitoria) {
    jogoEmAndamento = false; 
    document.querySelectorAll('.btn-letra').forEach(btn => btn.disabled = true); 
    
    mensagemProximoTurno.textContent = `Turno de ${jogadores[jogadorAtualIndex].nome} finalizado. ${vitoria ? 'Você acertou a palavra!' : 'Você perdeu a palavra.'} Pontuação atual: ${jogadores[jogadorAtualIndex].pontuacao}`;
    
    mostrarSecao('secaoProximoTurno'); 
}


function passarAVez() {
    if (numJogadores > 1) {
        jogadorAtualIndex = (jogadorAtualIndex + 1) % numJogadores; 
        
        // --- Redesenha o boneco COMPLETAMENTE visível para o próximo jogador ---
        document.getElementById('cabeca-container').style.opacity = '1'; 
        partesBonecoParaDesaparecer.forEach(id => {
            const parte = document.getElementById(id);
            if (parte) parte.style.opacity = '1'; 
        });
        erros = 0; // Zera os erros para o novo jogador, que começa com um boneco completo
        // ---------------------------------------------------------------------

        renderizarTeclado(); 
        
        nomeJogadorAtualSpan.textContent = jogadores[jogadorAtualIndex].nome;
        pontuacaoJogadorAtualSpan.textContent = jogadores[jogadorAtualIndex].pontuacao;
        
        mensagemJogo.textContent = `É a vez de ${jogadores[jogadorAtualIndex].nome}! Adivinhe a palavra!`;

        jogoEmAndamento = true; 
    }
}


function processarContinuarOuFinalizarJogo() {
    jogadorAtualIndex = (jogadorAtualIndex + 1) % numJogadores; 
    
    if (numJogadores === 1) { 
        iniciarNovoJogo();
    } else {
        prepararTurno(true); 
    }
}


function exibirDashboardEstatisticas() {
    dashboardEstatisticasDiv.innerHTML = '';
    const resultadosOrdenados = [...jogadores].sort((a, b) => b.pontuacao - a.pontuacao);

    resultadosOrdenados.forEach((jogador, index) => {
        const item = document.createElement('div');
        item.classList.add('dashboard-item');
        item.innerHTML = `
            <h4>${index + 1}º - ${jogador.nome}</h4>
            <p>Pontuação: <span class="valor">${jogador.pontuacao}</span></p>
            <p>Palavras Acertadas: <span class="valor">${jogador.palavrasAcertadas}</span></p>
            <p>Palavras Perdidas: <span class="valor">${jogador.palavrasPerdidas}</span></p>
            <p>Acertos de Letras: <span class="valor">${jogador.acertosLetras}</span></p>
            <p>Erros de Letras: <span class="valor">${jogador.errosLetras}</span></p>
        `;
        dashboardEstatisticasDiv.appendChild(item);
    });
    mostrarSecao('secaoEstatisticas');
}


// ===========================================
// 6. EVENTOS DE MENU E JOGADORES
// ===========================================

function iniciarNovoJogo() {
    jogadores = [];
    jogadorAtualIndex = 0;
    
    if (numJogadoresSelect.value === '1') {
        numJogadores = 1;
        const nome = nomeJogadorInput.value.trim();
        jogadores.push({
            nome: nome ? nome : "Jogador 1", 
            pontuacao: 0,
            palavrasAcertadas: 0,
            palavrasPerdidas: 0,
            acertosLetras: 0,
            errosLetras: 0
        });
    } else {
        numJogadores = parseInt(numJogadoresSelect.value);
        for (let i = 0; i < numJogadores; i++) {
            const inputNome = document.getElementById(`nomeJogador${i + 1}`);
            const nome = inputNome ? inputNome.value.trim() : `Jogador ${i + 1}`;
            jogadores.push({
                nome: nome ? nome : `Jogador ${i + 1}`,
                pontuacao: 0,
                palavrasAcertadas: 0,
                palavrasPerdidas: 0,
                acertosLetras: 0,
                errosLetras: 0
            });
        }
    }
    
    prepararTurno(true);
}

function gerarInputsNomesJogadores() {
    containerNomesJogadores.innerHTML = '';
    const n = parseInt(numJogadoresSelect.value);
    if (n > 1) {
        for (let i = 0; i < n; i++) {
            const div = document.createElement('div');
            div.classList.add('bloco-personalizacao');
            div.innerHTML = `
                <label for="nomeJogador${i + 1}">Nome do Jogador ${i + 1}:</label>
                <input type="text" id="nomeJogador${i + 1}" class="input-personalizado" value="Jogador ${i + 1}">
            `;
            containerNomesJogadores.appendChild(div);
        }
    }
}

// ===========================================
// 7. INICIALIZAÇÃO E EVENT LISTENERS GLOBAIS
// ===========================================
document.addEventListener('DOMContentLoaded', () => {
    carregarTema();
    carregarFotoPerfil();
    mostrarSecao('secaoInicio');

    // Preenche as categorias no select
    for (const categoria in CATEGORIAS) {
        const option = document.createElement('option');
        option.value = categoria;
        option.textContent = categoria.charAt(0).toUpperCase() + categoria.slice(1);
        selectCategoria.appendChild(option);
    }
    
    // Event Listeners dos botões principais
    btnIniciarJogo.addEventListener('click', iniciarNovoJogo);
    btnConfig.addEventListener('click', () => mostrarSecao('secaoConfig'));
    btnPersonalizar.addEventListener('click', () => mostrarSecao('secaoPersonalizacao'));
    btnMultiplayer.addEventListener('click', () => {
        numJogadoresSelect.value = '1'; // Reseta para 1 jogador por padrão ao abrir multiplayer
        gerarInputsNomesJogadores();
        mostrarSecao('secaoMultiplayer');
    });

    // Event Listeners para botões de voltar/salvar
    btnSalvarConfig.addEventListener('click', () => mostrarSecao('secaoInicio'));
    btnVoltarConfig.addEventListener('click', () => mostrarSecao('secaoInicio'));
    btnAplicarPersonalizacao.addEventListener('click', () => mostrarSecao('secaoInicio'));
    btnVoltarMultiplayer.addEventListener('click', () => mostrarSecao('secaoInicio'));
    
    btnContinuarOuFinalizar.addEventListener('click', processarContinuarOuFinalizarJogo);
    btnVerEstatisticas.addEventListener('click', exibirDashboardEstatisticas);
    btnNovoJogoEstat.addEventListener('click', iniciarNovoJogo);
    btnVoltarJogoEstat.addEventListener('click', () => mostrarSecao('secaoProximoTurno'));

    // Event listeners de personalização
    selectTema.addEventListener('change', (e) => aplicarTema(e.target.value));
    fotoPerfilInput.addEventListener('change', salvarFotoPerfil);

    // Event listener para seleção de número de jogadores
    numJogadoresSelect.addEventListener('change', gerarInputsNomesJogadores);
    btnConfirmarJogadores.addEventListener('click', iniciarNovoJogo);


    // PWA: Registro do Service Worker
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', () => {
            navigator.serviceWorker.register('/JogodaForca/service-worker.js')
                .then(registration => {
                    console.log('ServiceWorker registrado com sucesso:', registration.scope);
                })
                .catch(error => {
                    console.error('Falha no registro do ServiceWorker:', error);
                });
        });
    }

});
