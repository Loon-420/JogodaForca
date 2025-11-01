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
        { palavra: "CROCODILO", dicas: { facil: "Réptil grande que vive na água e tem dentes afiados.", medio: "Grande réptil semiaquático, predador apex em seu ecossistema, com mandíbulas poderosas.", dificil: "Sua notável capacidade de sobrevivência ao longo de milhões de anos é atribuída à sua fisiologia adaptativa, incluindo um sistema circulatório complexo e uma dieta oportunista." } },
        { palavra: "HIPOPOTAMO", dicas: { facil: "Grande animal africano que vive na água.", medio: "Grande mamífero herbívoro semi-aquático da África, conhecido por sua agressividade e grandes presas.", dificil: "Apesar de seu habitat aquático, sua pele secreta um 'protetor solar' natural avermelhado, uma adaptação fascinante para sua fisiologia termorreguladora e proteção contra UV." } },
        { palavra: "CANGURU", dicas: { facil: "Animal australiano que pula e tem uma bolsa.", medio: "Marsupial endêmico da Austrália, conhecido por suas poderosas pernas traseiras e bolsa para carregar filhotes.", dificil: "Seu modo de locomoção bípede, por saltos, é uma adaptação energética eficiente para a vasta paisagem australiana, contrastando com a locomoção de quadrúpedes." } },
        { palavra: "GOLFINHO", dicas: { facil: "Mamífero marinho muito inteligente.", medio: "Mamífero aquático altamente inteligente e social, conhecido por sua ecolocalização e saltos acrobáticos.", dificil: "A complexidade de sua comunicação sonora, que inclui cliques e assobios, sugere uma estrutura social elaborada e uma capacidade cognitiva avançada, objeto de estudos em bioacústica e inteligência animal." } },
        { palavra: "LOBO", dicas: { facil: "Primo selvagem do cachorro.", medio: "Predador apex da família Canidae, conhecido por viver em alcateias e sua vocalização característica.", dificil: "Sua organização social altamente estruturada dentro da alcateia, com hierarquias bem definidas e caça cooperativa, demonstra um alto grau de inteligência social e adaptabilidade ecológica." } },
        { palavra: "URSO", dicas: { facil: "Animal grande que hiberna.", medio: "Mamífero omnívoro de grande porte, conhecido por hibernar e ter garras fortes.", dificil: "A hibernação, um estado de torpor metabólico, é uma estratégia evolutiva fascinante para sobreviver a períodos de escassez alimentar e baixas temperaturas, envolvendo profundas alterações fisiológicas." } },
        { palavra: "COBRA", dicas: { facil: "Réptil sem pernas que rasteja.", medio: "Réptil alongado e sem membros, muitas espécies são venenosas e caçam por constrição ou veneno.", dificil: "Sua ausência de membros e a notável capacidade de locomoção rastejante, juntamente com o desenvolvimento de glândulas de veneno altamente eficazes, representam um pináculo da adaptação evolutiva em répteis." } },
        { palavra: "TIGRE", dicas: { facil: "Felino com listras laranjas e pretas.", medio: "Maior felino do mundo, conhecido por suas listras distintivas e sua natureza solitária.", dificil: "A complexa camuflagem de suas listras, que se adapta à luz filtrada da floresta, exemplifica uma coevolução entre predador e ambiente, otimizando sua eficácia como caçador solitário." } },
        { palavra: "LEOPARDO", dicas: { facil: "Felino com pintas, caça sozinho.", medio: "Felino africano e asiático conhecido por suas rosetas e sua habilidade de caçar e escalar árvores.", dificil: "A versatilidade ecológica do leopardo, que permite sua sobrevivência em uma ampla gama de habitats, de florestas densas a savanas áridas, é um testemunho de sua adaptabilidade comportamental e morfológica." } },
        { palavra: "CORUJA", dicas: { facil: "Ave de hábitos noturnos.", medio: "Ave de rapina noturna com olhos grandes e audição aguçada, conhecida por seu voo silencioso.", dificil: "A fusão de sua visão binocular aprimorada, audição direcional e penas especializadas para voo silencioso, torna-a uma caçadora noturna excepcionalmente eficiente e um exemplo de adaptação sensorial." } }
    ],
    carros: [
        { palavra: "FUSCA", dicas: { facil: "Um clássico da Volkswagen.", medio: "Carro compacto popularizado na Alemanha e no Brasil, conhecido por seu motor traseiro refrigerado a ar.", dificil: "O 'Volkswagen Tipo 1', ícone da motorização pós-guerra, simboliza a democratização do automóvel, influenciando gerações de design e engenharia automotiva." } },
        { palavra: "CORSA", dicas: { facil: "Um popular modelo da Chevrolet.", medio: "Veículo compacto produzido pela General Motors, com diversas gerações e versões.", dificil: "Parte da estratégia global da General Motors, sua versatilidade e adaptação a diferentes mercados o tornaram um player chave no segmento de compactos urbanos por décadas." } },
        { palavra: "PALIO", dicas: { facil: "Um carro compacto da Fiat.", medio: "Modelo de carro compacto da Fiat, um dos mais vendidos no mercado brasileiro por anos.", dificil: "Concebido como um 'carro mundial', sua plataforma modular permitiu personalização para atender às demandas específicas de mercados emergentes, consolidando sua presença global." } },
        { palavra: "ONIX", dicas: { facil: "Um dos carros mais vendidos no Brasil.", medio: "Compacto da Chevrolet que rapidamente se tornou líder de vendas, com foco em tecnologia e conectividade.", dificil: "A estratégia de design e marketing do Onix, focada na conectividade e no custo-benefício, reposicionou a Chevrolet no segmento de entrada, ditando tendências no consumo automotivo." } },
        { palavra: "FERRARI", dicas: { facil: "Marca italiana de carros esportivos de luxo.", medio: "Fabricante italiana de automóveis de luxo e alta performance, com forte tradição em corridas.", dificil: "O legado de Enzo Ferrari transcende a engenharia automotiva, representando a paixão pela velocidade e a busca incessante pela perfeição estética e mecânica no automobilismo de elite." } },
        { palavra: "BMW", dicas: { facil: "Marca alemã conhecida por carros de luxo e desempenho.", medio: "Fabricante alemã de automóveis, motocicletas e motores, conhecida pela 'prazer de dirigir'.", dificil: "A filosofia de engenharia da BMW, centrada na dinâmica de condução e no design funcional, estabeleceu novos padrões para o segmento de luxo, equilibrando inovação tecnológica e tradição." } },
        { palavra: "MERCEDES", dicas: { facil: "Marca alemã de carros luxuosos.", medio: "Fabricante alemã de automóveis de luxo, ônibus e caminhões, pioneira na história automotiva.", dificil: "A inovação contínua da Mercedes-Benz, desde o primeiro automóvel patenteado por Karl Benz, define a trajetória da indústria automobilística, equilibrando prestígio e engenharia de ponta." } },
        { palavra: "TOYOTA", dicas: { facil: "Marca japonesa famosa por carros confiáveis.", medio: "Maior fabricante de automóveis do mundo, conhecida por sua eficiência e sistema de produção 'just in time'.", dificil: "O 'Sistema Toyota de Produção' revolucionou a manufatura global, estabelecendo paradigmas de eficiência, qualidade e melhoria contínua que transcenderam a indústria automotiva." } },
        { palavra: "HONDA", dicas: { facil: "Marca japonesa de carros e motos.", medio: "Multinacional japonesa conhecida pela fabricação de automóveis, motocicletas e equipamentos de força.", dificil: "A visão de Soichiro Honda de democratizar o transporte pessoal levou à criação de uma empresa que simboliza a inovação e a confiabilidade, com um forte legado em engenharia de motores e competições." } },
        { palavra: "FORD", dicas: { facil: "Marca americana, criadora do Modelo T.", medio: "Fabricante americana de automóveis, pioneira na produção em massa e na linha de montagem.", dificil: "A introdução da linha de montagem móvel por Henry Ford, para a produção do Modelo T, transformou radicalmente a indústria manufatureira, inaugurando a era da produção em massa e do consumo de massa." } },
        { palavra: "NISSAN", dicas: { facil: "Marca japonesa, conhecida pelo GT-R.", medio: "Fabricante japonesa de automóveis, com destaque para veículos inovadores e esportivos.", dificil: "Sua história, marcada por períodos de intensa inovação e desafios estratégicos, como a aliança com a Renault, reflete a dinâmica complexa da globalização e da consolidação da indústria automotiva no século XXI." } },
        { palavra: "RENAULT", dicas: { facil: "Marca francesa de carros.", medio: "Fabricante francesa de automóveis, com forte presença na Europa e em mercados emergentes.", dificil: "A trajetória da Renault, desde os primórdios da indústria automotiva até as complexas alianças globais contemporâneas, ilustra a evolução da manufatura e do design europeu, com foco em veículos acessíveis e funcionais." } },
        { palavra: "HYUNDAI", dicas: { facil: "Marca coreana que cresceu muito.", medio: "Fabricante sul-coreana de automóveis, que se destacou por seu crescimento rápido e design moderno.", dificil: "A ascensão meteórica da Hyundai no cenário automotivo global, impulsionada por investimentos em design, tecnologia e uma agressiva estratégia de garantia, desafiou os paradigmas estabelecidos por montadoras tradicionais." } },
        { palavra: "KIA", dicas: { facil: "Outra marca coreana popular.", medio: "Fabricante sul-coreana de automóveis, parte do grupo Hyundai-Kia, com foco em design e custo-benefício.", dificil: "A transformação da Kia, de produtora de veículos mais básicos a uma marca reconhecida por seu design inovador e qualidade competitiva, é um exemplo da capacidade de reinvenção e adaptação no mercado global." } },
        { palavra: "JEEP", dicas: { facil: "Carro robusto, bom para trilhas.", medio: "Marca americana de utilitários esportivos (SUVs) e veículos off-road, sinônimo de aventura.", dificil: "Originalmente um veículo militar na Segunda Guerra Mundial, o Jeep transcendeu sua função utilitária para se tornar um ícone cultural, simbolizando liberdade, aventura e a robustez da engenharia americana." } },
        { palavra: "CHEVROLET", dicas: { facil: "Marca americana, famosa por picapes.", medio: "Divisão da General Motors, uma das maiores fabricantes de automóveis do mundo, com uma vasta gama de veículos.", dificil: "A Chevrolet, desde sua fundação por Louis Chevrolet e William C. Durant, representa um pilar da indústria automotiva americana, com um legado de inovação, diversidade de modelos e uma forte identidade cultural." } },
        { palavra: "VOLKSWAGEN", dicas: { facil: "Marca alemã, significa 'carro do povo'.", medio: "Fabricante alemã de automóveis, conhecida por modelos populares como Fusca e Golf.", dificil: "Fundada com o ideal de produzir um 'carro do povo', a Volkswagen tornou-se uma das maiores montadoras globais, com um portfólio diversificado e uma história complexa de inovação e impacto social." } }
    ],
    paises: [
        { palavra: "BRASIL", dicas: { facil: "País do carnaval e do futebol.", medio: "Maior país da América do Sul, conhecido por sua vasta biodiversidade e cultura rica.", dificil: "Sua complexa formação histórica, marcada por ciclos econômicos e culturais diversos, reflete a miscigenação de povos e a luta por identidade em um território de dimensões continentais." } },
        { palavra: "CANADA", dicas: { facil: "País grande na América do Norte, conhecido pelo xarope de bordo.", medio: "Segundo maior país do mundo em área total, com duas línguas oficiais e vasta natureza selvagem.", dificil: "A política de multiculturalismo e a gestão de recursos naturais vastos, especialmente hídricos e florestais, são pilares de sua identidade e desafios para o futuro sustentável." } },
        { palavra: "JAPAO", dicas: { facil: "Terra do Sol Nascente.", medio: "Nação insular no Pacífico Ocidental, com rica história milenar e alta tecnologia.", dificil: "A notável capacidade de síntese cultural, incorporando inovações ocidentais enquanto preserva tradições milenares, define sua singularidade na geopolítica e na cultura global." } },
        { palavra: "ITALIA", dicas: { facil: "País em forma de bota, famoso por massas e pizzas.", medio: "País europeu com vasta herança cultural, berço do Império Romano e do Renascimento.", dificil: "Seu mosaico cultural, resultado de séculos de fragmentação política e influências regionais, culminou na unificação tardia, moldando uma identidade nacional multifacetada e vibrante." } },
        { palavra: "EGITO", dicas: { facil: "Famoso pelas pirâmides e faraós.", medio: "País do norte da África e Oriente Médio, com uma civilização antiga às margens do Rio Nilo.", dificil: "A influência duradoura de sua civilização antiga na arquitetura, na escrita e na religião de culturas subsequentes, demonstra o profundo impacto de suas inovações proto-científicas e artísticas." } },
        { palavra: "FRANCA", dicas: { facil: "Famoso pela Torre Eiffel.", medio: "Nação europeia conhecida por sua arte, moda, gastronomia e pela Revolução Francesa.", dificil: "O Iluminismo francês e os ideais da Revolução, propagados globalmente, redefiniram conceitos de cidadania, direitos humanos e soberania popular, moldando o panorama político moderno." } },
        { palavra: "CHINA", dicas: { facil: "País mais populoso do mundo.", medio: "Antiga civilização asiática, conhecida pela Grande Muralha e rápido crescimento econômico.", dificil: "A complexidade de sua ascensão econômica contemporânea, balanceando uma economia de mercado com um sistema político centralizado, apresenta desafios e oportunidades únicas para o cenário global." } },
        { palavra: "ALEMANHA", dicas: { facil: "Famosa por cerveja e carros de engenharia.", medio: "Potência europeia com rica história, conhecida por sua engenharia, filosofia e grandes guerras mundiais.", dificil: "A resiliência de sua reconstrução pós-guerra e a consolidação como força motriz da União Europeia refletem uma capacidade de inovação e adaptação notável no cenário geopolítico." } },
        { palavra: "INDIA", dicas: { facil: "País grande na Ásia, famoso por especiarias.", medio: "Segundo país mais populoso do mundo, com rica diversidade cultural, religiosa e histórica.", dificil: "Sua civilização milenar, berço de grandes religiões e filosofias, e sua complexa estrutura social e política contemporânea, exemplificam a interação de tradições e modernidade em escala continental." } },
        { palavra: "MEXICO", dicas: { facil: "País da América do Norte, famoso por tacos e mariachis.", medio: "País latino-americano com rica cultura pré-colombiana e colonial, conhecido por sua culinária e festivais vibrantes.", dificil: "A fusão de heranças indígenas e hispânicas resultou em uma identidade cultural única, onde tradições ancestrais e influências modernas se entrelaçam em uma sociedade complexa e vibrante." } },
        { palavra: "AUSTRALIA", dicas: { facil: "País-continente, lar de coalas e cangurus.", medio: "País e continente insular, conhecido por sua vida selvagem única e vastas paisagens desérticas.", dificil: "Sua geologia e biodiversidade únicas, moldadas por milhões de anos de isolamento continental, oferecem um laboratório natural para o estudo da evolução e da adaptação de espécies endêmicas." } },
        { palavra: "ESPANHA", dicas: { facil: "País da Europa, conhecido por touradas e flamenco.", medio: "País europeu com rica história, arte, arquitetura e influência cultural global devido ao seu império colonial.", dificil: "A complexidade de sua formação histórica, marcada pela coexistência e conflito de diversas culturas e religiões, resultou em uma identidade multifacetada, visível em sua arte, arquitetura e tradições." } },
        { palavra: "GRECIA", dicas: { facil: "Berço da democracia e Olimpíadas.", medio: "País europeu com uma civilização antiga que influenciou profundamente o Ocidente em filosofia, política e arte.", dificil: "O legado da Grécia Antiga, com seus pilares filosóficos, democráticos e artísticos, estabeleceu os fundamentos da civilização ocidental, cujos ecos ressoam na política, na ciência e nas artes contemporâneas." } },
        { palavra: "AFRICADOSUL", dicas: { facil: "País no extremo sul da África.", medio: "País multiétnico no sul da África, conhecido por sua história de apartheid e Nelson Mandela.", dificil: "A transição do regime de apartheid para uma democracia multirracial é um testemunho da resiliência humana e da busca por justiça social, exemplificando a complexidade da reconciliação em sociedades pós-conflito." } },
        { palavra: "PORTUGAL", dicas: { facil: "País na Europa, famoso por navegadores.", medio: "País europeu com uma rica história de exploração marítima, língua oficial do Brasil.", dificil: "Sua era dos Descobrimentos, que redefiniu o mapa-múndi e estabeleceu rotas comerciais globais, ilustra o impacto das inovações náuticas e da visão estratégica na formação de impérios transcontinentais." } },
        { palavra: "ARGENTINA", dicas: { facil: "Vizinho do Brasil, famoso por tango e carne.", medio: "Segundo maior país da América do Sul, conhecido por sua cultura do tango, carne bovina e paisagens diversas.", dificil: "A complexidade de sua formação social e política, marcada por ondas migratórias europeias e períodos de instabilidade econômica, moldou uma identidade nacional singular no cenário sul-americano." } },
        { palavra: "PERU", dicas: { facil: "País na América do Sul, famoso por Machu Picchu.", medio: "País andino com uma rica herança inca e colonial, conhecido por sua culinária e paisagens montanhosas.", dificil: "O império Inca, com sua engenharia avançada e organização social complexa, representa um ápice das civilizações pré-colombianas, cujo legado arquitetônico e cultural ainda fascina historiadores e arqueólogos." } }
    ],
    filmes: [
        { palavra: "MATRIX", dicas: { facil: "Pílula azul ou pílula vermelha?", medio: "Filme de ficção científica que questiona a natureza da realidade, estrelado por Keanu Reeves.", dificil: "A alegoria platônica da caverna, reimaginada através da cibertecnologia, explora a ontologia da percepção e o livre-arbítrio em um mundo pós-moderno." } },
        { palavra: "TITANIC", dicas: { facil: "Grande navio, um iceberg e um romance.", medio: "Drama romântico épico ambientado na viagem inaugural de um transatlântico em 1912.", dificil: "A narrativa de tragédia e romance em um contexto de estratificação social reflete criticamente os valores e as tensões da Belle Époque, culminando na fragilidade da ambição humana frente à natureza." } },
        { palavra: "STARWARS", dicas: { facil: "Uma galáxia muito, muito distante...", medio: "Franquia de ficção científica e fantasia sobre uma saga espacial de batalhas entre o bem e o mal.", dificil: "O arquétipo do 'Caminho do Herói' de Joseph Campbell é magistralmente empregado na construção de seu universo ficcional, ressoando com narrativas míticas universais de luta e redenção." } },
        { palavra: "VINGADORES", dicas: { facil: "Heróis mais poderosos da Terra se unem.", medio: "Filme de super-heróis da Marvel que reúne vários personagens em uma equipe para salvar o mundo.", dificil: "A complexidade da interconexão narrativa, desenvolvida ao longo de múltiplas fases do Universo Cinematográfico Marvel, estabelece um novo paradigma para a construção de franquias cinematográficas de larga escala." } },
        { palavra: "JURASSICPARK", dicas: { facil: "Parque com dinossauros.", medio: "Cientistas conseguem reviver dinossauros para um parque temático, com consequências desastrosas.", dificil: "A exploração das implicações éticas da biotecnologia e da manipulação genética, confrontando a hybris científica com as forças indomáveis da natureza, ecoa os temores da era da clonagem." } },
        { palavra: "HARRYPOTTER", dicas: { facil: "O menino bruxo.", medio: "Saga de fantasia sobre um jovem órfão que descobre ser um bruxo e estuda em Hogwarts.", dificil: "O desenvolvimento de seu universo literário e cinematográfico transcende a mera fantasia infantil, abordando temas universais como amizade, sacrifício e a luta contra a opressão, ressoando com públicos de todas as idades." } },
        { palavra: "INTERESTELAR", dicas: { facil: "Viagem espacial para salvar a humanidade.", medio: "Filme de ficção científica sobre um grupo de exploradores que viaja através de um buraco de minhoca.", dificil: "A exploração dos conceitos de relatividade temporal, buracos negros e a busca por um novo lar para a humanidade, sob a ótica da física teórica, eleva o gênero da ficção científica a patamares filosóficos e cosmológicos." } },
        { palavra: "SENHORDOSANEIS", dicas: { facil: "Três anéis para os Reis Elfos...", medio: "Épica trilogia de fantasia baseada nos livros de J.R.R. Tolkien, sobre uma jornada para destruir um anel mágico.", dificil: "A construção de um universo mitológico tão detalhado e coerente, influenciado por antigas sagas europeias, representa um marco na literatura fantástica, explorando temas de bem vs. mal, amizade e a corrupção do poder." } },
        { palavra: "EUMAN", dicas: { facil: "Robô que virou amigo de um menino.", medio: "Filme de ficção científica sobre um robô doméstico que desenvolve emoções e busca ser humano.", dificil: "A narrativa explora os limites da inteligência artificial e da humanidade, questionando o que realmente define a consciência e a capacidade de sentir, através da jornada de um ser sintético." } },
        { palavra: "OREILEAO", dicas: { facil: "Filme da Disney sobre um leão filhote.", medio: "Animação clássica da Disney sobre a jornada de um filhote de leão para se tornar rei da savana.", dificil: "A alegoria da realeza e do ciclo da vida, inspirada em Hamlet, transcende a animação infantil, abordando temas universais de responsabilidade, luto e o equilíbrio ecológico em um contexto africano." } },
        { palavra: "BLADERUNNER", dicas: { facil: "Caçador de replicantes.", medio: "Filme de ficção científica noir que segue um detetive caçando androides em uma Los Angeles distópica.", dificil: "A exploração existencial da identidade e da memória em seres artificiais, em um cenário distópico de cyberpunk, questiona a essência da humanidade e os limites da criação tecnológica." } },
        { palavra: "ET", dicas: { facil: "Extraterrestre amigo de um garoto.", medio: "Clássico de ficção científica de Steven Spielberg sobre a amizade entre um menino e um alienígena.", dificil: "A narrativa de inocência e descoberta, que aborda temas de amizade, separação e a aceitação do diferente, ressoa como um conto atemporal sobre a capacidade humana de conexão e empatia." } },
        { palavra: "PULPFICTION", dicas: { facil: "Filme de Tarantino com várias histórias interligadas.", medio: "Filme cult de Quentin Tarantino com narrativa não linear, diálogos icônicos e violência estilizada.", dificil: "A estrutura narrativa fragmentada e a subversão das convenções do gênero gangster, combinadas com diálogos pós-modernos e referências culturais, redefiniram a linguagem cinematográfica dos anos 90." } },
        { palavra: "LALALAND", dicas: { facil: "Musical em Los Angeles.", medio: "Musical romântico que segue um pianista de jazz e uma aspirante a atriz em Los Angeles.", dificil: "A homenagem nostálgica aos musicais clássicos de Hollywood, combinada com uma abordagem agridoce sobre os sacrifícios da arte e do amor na era moderna, evoca a magia e a melancolia do sonho americano." } },
        { palavra: "CIDADEINVISIVEL", dicas: { facil: "Série brasileira com folclore.", medio: "Série brasileira da Netflix que mistura fantasia e folclore, ambientada no Rio de Janeiro.", dificil: "A releitura contemporânea do folclore brasileiro, explorando a relação entre o mundo humano e o mitológico em um contexto urbano, aborda questões de conservação ambiental e identidade cultural." } },
        { palavra: "CORINGA", dicas: { facil: "Origem do vilão do Batman.", medio: "Drama psicológico que explora a origem de um dos maiores vilões dos quadrinhos.", dificil: "A desconstrução da figura do vilão através de uma narrativa de opressão social e desamparo psíquico, em um contexto de Gotham City, reflete sobre a marginalização e as patologias da sociedade contemporânea." } },
        { palavra: "PARASITA", dicas: { facil: "Filme coreano sobre duas famílias.", medio: "Thriller sul-coreano que explora temas de luta de classes e desigualdade social de forma satírica.", dificil: "A crítica social mordaz e a narrativa de suspense, que transitam entre o drama familiar e o horror psicológico, expõem as fissuras de classe na sociedade contemporânea através de uma masterclass de roteiro e direção." } },
        { palavra: "OSINCRIVEIS", dicas: { facil: "Família de super-heróis da Pixar.", medio: "Animação da Pixar sobre uma família de super-heróis aposentados que precisam voltar à ação.", dificil: "A subversão dos tropos de super-heróis com uma narrativa familiar, explorando temas de responsabilidade, individualidade e o equilíbrio entre a vida doméstica e os deveres extraordinários, é uma obra-prima da animação." } }
    ],
    series: [
        { palavra: "STRANGERTHINGS", dicas: { facil: "Crianças em uma pequena cidade com eventos sobrenaturais nos anos 80.", medio: "Série de ficção científica e horror ambientada nos anos 80, com crianças que desvendam mistérios sobrenaturais.", dificil: "A homenagem nostálgica aos clássicos da década de 80, combinada com uma narrativa complexa de mistério e desenvolvimento de personagens, redefiniu o gênero de ficção científica para uma nova geração." } },
        { palavra: "LACASADEPAPEL", dicas: { facil: "Um grupo planeja roubos à Casa da Moeda.", medio: "Série espanhola sobre um grupo de ladrões que planeja o maior assalto da história.", dificil: "A subversão das convenções do gênero de assalto, combinada com a profundidade psicológica dos personagens e a crítica social implícita, transformou-a em um fenômeno cultural global." } },
        { palavra: "GOT", dicas: { facil: "Luta pelo Trono de Ferro.", medio: "Série de fantasia medieval épica baseada nos livros de George R.R. Martin, sobre casas nobres em guerra pelo controle de Westeros.", dificil: "A intricada teia de intrigas políticas, traições e desenvolvimentos de personagens moralmente ambíguos estabeleceu um novo padrão para a narrativa televisiva, desafiando as expectativas do público em relação aos heróis e vilões." } },
        { palavra: "BREAKINGBAD", dicas: { facil: "Um professor de química se torna um chefão das drogas.", medio: "Série dramática sobre um professor de química que, após ser diagnosticado com câncer, se envolve com a produção de metanfetamina.", dificil: "A gradual degradação moral do protagonista, de homem comum a criminoso implacável, é um estudo aprofundado sobre a natureza da corrupção e as escolhas que definem a identidade humana, impulsionado por um roteiro primoroso." } },
        { palavra: "THEOFFICE", dicas: { facil: "Focada no dia a dia de funcionários de um escritório de papel.", medio: "Comédia de situação no formato de 'mockumentary', que retrata o cotidiano cômico de um escritório.", dificil: "A genialidade de seu humor reside na observação meticulosa das nuances sociais e micro-agressões do ambiente corporativo, utilizando o formato de falso documentário para criar uma intimidade desconfortável com os personagens." } },
        { palavra: "FRIENDS", dicas: { facil: "Seis amigos morando em Nova York.", medio: "Série de comédia sobre as vidas e desventuras de seis amigos na cidade de Nova York.", dificil: "O impacto cultural e social de 'Friends' na representação da amizade e dos relacionamentos urbanos da geração X, através de sua estrutura narrativa de sitcom clássica, a consolidou como um marco na televisão mundial." } },
        { palavra: "DEXTER", dicas: { facil: "Um serial killer que mata outros serial killers.", medio: "Série sobre um especialista forense que é um serial killer com um código moral, caçando outros criminosos.", dificil: "A exploração da dualidade entre o 'monstro' interior e a busca por normalidade social, sob a ótica de um protagonista que se vê como um 'serial killer do bem', questiona os limites da justiça e da moralidade." } },
        { palavra: "HOUSE", dicas: { facil: "Médico genial e rabugento que resolve casos misteriosos.", medio: "Série médica sobre um médico brilhante e excêntrico que desvenda diagnósticos complexos e raros.", dificil: "A personificação da genialidade misantrópica e a aplicação do método socrático ao diagnóstico médico complexo, desafiando a ortodoxia e a ética profissional, caracterizam a singularidade de sua abordagem narrativa na televisão." } },
        { palavra: "DARK", dicas: { facil: "Série alemã sobre viagem no tempo.", medio: "Série alemã de ficção científica e mistério, com complexa trama envolvendo viagem no tempo e segredos familiares.", dificil: "A intrincada narrativa multilinear, que explora paradoxos temporais e o determinismo do destino em várias gerações de famílias interconectadas, redefine o gênero de viagem no tempo." } },
        { palavra: "THECROWN", dicas: { facil: "Série sobre a rainha da Inglaterra.", medio: "Drama histórico que narra a vida da Rainha Elizabeth II e os eventos políticos do Reino Unido.", dificil: "A meticulosa reconstituição histórica e a dramatização das tensões entre a vida pessoal e o dever público da monarquia britânica oferecem uma análise profunda do poder e da imagem da realeza moderna." } },
        { palavra: "BLACKMIRROR", dicas: { facil: "Série de tecnologia e futuro.", medio: "Série antológica de ficção científica que explora o lado sombrio da tecnologia e da sociedade moderna.", dificil: "A distopia tecnológica e a crítica social que permeiam cada episódio, refletindo sobre os impactos éticos e psicológicos do avanço digital, servem como um espelho perturbador para a sociedade contemporânea." } },
        { palavra: "SQUIDGAME", dicas: { facil: "Jogos mortais para ganhar dinheiro.", medio: "Série sul-coreana sobre um grupo de pessoas endividadas que competem em jogos infantis mortais por um prêmio em dinheiro.", dificil: "A crítica social contundente à desigualdade econômica e à exploração humana, ambientada em um cenário de jogos infantis perversamente letais, ressoa globalmente como uma alegoria sombria do capitalismo tardio." } },
        { palavra: "OITNB", dicas: { facil: "Mulheres em uma prisão.", medio: "Drama-comédia que acompanha a vida de uma mulher em uma prisão federal feminina e suas companheiras.", dificil: "A exploração das complexas dinâmicas sociais, raciais e de gênero dentro de um sistema prisional feminino, através de personagens multifacetadas, oferece uma crítica profunda ao sistema de justiça e às condições de encarceramento." } },
        { palavra: "PEAKYBLINDERS", dicas: { facil: "Gangue inglesa nos anos 20.", medio: "Drama de época britânico sobre uma gangue de Birmingham após a Primeira Guerra Mundial.", dificil: "A reconstituição visceral da Grã-Bretanha pós-Primeira Guerra, com sua atmosfera de criminalidade, luta de classes e traumas de guerra, é um estudo sobre poder, família e a busca por ascensão social." } },
        { palavra: "MRROBOT", dicas: { facil: "Hacker com problemas psicológicos.", medio: "Thriller psicológico sobre um programador brilhante, mas socialmente ansioso, que se torna um hacker ativista.", dificil: "A complexa narrativa de hackerismo, paranoia corporativa e saúde mental, com sua estética visual distinta e reviravoltas psicológicas, questiona a natureza da realidade e a ética na era digital." } },
        { palavra: "ARCANE", dicas: { facil: "Animação baseada em League of Legends.", medio: "Série de animação inspirada no universo do jogo League of Legends, com foco em irmãs separadas por conflitos.", dificil: "A inovação visual e narrativa de 'Arcane' eleva as adaptações de videogames a um novo patamar, explorando temas de desigualdade social, ciência e magia em um cenário de rivalidade entre cidades-gêmeas." } },
        { palavra: "THEBOYS", dicas: { facil: "Super-heróis nem sempre são bons.", medio: "Série de super-heróis que subverte o gênero, mostrando o lado corrupto e corporativo dos heróis.", dificil: "A sátira mordaz da cultura de super-heróis e do corporativismo, expondo a hipocrisia e a violência por trás das fachadas heroicas, oferece uma crítica contundente à idolatria de figuras públicas e ao poder sem limites." } }
    ],
    cores: [
        { palavra: "AZUL", dicas: { facil: "A cor do céu e do mar.", medio: "Cor primária associada à tranquilidade, profundidade e vastidão.", dificil: "No espectro visível, sua menor frequência de onda confere-lhe associações simbólicas com o infinito, a introspecção e a melancolia em diversas culturas e manifestações artísticas." } },
        { palavra: "VERMELHO", dicas: { facil: "Cor da paixão e do perigo.", medio: "Cor primária vibrante, frequentemente associada à energia, amor e alerta.", dificil: "A percepção desta cor, resultado da maior frequência de onda visível, evoca respostas fisiológicas e psicológicas intensas, sendo amplamente explorada em simbolismos de poder, paixão e advertência através da história." } },
        { palavra: "AMARELO", dicas: { facil: "Cor do sol.", medio: "Cor primária associada à luz, otimismo, riqueza e, por vezes, inveja.", dificil: "Sua ambivalência simbólica, que transita da alegria e da iluminação à traição e à doença em diferentes contextos culturais, reflete a complexidade da percepção humana e suas projeções emocionais." } },
        { palavra: "VERDE", dicas: { facil: "Cor da natureza e esperança.", medio: "Cor secundária que evoca natureza, crescimento, harmonia e também inexperiência.", dificil: "A predominância desta cor nos ecossistemas terrestres a associa intrinsecamente à vida e à renovação, mas sua gama cromática também abrange nuances de toxicidade e decadência em simbolismos culturais." } },
        { palavra: "ROXO", dicas: { facil: "Cor da realeza.", medio: "Cor secundária resultante da mistura de vermelho e azul, associada à nobreza, espiritualidade e mistério.", dificil: "Historicamente, sua obtenção por pigmentos raros e caros a elevou ao status de cor da realeza e da liturgia, simbolizando poder, sabedoria e a transição entre o material e o espiritual." } },
        { palavra: "LARANJA", dicas: { facil: "Cor de uma fruta cítrica.", medio: "Cor secundária que representa entusiasmo, criatividade, calor e vitalidade.", dificil: "A fusão cromática de vermelho e amarelo confere-lhe uma energia vibrante, evocando a alegria da colheita e a comunicação em simbolismos culturais, mas também conotações de extravagância." } },
        { palavra: "PRETO", dicas: { facil: "Cor da noite.", medio: "Ausência de luz, frequentemente associada ao luto, elegância, poder e mistério.", dificil: "A paradoxal ausência de cor, que no entanto absorve todo o espectro luminoso, confere-lhe um simbolismo de finalidade, mistério e sofisticação em diversas tradições filosóficas e estéticas." } },
        { palavra: "BRANCO", dicas: { facil: "Cor da neve.", medio: "Cor que reflete todas as cores, simbolizando pureza, paz, inocência e início.", dificil: "A totalidade da luz visível, que confere pureza e infinitude em seu simbolismo, é contrastada por sua associação com o vazio e a ausência, dependendo do contexto cultural e metafísico." } },
        { palavra: "ROSA", dicas: { facil: "Cor do amor e delicadeza.", medio: "Cor que combina vermelho e branco, associada à feminilidade, carinho e romance.", dificil: "A gradação do vermelho pela adição de branco suaviza sua intensidade, conferindo-lhe associações com a inocência, a juventude e o romantismo, mas também pode simbolizar a fragilidade e o idealismo." } },
        { palavra: "CINZA", dicas: { facil: "Cor entre preto e branco.", medio: "Cor neutra resultante da mistura de preto e branco, associada à seriedade, neutralidade e, por vezes, melancolia.", dificil: "A ausência de vivacidade cromática confere-lhe um simbolismo de sobriedade, imparcialidade e, em certos contextos, a melancolia da indiferença ou da transição, sendo a cor do 'nem-nem'." } },
        { palavra: "MARROM", dicas: { facil: "Cor da terra e do chocolate.", medio: "Cor que remete à terra, madeira e chocolate, associada à estabilidade, natureza e simplicidade.", dificil: "A complexa formação desta cor, que resulta da mistura de várias primárias e secundárias, a associa à solidez da terra, à rusticidade e à conexão com as origens, evocando a durabilidade e a fertilidade." } },
        { palavra: "DOURADO", dicas: { facil: "Cor do ouro.", medio: "Cor que simboliza riqueza, sucesso, prestígio e divindade, remetendo ao metal precioso.", dificil: "A iridescência do ouro, que reflete a luz de forma singular, eleva esta cor a um símbolo universal de valor supremo, divindade e iluminação, presente em rituais e representações artísticas de poder." } },
        { palavra: "PRATA", dicas: { facil: "Cor de um metal brilhante.", medio: "Cor que simboliza modernidade, elegância, tecnologia e a lua, remetendo ao metal.", dificil: "Associada à lua e ao elemento feminino, a prata reflete uma elegância discreta e uma modernidade sofisticada, sendo também um símbolo de pureza e clareza, em contraste com a opulência do ouro." } },
        { palavra: "BEGE", dicas: { facil: "Cor clara, tipo areia.", medio: "Cor neutra e suave, um tom claro de marrom, associada à calma, elegância e simplicidade.", dificil: "A sutileza do bege, que transita entre o branco e o marrom, confere-lhe um simbolismo de serenidade, refinamento e neutralidade, sendo frequentemente empregada em design para evocar uma estética minimalista e acolhedora." } },
        { palavra: "TURQUESA", dicas: { facil: "Cor de uma pedra preciosa, entre azul e verde.", medio: "Tonalidade entre azul e verde, associada à tranquilidade, proteção e exotismo.", dificil: "A gema homônima, valorizada por civilizações antigas, empresta à cor seu simbolismo de proteção, cura e conexão com o divino, unindo a serenidade do azul à vitalidade do verde em uma fusão enigmática." } }
    ],
    frutas: [
        { palavra: "BANANA", dicas: { facil: "Uma fruta amarela que os macacos adoram.", medio: "Fruta alongada e amarela, rica em potássio, cultivada em cachos.", dificil: "Sua domesticação e cultivo, iniciados há milênios no Sudeste Asiático, resultaram em variedades triploides estéreis, dependentes de propagação vegetativa, destacando a complexidade da agricultura global." } },
        { palavra: "MACA", dicas: { facil: "Fruta que dizem manter o médico longe.", medio: "Fruta redonda e crocante, cultivada em diversas variedades e cores.", dificil: "Presente em mitologias e simbolismos religiosos, sua ambivalência representa tanto o conhecimento quanto a tentação, atravessando narrativas desde o Éden até as lendas arturianas." } },
        { palavra: "UVA", dicas: { facil: "Pequenas frutas que crescem em cachos.", medio: "Pequena fruta redonda ou oval, cultivada em videiras, essencial para a produção de vinho.", dificil: "A viticultura, uma prática milenar, reflete a profunda interconexão entre cultura, clima e biotecnologia na produção de uma das bebidas mais complexas e valorizadas da humanidade." } },
        { palavra: "ABACAXI", dicas: { facil: "Fruta tropical com coroa e casca espinhosa.", medio: "Fruta tropical de polpa amarela, doce e ácida, com casca escamosa.", dificil: "Originário da América do Sul, seu transporte para a Europa no século XVI simbolizou luxo e exotismo, marcando um ponto de virada no intercâmbio de espécies vegetais entre continentes." } },
        { palavra: "MORANGO", dicas: { facil: "Pequena fruta vermelha, doce e popular.", medio: "Fruta pequena e vermelha, com sementes externas, conhecida por seu sabor adocicado e aroma.", dificil: "A complexidade de sua hibridização e cultivo moderno, que envolve polinização cruzada para otimizar tamanho e sabor, exemplifica a engenharia agrícola na busca por características desejáveis." } },
        { palavra: "MELANCIA", dicas: { facil: "Fruta grande e verde por fora, vermelha e suculenta por dentro.", medio: "Fruta de grande porte, com casca verde e polpa vermelha suculenta, rica em água.", dificil: "Sua capacidade de armazenar grandes volumes de água em climas áridos a tornou um recurso vital para civilizações antigas no deserto, evidenciando sua importância histórica como fonte de hidratação e alimento." } },
        { palavra: "MAMAO", dicas: { facil: "Fruta laranja, popular no café da manhã.", medio: "Fruta tropical de polpa alaranjada e sementes pretas, conhecida por suas propriedades digestivas.", dificil: "A enzima papaína, extraída desta fruta, possui vastas aplicações biotecnológicas, desde a indústria alimentícia até a farmacêutica, devido às suas propriedades proteolíticas." } },
        { palavra: "COCO", dicas: { facil: "Fruta com água dentro, cresce em coqueiro.", medio: "Fruta tropical com casca fibrosa e dura, contendo água e polpa brancas.", dificil: "A notável dispersão desta fruta por oceanos, transportada por correntes marítimas e capaz de germinar em diversas praias, demonstra sua adaptabilidade ecológica e seu papel na formação de ecossistemas costeiros." } },
        { palavra: "MANGA", dicas: { facil: "Fruta tropical, amarela ou avermelhada.", medio: "Fruta tropical doce e suculenta, com polpa fibrosa, originária da Índia.", dificil: "Considerada 'rei das frutas' em algumas culturas, sua diversidade de variedades e usos culinários reflete sua importância econômica e cultural em regiões tropicais ao redor do mundo." } },
        { palavra: "LARANJA", dicas: { facil: "Fruta cítrica, rica em Vitamina C.", medio: "Fruta cítrica arredondada, com casca laranja e polpa suculenta, conhecida pelo seu suco.", dificil: "A hibridização e a subsequente propagação de variedades cítricas, como a laranja, a partir de espécies ancestrais asiáticas, ilustram a engenharia agrícola milenar na otimização de culturas para consumo humano." } },
        { palavra: "PERA", dicas: { facil: "Fruta em formato de gota.", medio: "Fruta doce e suculenta, com formato característico de 'pera', cultivada em regiões temperadas.", dificil: "Sua história de cultivo remonta à antiguidade, sendo valorizada por sua adaptabilidade a diferentes climas e solos, e sua versatilidade culinária, tanto fresca quanto em conservas e bebidas." } },
        { palavra: "KIWI", dicas: { facil: "Fruta pequena, verde por dentro e peluda por fora.", medio: "Fruta oval pequena com casca marrom e peluda, e polpa verde brilhante com pequenas sementes pretas.", dificil: "Originalmente da China e conhecida como groselha chinesa, sua popularização global sob o nome 'kiwi' (em homenagem ao pássaro símbolo da Nova Zelândia) é um exemplo de marketing agrícola bem-sucedido." } },
        { palavra: "AMEIXA", dicas: { facil: "Fruta roxa pequena e doce.", medio: "Fruta de caroço, geralmente roxa ou vermelha, doce e suculenta, comumente consumida fresca ou seca.", dificil: "A variedade de suas espécies e cultivares, resultado de milênios de seleção e hibridização, demonstra a plasticidade genética desta fruta e sua adaptabilidade a diversas condições climáticas e usos culinários." } },
        { palavra: "CEREJA", dicas: { facil: "Pequena fruta vermelha, em pares.", medio: "Pequena fruta vermelha, doce ou ácida, geralmente consumida fresca, em doces ou bebidas.", dificil: "A brevidade de sua safra, aliada à sua delicadeza e ao valor simbólico em celebrações e na culinária de luxo, a torna uma fruta sazonal altamente cobiçada e um símbolo de efemeridade." } },
        { palavra: "PESSEGO", dicas: { facil: "Fruta com casca aveludada.", medio: "Fruta suculenta com casca aveludada e caroço grande, de sabor doce e aroma marcante.", dificil: "Originário da China, onde é um símbolo de imortalidade, sua jornada de domesticação e dispersão global ilustra a complexidade da fitogeografia e a influência cultural na seleção e cultivo de espécies frutíferas." } },
        { palavra: "GOIABA", dicas: { facil: "Fruta tropical, rosa ou branca por dentro.", medio: "Fruta tropical com polpa rosa ou branca, rica em vitamina C, com um aroma forte e doce.", dificil: "Sua abundância em vitamina C, superior a muitas frutas cítricas, a posiciona como um superalimento em regiões tropicais, com vasta aplicação na culinária e na medicina popular." } },
        { palavra: "CAJU", dicas: { facil: "Fruta que tem uma castanha fora.", medio: "Fruta tropical composta por um pedúnculo carnoso e uma castanha anexada externamente.", dificil: "A singularidade de seu fruto, que apresenta a semente (castanha) externamente ao pseudofruto carnoso, é um caso raro na botânica, e sua complexa biossíntese de compostos bioativos é objeto de estudo." } }
    ],
    comidas: [
        { palavra: "PIZZA", dicas: { facil: "Redonda, com queijo e vários recheios.", medio: "Prato italiano popular, consiste em massa assada com molho de tomate, queijo e coberturas variadas.", dificil: "A evolução de sua simplicidade napolitana para um ícone culinário global reflete a adaptação cultural e a reinvenção constante de um alimento que transcende barreiras gastronômicas e sociais." } },
        { palavra: "LASANHA", dicas: { facil: "Prato italiano com camadas de massa, molho e queijo.", medio: "Prato italiano feito com camadas alternadas de massa, molho de carne (ragu) e queijo, assado no forno.", dificil: "A complexidade textural e de sabores, construída através de camadas distintas de massa, molho e recheios, simboliza a riqueza da culinária italiana e sua capacidade de transformar ingredientes simples em obras-primas." } },
        { palavra: "HAMBURGUER", dicas: { facil: "Carne moída entre dois pães.", medio: "Sanduíche com um bife de carne moída, geralmente servido com pão, queijo, salada e molhos.", dificil: "Sua ascensão de prato popular a ícone da fast-food global reflete as transformações industriais e culturais do século XX, simbolizando a conveniência e a padronização alimentar em escala massiva." } },
        { palavra: "SUSHI", dicas: { facil: "Prato japonês com arroz e peixe cru.", medio: "Prato da culinária japonesa que combina arroz avinagrado com peixe cru ou outros frutos do mar e vegetais.", dificil: "A delicadeza e precisão exigidas em sua preparação, desde o cozimento do arroz até o corte do peixe, elevam-no a uma forma de arte culinária, refletindo a filosofia japonesa de harmonia e equilíbrio." } },
        { palavra: "FEIJOADA", dicas: { facil: "Prato típico brasileiro com feijão preto e carnes.", medio: "Prato icônico da culinária brasileira, feito com feijão preto, diversas carnes de porco e acompanhamentos.", dificil: "Sua gênese, enraizada na culinária de senzala e na fusão de tradições europeias e africanas, torna-o um prato de profunda significância histórica e cultural, representando a miscigenação e a resiliência do povo brasileiro." } },
        { palavra: "BOLO", dicas: { facil: "Doce servido em aniversários.", medio: "Doce de massa assada, geralmente com cobertura e recheio, servido em celebrações.", dificil: "A evolução da arte da confeitaria, que transformou pães doces em elaboradas estruturas artísticas, reflete avanços na química dos alimentos e na busca humana por celebração e indulgência sensorial." } },
        { palavra: "TACO", dicas: { facil: "Comida mexicana com tortilha e recheio.", medio: "Prato mexicano composto por uma tortilha de milho ou trigo dobrada, recheada com carne, vegetais e molhos.", dificil: "A versatilidade cultural e culinária desta iguaria mexicana, adaptada e reinterpretada globalmente, simboliza a riqueza da gastronomia latino-americana e sua capacidade de transcender fronteiras." } },
        { palavra: "PAELLA", dicas: { facil: "Prato espanhol com arroz e frutos do mar.", medio: "Prato tradicional espanhol à base de arroz, açafrão e diversos ingredientes como frutos do mar, frango e legumes.", dificil: "Originária da região de Valência, a complexidade de seu preparo, que busca o equilíbrio perfeito entre o arroz, o caldo e os múltiplos ingredientes, a eleva a um ícone da culinária mediterrânea." } },
        { palavra: "MACARRAO", dicas: { facil: "Massa italiana comprida.", medio: "Tipo de massa alimentícia, geralmente longa e fina, muito comum na culinária italiana.", dificil: "Sua origem, disputada entre China e Itália, reflete a complexa história das trocas culturais e gastronômicas ao longo da Rota da Seda, e sua versatilidade o tornou um alimento básico global." } },
        { palavra: "ARROZ", dicas: { facil: "Grão branco, base de muitas refeições.", medio: "Cereal amplamente cultivado e consumido como alimento básico em diversas culturas ao redor do mundo.", dificil: "A domesticação do arroz, ocorrida há milênios na Ásia, e sua subsequente difusão global, representam um dos pilares da segurança alimentar da humanidade, moldando paisagens agrícolas e dietas." } },
        { palavra: "PUDIM", dicas: { facil: "Doce de leite, com calda.", medio: "Sobremesa cremosa à base de leite, ovos e açúcar, geralmente com calda de caramelo.", dificil: "A simplicidade de seus ingredientes contrasta com a delicadeza de sua textura e o equilíbrio de seu sabor, um exemplo de como a culinária pode elevar elementos básicos a uma experiência gastronômica refinada." } },
        { palavra: "SOPA", dicas: { facil: "Caldo quente, bom para o frio.", medio: "Alimento líquido, geralmente quente, feito cozinhando ingredientes em água ou caldo.", dificil: "A universalidade da sopa como alimento reconfortante e nutritivo, presente em virtualmente todas as culturas, reflete sua adaptabilidade a diversos ingredientes e sua função como base da alimentação humana." } },
        { palavra: "SALADA", dicas: { facil: "Mix de folhas e vegetais.", medio: "Prato composto principalmente por vegetais crus, podendo incluir outros ingredientes e molhos.", dificil: "A evolução da salada, de simples acompanhamento a prato principal sofisticado, ilustra a crescente valorização da alimentação fresca e saudável, e a diversidade de ingredientes botânicos disponíveis." } },
        { palavra: "PICANHA", dicas: { facil: "Corte de carne muito apreciado.", medio: "Corte nobre de carne bovina, muito popular no Brasil, conhecida por sua capa de gordura.", dificil: "A valorização de cortes específicos de carne, como a picanha no Brasil, reflete complexas interações culturais, econômicas e zootécnicas, moldando a identidade gastronômica de uma nação." } },
        { palavra: "COXINHA", dicas: { facil: "Salgadinho brasileiro de frango.", medio: "Salgadinho popular brasileiro em formato de gota, recheado com frango desfiado.", dificil: "A história da coxinha, que remonta à corte imperial brasileira, ilustra a fusão de influências culinárias europeias com ingredientes e técnicas locais, criando um ícone da gastronomia de rua." } },
        { palavra: "BRIGADEIRO", dicas: { facil: "Doce de chocolate, bolinha.", medio: "Doce típico brasileiro feito de leite condensado, chocolate em pó, manteiga e granulado.", dificil: "A simplicidade e o apelo universal do brigadeiro, que transcendeu a culinária caseira para se tornar um símbolo de festas e celebrações brasileiras, demonstra o poder da gastronomia afetiva e da memória gustativa." } },
        { palavra: "ACAI", dicas: { facil: "Fruta roxa da Amazônia.", medio: "Fruta amazônica roxa, consumida em tigelas com acompanhamentos, rica em antioxidantes.", dificil: "A crescente popularidade do açaí globalmente, impulsionada por seu status de 'superalimento' e seu papel vital na dieta das populações amazônicas, exemplifica a valorização de alimentos nativos e a complexidade de suas cadeias de produção." } }
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
    document.querySelector('meta[name="theme-color"]').setAttribute('content', corSalva); // Garante que a meta tag também seja atualizada
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
        } while (palavrasDaCategoria.length > 1 && novaPalavraObj === palavraSecretaObj); // Evita loop infinito se só houver 1 palavra

        palavraSecretaObj = novaPalavraObj;
        palavraSecreta = palavraSecretaObj.palavra;
        dicaAtual = palavraSecretaObj.dicas[dificuldadeDica];
    }

    // Reseta visual do boneco e teclado
    mensagemJogo.textContent = `Adivinhe a palavra! Máximo de ${MAX_ERROS} erros.`;
    
    // Mostra todas as partes do boneco, a cabeça é a primeira a "sumir" (aparecer)
    document.getElementById('cabeca-container').style.opacity = '0'; 
    partesBonecoCorpo.forEach(id => {
        const parte = document.getElementById(id);
        if (parte) parte.style.opacity = '0'; // Garante que estejam escondidas no início do turno
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
        mostrarParteBoneco(); // Mostra uma parte do boneco
        verificarFimDeJogo(true); // Verifica se o boneco foi completo e passa a vez
    }
    pontuacaoJogadorAtualSpan.textContent = jogadores[jogadorAtualIndex].pontuacao; // Atualiza pontuação em tempo real
}

// Modificada para MOSTRAR as partes (opacity de 0 para 1)
function mostrarParteBoneco() {
    if (erros > 0 && erros <= MAX_ERROS) {
        const idDaParteAMostrar = partesBoneco[erros - 1]; 
        const parteElement = document.getElementById(idDaParteAMostrar);
        if (parteElement) {
            parteElement.style.opacity = '1'; 
        }
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
        
        // Reseta os erros *visuais* do boneco para o novo jogador, mas o estado da palavra e letras adivinhadas persistem
        erros = 0; 
        document.getElementById('cabeca-container').style.opacity = '0';
        partesBonecoCorpo.forEach(id => {
            const parte = document.getElementById(id);
            if (parte) parte.style.opacity = '0'; // Esconde todas as partes do boneco
        });

        // Renderiza o teclado novamente com as letras já adivinhadas desabilitadas
        renderizarTeclado(); 
        
        // Atualiza as informações do jogador na tela
        nomeJogadorAtualSpan.textContent = jogadores[jogadorAtualIndex].nome;
        pontuacaoJogadorAtualSpan.textContent = jogadores[jogadorAtualIndex].pontuacao;
        
        mensagemJogo.textContent = `É a vez de ${jogadores[jogadorAtualIndex].nome}! Adivinhe a palavra!`;

        jogoEmAndamento = true; // Permite que o novo jogador comece a jogar
    }
}


function processarContinuarOuFinalizarJogo() {
    // Para simplificar, "Continuar Jogando" significa "Começar um novo turno com nova palavra para o próximo jogador"
    jogadorAtualIndex = (jogadorAtualIndex + 1) % numJogadores; // Avança para o próximo jogador que vai começar a próxima palavra
    
    // Para single player, "Continuar" significa um novo jogo
    if (numJogadores === 1) { 
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
    botaoVoltarAoMenuJogo.addEventListener('click', () => {
        // Se o jogo estava em andamento, perguntar se quer finalizar ou continuar
        if (jogoEmAndamento && numJogadores > 1) {
            finalizarTurno(false); // Considera como se o turno atual tivesse sido perdido
        } else {
            mostrarSecao('secaoMenu'); // Volta direto para o menu se não houver jogo multiplayer em andamento
        }
    }); 
    botaoVoltarDoResultado.addEventListener('click', () => mostrarSecao('secaoMenu')); // Dos resultados para o menu
    botaoVoltarDoDashboard.addEventListener('click', () => mostrarSecao('secaoMenu')); // Do dashboard para o menu
    
    // Eventos da tela "Próximo Turno?"
    botaoContinuarJogando.addEventListener('click', processarContinuarOuFinalizarJogo);
    botaoFinalizarJogo.addEventListener('click', exibirDashboardEstatisticas); // Finaliza e mostra resultados
    
    // Inicializa os inputs de nome se o valor padrão de numJogadores for > 1
    inputNumJogadores.dispatchEvent(new Event('change'));
});
