<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Cards Aleatórios</title>
  
  <style>
    /* Estilo do layout (CSS) */
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f4f9;
      padding: 20px;
    }

    /* Cria uma grade onde os cards ficam lado a lado */
    .cards-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }

    /* Estilo visual de cada card */
    .card {
      background: white;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 4px 6px rgba(0,0,0,0.1);
      transition: transform 0.2s;
    }

    .card:hover {
      transform: translateY(-5px);
    }

    .card h3 {
      margin-top: 0;
      color: #333;
    }

    .card p {
      color: #666;
    }
  </style>
</head>
<body>

  <h1>Meus Cards Sorteados</h1>
  
  <!-- O JavaScript vai injetar os cards sorteados aqui dentro -->
  <div id="container-cards" class="cards-grid"></div>

  <script>
    // Banco de dados com uma lista maior de cards
    const bancoDeCards = [
      { titulo: "Card 1", texto: "Conteúdo do card número 1." },
      { titulo: "Card 2", texto: "Conteúdo do card número 2." },
      { titulo: "Card 3", texto: "Conteúdo do card número 3." },
      { titulo: "Card 4", texto: "Conteúdo do card número 4." },
      { titulo: "Card 5", texto: "Conteúdo do card número 5." },
      { titulo: "Card 6", texto: "Conteúdo do card número 6." },
      { titulo: "Card 7", texto: "Conteúdo do card número 7." },
      { titulo: "Card 8", texto: "Conteúdo do card número 8." }
    ];

    // Função para sortear 'N' itens únicos da lista maior
    function sortearItens(listaOriginal, quantidade) {
      const copiaLista = [...listaOriginal];
      const itensSorteados = [];

      for (let i = 0; i < quantidade; i++) {
        if (copiaLista.length === 0) break;
        
        const indiceAleatorio = Math.floor(Math.random() * copiaLista.length);
        // Remove o elemento sorteado da cópia para não repetir
        const [itemRemovido] = copiaLista.splice(indiceAleatorio, 1);
        itensSorteados.push(itemRemovido);
      }

      return itensSorteados;
    }

    // Função para renderizar os cards sorteados no HTML
    function renderizarCards() {
      const container = document.getElementById("container-cards");
      container.innerHTML = ""; 

      // Altere o número '3' abaixo para exibir mais ou menos cards na tela
      const meusCardsSorteados = sortearItens(bancoDeCards, 3);

      meusCardsSorteados.forEach(item => {
        const cardDiv = document.createElement("div");
        cardDiv.className = "card";
        cardDiv.innerHTML = `
          <h3>${item.titulo}</h3>
          <p>${item.texto}</p>
        `;
        container.appendChild(cardDiv);
      });
    }

    // Executa automaticamente ao carregar/atualizar a página
    window.onload = renderizarCards;
  </script>

</body>
</html>
