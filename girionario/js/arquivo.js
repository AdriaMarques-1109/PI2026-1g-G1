// Banco de dados de gírias regionais

document.addEventListener("DOMContentLoaded", () => {

  const bancoDeDadosCards = [
    { titulo: "De bubuia", classe: "norte", texto: "Ficar sem fazer nada, descansando.", detalhes: "Vem do verbo bubuiar, de origem tupi, que significa 'boiar' ou 'flutuar'." },
    { titulo: "Borogodó", classe: "norte", texto: "Charme, encanto especial.", detalhes: "Palavra de origem popular, difundida principalmente na Amazônia e em outras regiões do Norte para descrever alguém muito atraente." },
    { titulo: "Caparanã", classe: "norte", texto: "Mosquito.", detalhes: "Expressão regional bastante usada em estados amazônicos devido à grande presença desses insetos." },
    { titulo: "Jerimum", classe: "norte", texto: "Abóbora.", detalhes: "Herdada da influência das línguas indígenas, especialmente do tupi." },
    { titulo: "Assunta bem", classe: "norte", texto: "Preste atenção.", detalhes: "Expressão popular criada a partir do verbo 'assuntar', muito comum no Norte." },
    { titulo: "Oxente", classe: "nordeste", texto: "Expressão de surpresa ou espanto.", detalhes: "Surgiu da fala popular nordestina e tornou-se um dos maiores símbolos da região." },
    { titulo: "Aperreado", classe: "nordeste", texto: "Muito bom, excelente ou bravo, dependendo do contexto.", detalhes: "Palavra tradicional do sertão nordestino, ligada ao modo de falar regional." },
    { titulo: "Cabra da Peste", classe: "nordeste", texto: "Pessoa corajosa ou muito resistente.", detalhes: "Originou-se no sertão, valorizando a força dos sertanejos diante das dificuldades." },
    { titulo: "Mangar", classe: "nordeste", texto: "Zombar, tirar sarro.", detalhes: "Verbo popular presente em diversos estados nordestinos há muitas gerações." },
    { titulo: "Camelo", classe: "centro-oeste", texto: "Bicicleta.", detalhes: "Tornou-se popular no Centro-Oeste e foi difundida nacionalmente por músicas e pela cultura local." },
    { titulo: "Piseiro", classe: "centro-oeste", texto: "Festa animada ou confusão.", detalhes: "Associada às festas populares e ao modo descontraído de falar da região." },
    { titulo: "Bagual", classe: "sul", texto: "Uma pessoa muito forte ou valente.", detalhes: "Influência da cultura pecuária presente também em áreas do Centro-Oeste." },
    { titulo: "Trem", classe: "centro-oeste", texto: "Qualquer objeto ou situação.", detalhes: "Embora seja muito associado a Minas Gerais, também é bastante usado em Goiás e no Distrito Federal." },
    { titulo: "Mói de gente", classe: "centro-oeste", texto: "Muitas pessoas.", detalhes: "Expressão popular usada para indicar grande quantidade de pessoas." },
    { titulo: "Mano", classe: "sudeste", texto: "Amigo, colega.", detalhes: "Popularizada em São Paulo entre jovens e difundida para todo o país." },
    { titulo: "Mó", classe: "sudeste", texto: "Muito.", detalhes: "Muito utilizada em São Paulo e no Rio de Janeiro em expressões como 'mó legal'." },
    { titulo: "Sussa", classe: "sudeste", texto: "Tranquilo, sossegado.", detalhes: "Abreviação de 'sossegado', bastante comum na fala paulista." },
    { titulo: "Bolado", classe: "sudeste", texto: "Chateado ou irritado.", detalhes: "Ganhou força principalmente no Rio de Janeiro entre os jovens." },
    { titulo: "Rolê", classe: "sudeste", texto: "Passeio, saída.", detalhes: "Surgiu em São Paulo e tornou-se uma das gírias mais populares do Brasil." },
    { titulo: "Bah", classe: "sul", texto: "Expressão de surpresa ou admiração.", detalhes: "Marca registrada da fala gaúcha, com influência das imigrações do Sul." },
    { titulo: "Guri/Guria", classe: "sul", texto: "Menino/Menina.", detalhes: "Palavra de origem indígena (quéchua), muito difundida na região Sul." },
    { titulo: "Piá", classe: "sul", texto: "Menino.", detalhes: "Termo tradicional do Paraná e de Santa Catarina, também de origem indígena." },
    { titulo: "Capaz", classe: "sul", texto: "Expressão de surpresa, negação ou espanto.", detalhes: "Muito usada no Rio Grande do Sul como marca do dialeto regional." },
    { titulo: "Tri", classe: "sul", texto: "Muito; extremamente.", detalhes: "Usada para intensificar características, como em 'tri legal'. Tornou-se uma das gírias mais conhecidas do Sul." }
  ];

  const totalParaExibir = 8;
  let filtroAtual = "todos";
  let termoBusca = "";

  // Sorteia os 6 cards para a exibição inicial "Todos"
  const cardsSorteadosIniciais = embaralhar([...bancoDeDadosCards]).slice(0, totalParaExibir);

  function embaralhar(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function renderizarCards() {
    const container = document.getElementById("cards-container");
    if (!container) return;

    container.innerHTML = "";

    // Define qual base de cards utilizar
    let listaParaFiltrar;
    if (filtroAtual === "todos" && termoBusca === "") {
      listaParaFiltrar = cardsSorteadosIniciais;
    } else {
      listaParaFiltrar = bancoDeDadosCards;
    }

    // Aplica os filtros de categoria e de pesquisa por texto
    const cardsFiltrados = listaParaFiltrar.filter(card => {
      const correspondeFiltro = filtroAtual === "todos" || card.classe === filtroAtual;
      const termo = termoBusca.toLowerCase();
      const correspondeBusca = card.titulo.toLowerCase().includes(termo) ||
                               card.texto.toLowerCase().includes(termo) ||
                               card.detalhes.toLowerCase().includes(termo);

      return correspondeFiltro && correspondeBusca;
    });

    cardsFiltrados.forEach(card => {
      const div = document.createElement("div");
      div.className = "card-item";
      div.setAttribute("data-classe", card.classe);

      div.innerHTML = `
        <span class="tag ${card.classe}">${card.classe.replace("-", " ")}</span>
        <h3>${card.titulo}</h3>
        <p class="resumo">${card.texto}</p>
        <div class="mais-info">${card.detalhes}</div>
      `;

      div.addEventListener("click", () => {
        document.querySelectorAll(".card-item.expandido").forEach(aberto => {
          if (aberto !== div) aberto.classList.remove("expandido");
        });
        div.classList.toggle("expandido");
      });

      container.appendChild(div);
    });
  }

  function configurarFiltros() {
    const botoes = document.querySelectorAll(".btn-filtro");

    botoes.forEach(botao => {
      botao.addEventListener("click", () => {
        const botaoAtivoAtual = document.querySelector(".btn-filtro.ativo");
        if (botaoAtivoAtual) {
          botaoAtivoAtual.classList.remove("ativo");
        }

        botao.classList.add("ativo");
        filtroAtual = botao.getAttribute("data-classe");
        renderizarCards();
      });
    });
  }

  function configurarBusca() {
    const campoBusca = document.getElementById("campo-busca");
    if (!campoBusca) return;

    campoBusca.addEventListener("input", (e) => {
      termoBusca = e.target.value;
      renderizarCards();
    });
  }

  renderizarCards();
  configurarFiltros();
  configurarBusca();

});