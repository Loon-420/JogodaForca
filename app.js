// ===========================================
// 1. DADOS DO JOGO E CATEGORIAS (COM DICAS E NÍVEIS)
// ===========================================
const CATEGORIAS = {
    animais: [
        { palavra: "CACHORRO", dicas: { facil: "O melhor amigo do homem.", medio: "Membro da família Canidae, domesticado há milhares de anos.", dificil: "Sua domesticação, iniciada no Paleolítico Superior, marca um ponto crucial na relação simbiótica entre humanos e a natureza." } },
        { palavra: "ELEFANTE", dicas: { facil: "Tem uma tromba e orelhas grandes.", medio: "O maior mamífero terrestre, conhecido por sua memória e inteligência.", dificil: "Espécie pertencente à ordem Proboscidea, cuja organização matriarcal e rituais complexos evidenciam avançadas estruturas sociais e cognitivas." } },
        { palavra: "GIRAFA", dicas: { facil: "O animal mais alto do mundo.", medio: "Mamífero africano com pescoço extremamente longo e padrão de manchas distinto.", dificil: "Seu sistema cardiovascular, adaptado para suportar variações de pressão sanguínea decorrentes da altura, é um prodígio da engenharia biológica." } },
        { palavra: "LEAO", dicas: { facil: "O rei da selva.", medio: "Grande felino africano, único a viver em grupos sociais complexos conhecidos como 'alcateias'.", dificil: "A complexidade da dinâmica de caça cooperativa e defesa territorial das leoas exemplifica uma sofisticada estratégia evolutiva em ambientes de savana." } },
        { palavra: "PANDA", dicas: { facil: "Urso preto e branco que come bambu.", medio: "Mamífero endêmico da China, reconhecido por sua dieta quase exclusivamente herbívora.", dificil: "A peculiaridade de seu sistema digestivo, originalmente carnívoro, adaptado à digestão de celulose, representa um nicho ecológico incomum entre os ursídeos." } },
        { palavra: "ZEBRA", dicas: { facil: "Cavalo listrado.", medio: "Equídeo africano com pelagem distintiva de listras pretas e brancas, usada para camuflagem.", dificil: "A padronagem única de suas listras, além da função mimética, é objeto de estudo sobre reconhecimento individual e regulação térmica em ecossistemas de savana." } },
        { palavra: "RINOCERONTE", dicas: { facil: "Grande e tem um ou dois chifres.", medio: "Mamífero de grande porte, conhecido por seu chifre de queratina e pele espessa.", dificil: "A crescente ameaça à sua sobrevivência, impulsionada pela demanda ilegal por seus chifres em mercados asiáticos, ressalta a urgência de estratégias de conservação global." } },
        { palavra: "CROCODILO", dicas: { facil: "Réptil grande que vive na água e tem dentes afiados.", medio: "Grande réptil semiaquático, predador apex em seu ecossistema, com mandíbulas poderosas.", dificil: "Sua notável capacidade de sobrevivência ao longo de milhões de anos é atribuída à sua fisiologia adaptativa, incluindo um sistema circulatório complexo e uma dieta oportunista." } }
    ],
    carros: [
        { palavra: "FUSCA", dicas: { facil: "Um clássico da Volkswagen.", medio: "Carro compacto popularizado na Alemanha e no Brasil, conhecido por seu motor traseiro refrigerado a ar.", dificil: "O 'Volkswagen Tipo 1', ícone da motorização pós-guerra, simboliza a democratização do automóvel, influenciando gerações de design e engenharia automotiva." } },
        { palavra: "CORSA", dicas: { facil: "Um popular modelo da Chevrolet.", medio: "Veículo compacto produzido pela General Motors, com diversas gerações e versões.", dificil: "Parte da estratégia global da General Motors, sua versatilidade e adaptação a diferentes mercados o tornaram um player chave no segmento de compactos urbanos por décadas." } },
        { palavra: "PALIO", dicas: { facil: "Um carro compacto da Fiat.", medio: "Modelo de carro compacto da Fiat, um dos mais vendidos no mercado brasileiro por anos.", dificil: "Concebido como um 'carro mundial', sua plataforma modular permitiu personalização para atender às demandas específicas de mercados emergentes, consolidando sua presença global." } },
        { palavra: "ONIX", dicas: { facil: "Um dos carros mais vendidos no Brasil.", medio: "Compacto da Chevrolet que rapidamente se tornou líder de vendas, com foco em tecnologia e conectividade.", dificil: "A estratégia de design e marketing do Onix, focada na conectividade e no custo-benefício, reposicionou a Chevrolet no segmento de entrada, ditando tendências no consumo automotivo." } },
        { palavra: "FERRARI", dicas: { facil: "Marca italiana de carros esportivos de luxo.", medio: "Fabricante italiana de automóveis de luxo e alta performance, com forte tradição em corridas.", dificil: "O legado de Enzo Ferrari transcende a engenharia automotiva, representando a paixão pela velocidade e a busca incessante pela perfeição estética e mecânica no automobilismo de elite." } },
        { palavra: "BMW", dicas: { facil: "Marca alemã conhecida por carros de luxo e desempenho.", medio: "Fabricante alemã de automóveis, motocicletas e motores, conhecida pela 'prazer de dirigir'.", dificil: "A filosofia de engenharia da BMW, centrada na dinâmica de condução e no design funcional, estabeleceu novos padrões para o segmento de luxo, equilibrando inovação tecnológica e tradição." } },
        { palavra: "MERCEDES", dicas: { facil: "Marca alemã de carros luxuosos.", medio: "Fabricante alemã de automóveis de luxo, ônibus e caminhões, pioneira na história automotiva.", dificil: "A inovação contínua da Mercedes-Benz, desde o primeiro automóvel patenteado por Karl Benz, define a trajetória da indústria automobilística, equilibrando prestígio e engenharia de ponta." } },
        { palavra: "TOYOTA", dicas: { facil: "Marca japonesa famosa por carros confiáveis.", medio: "Maior fabricante de automóveis do mundo, conhecida por sua eficiência e sistema de produção 'just in time'.", dificil: "O 'Sistema Toyota de Produção' revolucionou a manufatura global, estabelecendo paradigmas de eficiência, qualidade e melhoria contínua que transcenderam a indústria automotiva." } }
    ],
    paises: [
        { palavra: "BRASIL", dicas: { facil: "País do carnaval e do futebol.", medio: "Maior país da América do Sul, conhecido por sua vasta biodiversidade e cultura rica.", dificil: "Sua complexa formação histórica, marcada por ciclos econômicos e culturais diversos, reflete a miscigenação de povos e a luta por identidade em um território de dimensões continentais." } },
        { palavra: "CANADA", dicas: { facil: "País grande na América do Norte, conhecido pelo xarope de bordo.", medio: "Segundo maior país do mundo em área total, com duas línguas oficiais e vasta natureza selvagem.", dificil: "A política de multiculturalismo e a gestão de recursos naturais vastos, especialmente hídricos e florestais, são pilares de sua identidade e desafios para o futuro sustentável." } },
        { palavra: "JAPAO", dicas: { facil: "Terra do Sol Nascente.", medio: "Nação insular no Pacífico Ocidental, com rica história milenar e alta tecnologia.", dificil: "A notável capacidade de síntese cultural, incorporando inovações ocidentais enquanto preserva tradições milenares, define sua singularidade na geopolítica e na cultura global." } },
        { palavra: "ITALIA", dicas: { facil: "País em forma de bota, famoso por massas e pizzas.", medio: "País europeu com vasta herança cultural, berço do Império Romano e do Renascimento.", dificil: "Seu mosaico cultural, resultado de séculos de fragmentação política e influências regionais, culminou na unificação tardia, moldando uma identidade nacional multifacetada e vibrante." } },
        { palavra: "EGITO", dicas: { facil: "Famoso pelas pirâmides e faraós.", medio: "País do norte da África e Oriente Médio, com uma civilização antiga às margens do Rio Nilo.", dificil: "A influência duradoura de sua civilização antiga na arquitetura, na escrita e na religião de culturas subsequentes, demonstra o profundo impacto de suas inovações proto-científicas e artísticas." } },
        { palavra: "FRANCA", dicas: { facil: "Famoso pela Torre Eiffel.", medio: "Nação europeia conhecida por sua arte, moda, gastronomia e pela Revolução Francesa.", dificil: "O Iluminismo francês e os ideais da Revolução, propagados globalmente, redefiniram conceitos de cidadania, direitos humanos e soberania popular, moldando o panorama político moderno." } },
        { palavra: "CHINA", dicas: { facil: "País mais populoso do mundo.", medio: "Antiga civilização asiática, conhecida pela Grande Muralha e rápido crescimento econômico.", dificil: "A complexidade de sua ascensão econômica contemporânea, balanceando uma economia de mercado com um sistema político centralizado, apresenta desafios e oportunidades únicas para o cenário global." } },
        { palavra: "ALEMANHA", dicas: { facil: "Famosa por cerveja e carros de engenharia.", medio: "Potência europeia com rica história, conhecida por sua engenharia, filosofia e grandes guerras mundiais.", dificil: "A resiliência de sua reconstrução pós-guerra e a consolidação como força motriz da União Europeia refletem uma capacidade de inovação e adaptação notável no cenário geopolítico." } }
    ],
    filmes: [
        { palavra: "MATRIX", dicas: { facil: "Pílula azul ou pílula vermelha?", medio: "Filme de ficção científica que questiona a natureza da realidade, estrelado por Keanu Reeves.", dificil: "A alegoria platônica da caverna, reimaginada através da cibertecnologia, explora a ontologia da percepção e o livre-arbítrio em um mundo pós-moderno." } },
        { palavra: "TITANIC", dicas: { facil: "Grande navio, um iceberg e um romance.", medio: "Drama romântico épico ambientado na viagem inaugural de um transatlântico em 1912.", dificil: "A narrativa de tragédia e romance em um contexto de estratificação social reflete criticamente os valores e as tensões da Belle Époque, culminando na fragilidade da ambição humana frente à natureza." } },
        { palavra: "STARWARS", dicas: { facil: "Uma galáxia muito, muito distante...", medio: "Franquia de ficção científica e fantasia sobre uma saga espacial de batalhas entre o bem e o mal.", dificil: "O arquétipo do 'Caminho do Herói' de Joseph Campbell é magistralmente empregado na construção de seu universo ficcional, ressoando com narrativas míticas universais de luta e redenção." } },
        { palavra: "VINGADORES", dicas: { facil: "Heróis mais poderosos da Terra se unem.", medio: "Filme de super-heróis da Marvel que reúne vários personagens em uma equipe para salvar o mundo.", dificil: "A complexidade da interconexão narrativa, desenvolvida ao longo de múltiplas fases do Universo Cinematográfico Marvel, estabelece um novo paradigma para a construção de franquias cinematográficas de larga escala." } },
        { palavra: "JURASSICPARK", dicas: { facil: "Parque com dinossauros.", medio: "Cientistas conseguem reviver dinossauros para um parque temático, com consequências desastrosas.", dificil: "A exploração das implicações éticas da biotecnologia e da manipulação genética, confrontando a hybris científica com as forças indomáveis da natureza, ecoa os temores da era da clonagem." } },
        { palavra: "HARRYPOTTER", dicas: { facil: "O menino bruxo.", medio: "Saga de fantasia sobre um jovem órfão que descobre ser um bruxo e estuda em Hogwarts.", dificil: "O desenvolvimento de seu universo literário e cinematográfico transcende a mera fantasia infantil, abordando temas universais como amizade, sacrifício e a luta contra a opressão, ressoando com públicos de todas as idades." } },
        { palavra: "INTERESTELAR", dicas: { facil: "Viagem espacial para salvar a humanidade.", medio: "Filme de ficção científica sobre um grupo de exploradores que viaja através de um buraco de minhoca.", dificil: "A exploração dos conceitos de relatividade temporal, buracos negros e a busca por um novo lar para a humanidade, sob a ótica da física teórica, eleva o gênero da ficção científica a patamares filosóficos e cosmológicos." } },
        { palavra: "SENHORDOSANEIS", dicas: { facil: "Três anéis para os Reis Elfos...", medio: "Épica trilogia de fantasia baseada nos livros de J.R.R. Tolkien, sobre uma jornada para destruir um anel mágico.", dificil: "A construção de um universo mitológico tão detalhado e coerente, influenciado por antigas sagas europeias, representa um marco na literatura fantástica, explorando temas de bem vs. mal, am amizade e a corrupção do poder." } }
    ],
    series: [
        { palavra: "STRANGERTHINGS", dicas: { facil: "Crianças em uma pequena cidade com eventos sobrenaturais nos anos 80.", medio: "Série de ficção científica e horror ambientada nos anos 80, com crianças que desvendam mistérios sobrenaturais.", dificil: "A homenagem nostálgica aos clássicos da década de 80, combinada com uma narrativa complexa de mistério e desenvolvimento de personagens, redefiniu o gênero de ficção científica para uma nova geração." } },
        { palavra: "LACASADEPAPEL", dicas: { facil: "Um grupo planeja roubos à Casa da Moeda.", medio: "Série espanhola sobre um grupo de ladrões que planeja o maior assalto da história.", dificil: "A subversão das convenções do gênero de assalto, combinada com a profundidade psicológica dos personagens e a crítica social implícita, transformou-a em um fenômeno cultural global." } },
        { palavra: "GOT", dicas: { facil: "Luta pelo Trono de Ferro.", medio: "Série de fantasia medieval épica baseada nos livros de George R.R. Martin, sobre casas nobres em guerra pelo controle de Westeros.", dificil: "A intricada teia de intrigas políticas, traições e desenvolvimentos de personagens moralmente ambíguos estabeleceu um novo padrão para a narrativa televisiva, desafiando as expectativas do público em relação aos heróis e vilões." } },
        { palavra: "BREAKINGBAD", dicas: { facil: "Um professor de química se torna um chefão das drogas.", medio: "Série dramática sobre um professor de química que, após ser diagnosticado com câncer, se envolve com a produção de metanfetamina.", dificil: "A gradual degradação moral do protagonista, de homem comum a criminoso implacável, é um estudo aprofundado sobre a natureza da corrupção e as escolhas que definem a identidade humana, impulsionado por um roteiro primoroso." } },
        { palavra: "THEOFFICE", dicas: { facil: "Focada no dia a dia de funcionários de um escritório de papel.", medio: "Comédia de situação no formato de 'mockumentary', que retrata o cotidiano cômico de um escritório.", dificil: "A genialidade de seu humor reside na observação meticulosa das nuances sociais e micro-agressões do ambiente corporativo, utilizando o formato de falso documentário para criar uma intimidade desconfortável com os personagens." } },
        { palavra: "FRIENDS", dicas: { facil: "Seis amigos morando em Nova York.", medio: "Série de comédia sobre as vidas e desventuras de seis amigos na cidade de Nova York.", dificil: "O impacto cultural e social de 'Friends' na representação da amizade e dos relacionamentos urbanos da geração X, através de sua estrutura narrativa de sitcom clássica, a consolidou como um marco na televisão mundial." } },
        { palavra: "DEXTER", dicas: { facil: "Um serial killer que mata outros serial killers.", medio: "Série sobre um especialista forense que é um serial killer com um código moral, caçando outros criminosos.", dificil: "A exploração da dualidade entre o 'monstro' interior e a busca por normalidade social, sob a ótica de um protagonista que se vê como um 'serial killer do bem', questiona os limites da justiça e da moralidade." } },
        { palavra: "HOUSE", dicas: { facil: "Médico genial e rabugento que resolve casos misteriosos.", medio: "Série médica sobre um médico brilhante e excêntrico que desvenda diagnósticos complexos e raros.", dificil: "A personificação da genialidade misantrópica e a aplicação do método socrático ao diagnóstico médico complexo, desafiando a ortodoxia e a ética profissional, caracterizam a singularidade de sua abordagem narrativa na televisão." } }
    ],
    cores: [
        { palavra: "AZUL", dicas: { facil: "A cor do céu e do mar.", medio: "Cor primária associada à tranquilidade, profundidade e vastidão.", dificil: "No espectro visível, sua menor frequência de onda confere-lhe associações simbólicas com o infinito, a introspecção e a melancolia em diversas culturas e manifestações artísticas." } },
        { palavra: "VERMELHO", dicas: { facil: "Cor da paixão e do perigo.", medio: "Cor primária vibrante, frequentemente associada à energia, amor e alerta.", dificil: "A percepção desta cor, resultado da maior frequência de onda visível, evoca respostas fisiológicas e psicológicas intensas, sendo amplamente explorada em simbolismos de poder, paixão e advertência através da história." } },
        { palavra: "AMARELO", dicas: { facil: "Cor do sol.", medio: "Cor primária associada à luz, otimismo, riqueza e, por vezes, inveja.", dificil: "Sua ambivalência simbólica, que transita da alegria e da iluminação à traição e à doença em diferentes contextos culturais, reflete a complexidade da percepção humana e suas projeções emocionais." } },
        { palavra: "VERDE", dicas: { facil: "Cor da natureza e esperança.", medio: "Cor secundária que evoca natureza, crescimento, harmonia e também inexperiência.", dificil: "A predominância desta cor nos ecossistemas terrestres a associa intrinsecamente à vida e à renovação, mas sua gama cromática também abarca nuances de toxicidade e decadência em simbolismos culturais." } },
        { palavra: "ROXO", dicas: { facil: "Cor da realeza.", medio: "Cor secundária resultante da mistura de vermelho e azul, associada à nobreza, espiritualidade e mistério.", dificil: "Historicamente, sua obtenção por pigmentos raros e caros a elevou ao status de cor da realeza e da liturgia, simbolizando poder, sabedoria e a transição entre o material e o espiritual." } },
        { palavra: "LARANJA", dicas: { facil: "Cor de uma fruta cítrica.", medio: "Cor secundária que representa entusiasmo, criatividade, calor e vitalidade.", dificil: "A fusão cromática de vermelho e amarelo confere-lhe uma energia vibrante, evocando a alegria da colheita e a comunicação em simbolismos culturais, mas também conotações de extravagância." } },
        { palavra: "PRETO", dicas: { facil: "Cor da noite.", medio: "Ausência de luz, frequentemente associada ao luto, elegância, poder e mistério.", dificil: "A paradoxal ausência de cor, que no entanto absorve todo o espectro luminoso, confere-lhe um simbolismo de finalidade, mistério e sofisticação em diversas tradições filosóficas e estéticas." } },
        { palavra: "BRANCO", dicas: { facil: "Cor da neve.", medio: "Cor que reflete todas as cores, simbolizando pureza, paz, inocência e início.", dificil: "A totalidade da luz visível, que confere pureza e infinitude em seu simbolismo, é contrastada por sua associação com o vazio e a ausência, dependendo do contexto cultural e metafísico." } }
    ],
    frutas: [
        { palavra: "BANANA", dicas: { facil: "Uma fruta amarela que os macacos adoram.", medio: "Fruta alongada e amarela, rica em potássio, cultivada em cachos.", dificil: "Sua domesticação e cultivo, iniciados há milênios no Sudeste Asiático, resultaram em variedades triploides estéreis, dependentes de propagação vegetativa, destacando a complexidade da agricultura global." } },
        { palavra: "MACA", dicas: { facil: "Fruta que dizem manter o médico longe.", medio: "Fruta redonda e crocante, cultivada em diversas variedades e cores.", dificil: "Presente em mitologias e simbolismos religiosos, sua ambivalência representa tanto o conhecimento quanto a tentação, atravessando narrativas desde o Éden até as lendas arturianas." } },
        { palavra: "UVA", dicas: { facil: "Pequenas frutas que crescem em cachos.", medio: "Pequena fruta redonda ou oval, cultivada em videiras, essencial para a produção de vinho.", dificil: "A viticultura, uma prática milenar, reflete a profunda interconexão entre cultura, clima e biotecnologia na produção de uma das bebidas mais complexas e valorizadas da humanidade." } },
        { palavra: "ABACAXI", dicas: { facil: "Fruta tropical com coroa e casca espinhosa.", medio: "Fruta tropical de polpa amarela, doce e ácida, com casca escamosa.", dificil: "Originário da América do Sul, seu transporte para a Europa no século XVI simbolizou luxo e exotismo, marcando um ponto de virada no intercâmbio de espécies vegetais entre continentes." } },
        { palavra: "MORANGO", dicas: { facil: "Pequena fruta vermelha, doce e popular.", medio: "Fruta pequena e vermelha, com sementes externas, conhecida por seu sabor adocicado e aroma.", dificil: "A complexidade de sua hibridização e cultivo moderno, que envolve polinização cruzada para otimizar tamanho e sabor, exemplifica a engenharia agrícola na busca por características desejáveis." } },
        { palavra: "MELANCIA", dicas: { facil: "Fruta grande e verde por fora, vermelha e suculenta por dentro.", medio: "Fruta de grande porte, com casca verde e polpa vermelha suculenta, rica em água.", dificil: "Sua capacidade de armazenar grandes volumes de água em climas áridos a tornou um recurso vital para civilizações antigas no deserto, evidenciando sua importância histórica como fonte de hidratação e alimento." } },
        { palavra: "MAMAO", dicas: { facil: "Fruta laranja, popular no café da manhã.", medio: "Fruta tropical de polpa alaranjada e sementes pretas, conhecida por suas propriedades digestivas.", dificil: "A enzima papaína, extraída desta fruta, possui vastas aplicações biotecnológicas, desde a indústria alimentícia até a farmacêutica, devido às suas propriedades proteolíticas." } },
        { palavra: "COCO", dicas: { facil: "Fruta com água dentro, cresce em coqueiro.", medio: "Fruta tropical com casca fibrosa e dura, contendo água e polpa brancas.", dificil: "A notável dispersão desta fruta por oceanos, transportada por correntes marítimas e capaz de germinar em diversas praias, demonstra sua adaptabilidade ecológica e seu papel na formação de ecossistemas costeiros." } }
    ],
    comidas: [
        { palavra: "PIZZA", dicas: { facil: "Redonda, com queijo e vários recheios.", medio: "Prato italiano popular, consiste em massa assada com molho de tomate, queijo e coberturas variadas.", dificil: "A evolução de sua simplicidade napolitana para um ícone culinário global reflete a adaptação cultural e a reinvenção constante de um alimento que transcende barreiras gastronômicas e sociais." } },
        { palavra: "LASANHA", dicas: { facil: "Prato italiano com camadas de massa, molho e queijo.", medio: "Prato italiano feito com camadas alternadas de massa, molho de carne (ragu) e queijo, assado no forno.", dificil: "A complexidade textural e de sabores, construída através de camadas distintas de massa, molho e recheios, simboliza a riqueza da culinária italiana e sua capacidade de transformar ingredientes simples em obras-primas." } },
        { palavra: "HAMBURGUER", dicas: { facil: "Carne moída entre dois pães.", medio: "Sanduíche com um bife de carne moída, geralmente servido com pão, queijo, salada e molhos.", dificil: "Sua ascensão de prato popular a ícone da fast-food global reflete as transformações industriais e culturais do século XX, simbolizando a conveniência e a padronização alimentar em escala massiva." } },
        { palavra: "SUSHI", dicas: { facil: "Prato japonês com arroz e peixe cru.", medio: "Prato da culinária japonesa que combina arroz avinagrado com peixe cru ou outros frutos do mar e vegetais.", dificil: "A delicadeza e precisão exigidas em sua preparação, desde o cozimento do arroz até o corte do peixe, elevam-no a uma forma de arte culinária, refletindo a filosofia japonesa de harmonia e equilíbrio." } },
        { palavra: "FEIJOADA", dicas: { facil: "Prato típico brasileiro com feijão preto e carnes.", medio: "Prato icônico da culinária brasileira, feito com feijão preto, diversas carnes de porco e acompanhamentos.", dificil: "Sua gênese, enraizada na culinária de senzala e na fusão de tradições europeias e africanas, torna-o um prato de profunda significância histórica e cultural, representando a miscigenação e a resiliência do povo brasileiro." } },
        { palavra: "BOLO", dicas: { facil: "Doce servido em aniversários.", medio: "Doce de massa assada, geralmente com cobertura e recheio, servido em celebrações.", dificil: "A evolução da arte da confeitaria, que transformou pães doces em elaboradas estruturas artísticas, reflete avanços na química dos alimentos e na busca humana por celebração e indulgência sensorial." } },
        { palavra: "TACO", dicas: { facil: "Comida mexicana com tortilha e recheio.", medio: "Prato mexicano composto por uma tortilha de milho ou trigo dobrada, recheada com carne, vegetais e molhos.", dificil: "A versatilidade cultural e culinária desta iguaria mexicana, adaptada e reinterpretada globalmente, simboliza a riqueza da gastronomia latino-americana e sua capacidade de transcender fronteiras." } },
        { palavra: "PAELLA", dicas: { facil: "Prato espanhol com arroz e frutos do mar.", medio: "Prato tradicional espanhol à base de arroz, açafrão e diversos ingredientes como frutos do mar, frango e legumes.", dificil: "Originária da região de Valência, a complexidade de seu preparo, que busca o equilíbrio perfeito entre o arroz, o caldo e os múltiplos ingredientes, a eleva a um ícone da culinária mediterrânea." } }
    ],
    aleatorio: [] // Será preenchido com todas as palavras combinadas
};

// Preenche a categoria "aleatorio" combinando todas as outras palavras
CATEGORIAS.aleatorio = [].concat(...Object.keys(CATEGORIAS).filter(key => key !== 'aleatorio').map(key => CATEGORIAS[key]));


let palavraSecretaObj = null; // {palavra: "...", dicas: {...}}
let palavraSecreta = "";
let dicaAtual = "";
let letrasAdivinhadas = [];
let erros = 0;
const MAX_ERROS = 6;
const partesBoneco = ["pernaDir", "pernaEsq", "bracoDir", "bracoEsq", "corpo", "cabeca-container"]; 
const partesBonecoCorpo = ["corpo", "bracoEsq", "bracoDir", "pernaEsq", "pernaDir"];

// Multiplayer e Estatísticas
let jogadores = []; // [{nome: "...", pontuacao: 0, acertosLetras: 0, errosLetras: 0, palavrasAcertadas: 0, palavrasPerdidas: 0}]
let jogadorAtualIndex = 0;
let numJogadores = 1;
let dificuldadeDica = "facil"; // Padrão
let jogoEmAndamento = false; // Controla se o jogo está ativo


// ===========================================
// 2. ELEMENTOS DO DOM (PARA FACILITAR O ACESSO)
// ===========================================
const secaoMenu = document.getElementById('secaoMenu');
const secaoPersonalizacaoFoto = document.getElementById('secaoPersonalizacaoFoto');
const secaoPersonalizacaoTema = document.getElementById('secaoPersonalizacaoTema');
const secaoJogo = document.getElementById('secaoJogo');
const secaoProximoTurno = document.getElementById('secaoProximoTurno');
const secaoResultadosFinais = document.getElementById('secaoResultadosFinais');
const secaoEstatisticas = document.getElementById('secaoEstatisticas');


const inputNumJogadores = document.getElementById('inputNumJogadores');
const divNomesJogadores = document.getElementById('divNomesJogadores');
const selectDificuldadeDica = document.getElementById('selectDificuldadeDica');
const selectCategoria = document.getElementById('selectCategoria');
const botaoComecarJogo = document.getElementById('botaoComecarJogo');
const botaoIrParaFoto = document.getElementById('botaoIrParaFoto');
const botaoIrParaTema = document.getElementById('botaoIrParaTema');
const botaoVerEstatisticas = document.getElementById('botaoVerEstatisticas');
const botaoVoltarParaMenuFoto = document.getElementById('botaoVoltarParaMenuFoto');
const botaoVoltarParaMenuTema = document.getElementById('botaoVoltarParaMenuTema');
const botaoVoltarAoMenuJogo = document.getElementById('botaoVoltarAoMenuJogo');
const botaoContinuarJogando = document.getElementById('botaoContinuarJogando');
const botaoFinalizarJogo = document.getElementById('botaoFinalizarJogo');
const botaoVoltarDoResultado = document.getElementById('botaoVoltarDoResultado');
const botaoVoltarDoDashboard = document.getElementById('botaoVoltarDoDashboard');


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
const mensagemProximoTurno = document.getElementById('mensagemProximoTurno');
const listaResultadosDiv = document.getElementById('listaResultados');
const dashboardEstatisticasDiv = document.getElementById('dashboardEstatisticas');


// ===========================================
// 3. FUNÇÕES DE NAVEGAÇÃO DE SEÇÕES
// ===========================================
function mostrarSecao(secaoId) {
    // Esconde todas as seções
    secaoMenu.style.display = 'none';
    secaoPersonalizacaoFoto.style.display = 'none';
    secaoPersonalizacaoTema.style.display = 'none';
    secaoJogo.style.display = 'none';
    secaoProximoTurno.style.display = 'none';
    secaoResultadosFinais.style.display = 'none';
    secaoEstatisticas.style.display = 'none';

    // Mostra a seção desejada
    document.getElementById(secaoId).style.display = 'block';

    // Ajusta visibilidade de info do jogador no jogo
    if (secaoId === 'secaoJogo' && numJogadores > 1) {
        infoJogadorAtualDiv.style.display = 'flex';
    } else {
        infoJogadorAtualDiv.style.display = 'none';
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
// 5. FUNÇÕES DE LÓGICA DO JOGO PRINCIPAL
// ===========================================

// Prepara o jogo para um novo turno ou reinício da palavra
function prepararTurno(novaPalavra = true) {
    if (novaPalavra) {
        // Zera erros e letras adivinhadas apenas se for uma nova palavra
        erros = 0;
        letrasAdivinhadas = [];
        
        // Seleciona uma nova palavra aleatória da categoria e dificuldade escolhida
        dificuldadeDica = selectDificuldadeDica.value;
        const categoriaSelecionada = selectCategoria.value;
        const palavrasDaCategoria = CATEGORIAS[categoriaSelecionada];
        
        // Simples verificação para não repetir a última palavra, se possível
        let novaPalavraObj;
        do {
            novaPalavraObj = palavrasDaCategoria[Math.floor(Math.random() * palavrasDaCategoria.length)];
        } while (novaPalavraObj === palavraSecretaObj && palavrasDaCategoria.length > 1);

        palavraSecretaObj = novaPalavraObj;
        palavraSecreta = palavraSecretaObj.palavra;
        dicaAtual = palavraSecretaObj.dicas[dificuldadeDica];
    }

    // Reseta visual do boneco e teclado
    mensagemJogo.textContent = `Adivinhe a palavra! Máximo de ${MAX_ERROS} erros.`;
    
    document.getElementById('cabeca-container').style.opacity = '0'; 
    partesBonecoCorpo.forEach(id => {
        document.getElementById(id).style.opacity = '1'; 
    });
    
    renderizarPalavra();
    renderizarTeclado();
    textoDicaSpan.textContent = dicaAtual;
    
    // Atualiza info do jogador atual
    if (numJogadores > 1) {
        nomeJogadorAtualSpan.textContent = jogadores[jogadorAtualIndex].nome;
        pontuacaoJogadorAtualSpan.textContent = jogadores[jogadorAtualIndex].pontuacao;
    }

    jogoEmAndamento = true; // Marca que o jogo está ativo
    mostrarSecao('secaoJogo'); // Garante que a seção do jogo está visível
}

// Inicia um novo jogo do zero (reinicia jogadores e estatísticas)
function iniciarNovoJogo() {
    numJogadores = parseInt(inputNumJogadores.value);
    jogadores = [];
    jogadorAtualIndex = 0;

    // Inicializa jogadores com nomes e estatísticas zeradas
    if (numJogadores > 1) {
        const inputsNomes = document.querySelectorAll('#divNomesJogadores input');
        inputsNomes.forEach((input, index) => {
            jogadores.push({
                nome: input.value || `Jogador ${index + 1}`,
                pontuacao: 0,
                acertosLetras: 0,
                errosLetras: 0,
                palavrasAcertadas: 0,
                palavrasPerdidas: 0
            });
        });
    } else {
        jogadores.push({ 
            nome: "Você", 
            pontuacao: 0,
            acertosLetras: 0,
            errosLetras: 0,
            palavrasAcertadas: 0,
            palavrasPerdidas: 0
        }); // Single player
    }

    prepararTurno(true); // Começa o primeiro turno com uma nova palavra
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
        
        // Verifica se a letra já foi adivinhada para desabilitar
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
        verificarFimDeJogo(); // Verifica se a palavra foi completa
    } else {
        botao.classList.add('erro');
        jogadores[jogadorAtualIndex].errosLetras++;
        erros++;
        removerParteBoneco(); 
        verificarFimDeJogo(true); // Verifica se o boneco foi completo e passa a vez
    }
    pontuacaoJogadorAtualSpan.textContent = jogadores[jogadorAtualIndex].pontuacao; // Atualiza pontuação em tempo real
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

function verificarFimDeJogo(erroLetra = false) {
    const palavraAtualDisplay = palavraDisplay.textContent.replace(/ /g, '');

    // Se acertou a palavra inteira
    if (palavraAtualDisplay === palavraSecreta) {
        mensagemJogo.textContent = `🎉 PARABÉNS, ${jogadores[jogadorAtualIndex].nome}! Você adivinhou a palavra!`;
        jogadores[jogadorAtualIndex].pontuacao += 100; // Pontos por palavra
        jogadores[jogadorAtualIndex].palavrasAcertadas++;
        finalizarTurno(true);
        return; 
    } 
    
    // Se o boneco está completo (perdeu o turno)
    if (erros >= MAX_ERROS) {
        mensagemJogo.textContent = `Você Perdeu, ${jogadores[jogadorAtualIndex].nome}! A palavra era: ${palavraSecreta}`;
        jogadores[jogadorAtualIndex].palavrasPerdidas++;
        finalizarTurno(false);
        return;
    }

    // Se é um erro e estamos no modo multiplayer e a palavra não acabou
    if (erroLetra && numJogadores > 1) {
        passarAVez(); // Passa a vez sem ir para a tela de "Próximo Turno"
    }
    // Se for single player ou acertou a letra, o jogo continua para o mesmo jogador
}


function finalizarTurno(vitoria) {
    jogoEmAndamento = false; // Pausa o jogo
    document.querySelectorAll('.btn-letra').forEach(btn => btn.disabled = true); // Desabilita teclado
    
    mensagemProximoTurno.textContent = `Turno de ${jogadores[jogadorAtualIndex].nome} finalizado. ${vitoria ? 'Você acertou a palavra!' : 'Você perdeu a palavra.'} Pontuação atual: ${jogadores[jogadorAtualIndex].pontuacao}`;
    
    // Passa para a próxima seção de "Continuar Jogando?"
    mostrarSecao('secaoProximoTurno'); 
}


// Lógica para passar a vez no multiplayer quando um erro ocorre
function passarAVez() {
    if (numJogadores > 1) {
        jogadorAtualIndex = (jogadorAtualIndex + 1) % numJogadores; // Avança para o próximo jogador
        // A palavra atual e seu estado (letras adivinhadas, erros) são mantidos
        // O boneco, no entanto, é resetado visualmente para o próximo jogador
        erros = 0; // Zera os erros visuais para o novo jogador, mas o progresso da palavra permanece.
        // O estado do boneco será desenhado do zero na tela do próximo jogador
        
        // Renderiza o teclado novamente com as letras já adivinhadas desabilitadas
        renderizarTeclado(); 
        
        // Atualiza as informações do jogador na tela
        nomeJogadorAtualSpan.textContent = jogadores[jogadorAtualIndex].nome;
        pontuacaoJogadorAtualSpan.textContent = jogadores[jogadorAtualIndex].pontuacao;
        
        mensagemJogo.textContent = `É a vez de ${jogadores[jogadorAtualIndex].nome}! Adivinhe a palavra!`;

        // Reseta o visual do boneco para o novo jogador
        document.getElementById('cabeca-container').style.opacity = '0';
        partesBonecoCorpo.forEach(id => {
            document.getElementById(id).style.opacity = '1';
        });

        jogoEmAndamento = true; // Permite que o novo jogador comece a jogar
    }
}


function processarContinuarOuFinalizarJogo() {
    // Se estamos em multiplayer e ainda há jogadores a jogar na "rodada" (seja por turnos fixos ou até todos jogarem uma palavra)
    // Para simplificar, vou considerar que a rodada termina quando um jogador adivinha ou completa o boneco.
    // E o botão "Continuar Jogando" significa "Começar um novo turno com nova palavra para o próximo jogador"

    jogadorAtualIndex = (jogadorAtualIndex + 1) % numJogadores; // Avança para o próximo jogador que vai começar a próxima palavra
    
    // Se o jogador atual é o primeiro, significa que todos já jogaram uma rodada.
    // Podemos ter uma lógica mais complexa aqui para determinar o fim do jogo.
    // Por enquanto, "Finalizar Jogo" leva aos resultados.
    
    if (numJogadores === 1) { // Para single player, "Continuar" significa um novo jogo
        iniciarNovoJogo();
    } else {
        prepararTurno(true); // Novo turno com nova palavra para o próximo jogador
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

// Gera inputs de nome para os jogadores
inputNumJogadores.addEventListener('change', (event) => {
    numJogadores = parseInt(event.target.value);
    divNomesJogadores.innerHTML = ''; 
    
    if (numJogadores > 1) {
        divNomesJogadores.style.display = 'block';
        for (let i = 0; i < numJogadores; i++) {
            const inputNome = document.createElement('input');
            inputNome.type = 'text';
            inputNome.classList.add('input-personalizado');
            inputNome.placeholder = `Nome do Jogador ${i + 1}`;
            divNomesJogadores.appendChild(inputNome);
            divNomesJogadores.appendChild(document.createElement('br')); 
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
    botaoComecarJogo.addEventListener('click', iniciarNovoJogo);
    botaoIrParaFoto.addEventListener('click', () => mostrarSecao('secaoPersonalizacaoFoto'));
    botaoIrParaTema.addEventListener('click', () => mostrarSecao('secaoPersonalizacaoTema'));
    botaoVerEstatisticas.addEventListener('click', exibirDashboardEstatisticas);

    botaoVoltarParaMenuFoto.addEventListener('click', () => mostrarSecao('secaoMenu'));
    botaoVoltarParaMenuTema.addEventListener('click', () => mostrarSecao('secaoMenu'));
    botaoVoltarAoMenuJogo.addEventListener('click', () => mostrarSecao('secaoMenu')); // Do jogo para o menu
    botaoVoltarDoResultado.addEventListener('click', () => mostrarSecao('secaoMenu')); // Dos resultados para o menu
    botaoVoltarDoDashboard.addEventListener('click', () => mostrarSecao('secaoMenu')); // Do dashboard para o menu
    
    // Eventos da tela "Próximo Turno?"
    botaoContinuarJogando.addEventListener('click', processarContinuarOuFinalizarJogo);
    botaoFinalizarJogo.addEventListener('click', exibirDashboardEstatisticas); // Finaliza e mostra resultados
    
    // Inicializa os inputs de nome se o valor padrão de numJogadores for > 1
    inputNumJogadores.dispatchEvent(new Event('change'));
});
