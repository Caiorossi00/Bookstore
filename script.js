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
    nome: "Tomie - Deluxe",
    foto: "https://m.media-amazon.com/images/I/51TaqenuZrL._SY445_SX342_.jpg",
    preco: "129",
    autor: "Junji Ito",
    disponivel: "Sim",
    categoria: "Hq",
  },
  {
    nome: "Uzumaki - Deluxe",
    foto: "https://m.media-amazon.com/images/I/81Zi7WmQutL._SY466_.jpg",
    preco: "379",
    autor: "Junji Ito",
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
    nome: "Edgar Allan Poe - Medo Clássico",
    foto: "https://m.media-amazon.com/images/I/51Wrq2i7EOL._SY445_SX342_.jpg",
    preco: "PRECO",
    autor: "Edgar Allan Poe",
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
    nome: "Contos Reunidos - Dostoievski",
    foto: "https://m.media-amazon.com/images/I/91sPoUG8WaL._SY466_.jpg",
    preco: "33",
    autor: "Fiódor Dostoiévski",
    disponivel: "Sim",
    categoria: "Ficção",
  },
  {
    nome: "O Idiota",
    foto: "https://m.media-amazon.com/images/I/81yztS6pgeL._SY466_.jpg",
    preco: "62",
    autor: "Fiódor Dostoiévski",
    disponivel: "Sim",
    categoria: "Ficção",
  },
  {
    nome: "Crime e Castigo",
    foto: "https://m.media-amazon.com/images/I/916WkSH4cGL._SY466_.jpg",
    preco: "68",
    autor: "Fiódor Dostoiévski",
    disponivel: "Sim",
    categoria: "Ficção",
  },
  {
    nome: "A revolução dos bichos",
    foto: "https://m.media-amazon.com/images/I/61owA5ey3iL._SY445_SX342_.jpg",
    preco: "13",
    autor: "George Orwell",
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

let totalCarrinho = 0;

function displayItensInSwiper() {
  let swiperWrapper = document.querySelector(".swiper-wrapper");

  for (let i = 0; i < itens.length; i++) {
    const item = itens[i];

    const swiperSlide = document.createElement("div");
    swiperSlide.classList.add("swiper-slide");

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

    const titleElement = document.createElement("h3");
    titleElement.textContent = item.nome;
    divProduto.appendChild(titleElement);

    const authorElement = document.createElement("p");
    authorElement.textContent = item.autor;
    divProduto.appendChild(authorElement);

    const priceElement = document.createElement("p");
    priceElement.textContent = `R$${item.preco},00`;
    divProduto.appendChild(priceElement);

    const addToCartButton = document.createElement("button");
    addToCartButton.textContent = "Adicionar ao Carrinho";
    addToCartButton.addEventListener("click", () => addToCart(item));
    addToCartButton.classList.add("addBtn");
    divProduto.appendChild(addToCartButton);

    swiperSlide.appendChild(divProduto);
    swiperWrapper.appendChild(swiperSlide);
  }
}

const swiper = new Swiper(".swiper", {
  direction: "horizontal",
  slidesPerView: 4,
  slidesPerGroup: 4,
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

function addToCart(item) {
  totalCarrinho += parseFloat(item.preco);
  updateCartTotal();
  console.log(totalCarrinho);
}

function updateCartTotal() {
  document.getElementById("totalCarrinho").textContent =
    totalCarrinho.toFixed(2);
}

window.onload = () => {
  displayItensInSwiper();
};
