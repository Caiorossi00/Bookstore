const itens = [
  {
    nome: "Maus",
    foto: "https://m.media-amazon.com/images/I/51jq-ZU9yHL._SY445_SX342_.jpg",
    preco: "39",
    autor: "Art Spigelman",
    disponivel: "Sim",
    categoria: "Hq",
  },
  {
    nome: "Admirável Mundo Novo",
    foto: "https://m.media-amazon.com/images/I/41IKTYiymKL._SY445_SX342_.jpg",
    preco: "29",
    autor: "Aldous Huxley",
    disponivel: "Sim",
    categoria: "Ficção",
  },
  {
    nome: "Contos - Clarice Lispector",
    foto: "https://m.media-amazon.com/images/I/61I4foVI0zL._SY445_SX342_.jpg",
    preco: "69",
    autor: "Clarice Lispector",
    disponivel: "Sim",
    categoria: "Ficção",
  },
  {
    nome: "Watchmen",
    foto: "https://m.media-amazon.com/images/I/51a4RsiID0L._SY445_SX342_.jpg",
    preco: "89",
    autor: "Alan Moore",
    disponivel: "Sim",
    categoria: "Hq",
  },

  {
    nome: "Calafrios",
    foto: "https://m.media-amazon.com/images/I/91jjaU0HYbL._SY466_.jpg",
    preco: "39",
    autor: "Junji Ito",
    disponivel: "Sim",
    categoria: "Hq",
  },
  {
    nome: "Fragmentos do Horror",
    foto: "https://m.media-amazon.com/images/I/517+BU8AcvL._SY445_SX342_.jpg",
    preco: "28",
    autor: "Junji Ito",
    disponivel: "Sim",
    categoria: "Ficção",
  },
  {
    nome: "O Escultor",
    foto: "https://m.media-amazon.com/images/I/51eScvkWffL._SY445_SX342_.jpg",
    preco: "49",
    autor: "Scott McCloud",
    disponivel: "Sim",
    categoria: "Hq",
  },
  {
    nome: "Black Hole",
    foto: "https://m.media-amazon.com/images/I/4143nh4iZsL._SY445_SX342_.jpg",
    preco: "49",
    autor: "Charles Burns",
    disponivel: "Sim",
    categoria: "Hq",
  },
  {
    nome: "O Estrangeiro",
    foto: "https://m.media-amazon.com/images/I/91Sb5HdDL3L._SY466_.jpg",
    preco: "19",
    autor: "Albert Camus",
    disponivel: "Sim",
    categoria: "Ficção",
  },
  {
    nome: "O Sol é para todos",
    foto: "https://m.media-amazon.com/images/I/51wdOrz6uNL._SY445_SX342_.jpg",
    preco: "26",
    autor: "Harper Lee",
    disponivel: "Sim",
    categoria: "Ficção",
  },
  {
    nome: "A metamorfose",
    foto: "https://m.media-amazon.com/images/I/516qKNlle4L._SY445_SX342_.jpg",
    preco: "22",
    autor: "Franz Kafka",
    disponivel: "Sim",
    categoria: "Ficção",
  },
  {
    nome: "Memórias do Subsolo",
    foto: "https://m.media-amazon.com/images/I/81B8n0OCzTL._SY466_.jpg",
    preco: "28",
    autor: "Fiódor Dostoiévski",
    disponivel: "Sim",
    categoria: "Ficção",
  },
  {
    nome: "Essencial Mundo de Oz",
    foto: "https://m.media-amazon.com/images/I/818Ikc8kqnS._SY466_.jpg",
    preco: "23",
    autor: "L. Frank Baum",
    disponivel: "Sim",
    categoria: "Ficção",
  },
];

let currentIndex = 0;
let totalCarrinho = 0;

function displayItens() {
  let vitrine = document.querySelector(".vitrine");

  vitrine.innerHTML = "";

  for (let i = currentIndex; i < currentIndex + 4 && i < itens.length; i++) {
    const item = itens[i];

    const divProduto = document.createElement("div");
    divProduto.classList.add("produto");

    if (item.disponivel === "Sim") {
      divProduto.classList.add("disponivel");
    } else {
      divProduto.classList.add("indisponivel");
    }

    const imgProduto = document.createElement("img");
    imgProduto.src = item.foto;
    imgProduto.alt = item.nome;
    imgProduto.classList.add("foto-produto");
    divProduto.appendChild(imgProduto);

    divProduto.innerHTML += `
          <h3>${item.nome}</h3>
          <p>${item.autor}</p>
          <p>R$${item.preco},00</p>
        `;

    const addToCartButton = document.createElement("button");
    addToCartButton.textContent = "Adicionar ao Carrinho";
    addToCartButton.addEventListener("click", () => addToCart(item));
    addToCartButton.classList.add("addBtn");

    divProduto.appendChild(addToCartButton);

    vitrine.appendChild(divProduto);
  }
}

function nextSlide() {
  if (currentIndex + 4 < itens.length) {
    currentIndex += 4;
    displayItens();
  }
}

function prevSlide() {
  if (currentIndex - 4 >= 0) {
    currentIndex -= 4;
    displayItens();
  }
}

function addToCart(item) {
  totalCarrinho += parseFloat(item.preco);
  updateCartTotal();
  console.log(totalCarrinho);
}

function updateCartTotal() {
  document.getElementById("totalCarrinho").textContent =
    totalCarrinho.toFixed(2);
}

window.onload = displayItens;
