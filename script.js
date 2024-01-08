const itens = [
  {
    nome: "Watchmen",
    foto: "https://m.media-amazon.com/images/I/51a4RsiID0L._SY445_SX342_.jpg",
    preco: "89",
    autor: "Alan Moore",
    disponivel: "Sim",
    categoria: "Hq",
  },
  {
    nome: "Superman: Terra Um",
    foto: "https://m.media-amazon.com/images/I/51RZTOaI9aL._SY445_SX342_.jpg",
    preco: "15",
    autor: "J. Michael Straczynski",
    disponivel: "Sim",
    categoria: "Hq",
  },
  {
    nome: "Superman: Entre a foice e o martelo",
    foto: "https://m.media-amazon.com/images/I/51ycfdlFhWL._SY445_SX342_.jpg",
    preco: "35",
    autor: "Mark Millar",
    disponivel: "Sim",
    categoria: "Hq",
  },
  {
    nome: "Maus",
    foto: "https://m.media-amazon.com/images/I/51jq-ZU9yHL._SY445_SX342_.jpg",
    preco: "39",
    autor: "Art Spigelman",
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
    nome: "Admirável Mundo Novo",
    foto: "https://m.media-amazon.com/images/I/41IKTYiymKL._SY445_SX342_.jpg",
    preco: "29",
    autor: "Aldous Huxley",
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
    nome: "Contos - Clarice Lispector",
    foto: "https://m.media-amazon.com/images/I/61I4foVI0zL._SY445_SX342_.jpg",
    preco: "69",
    autor: "Clarice Lispector",
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
    nome: "O Exorcista",
    foto: "https://m.media-amazon.com/images/I/514BugWI0cL._SY445_SX342_.jpg",
    preco: "18",
    autor: "William Peter Blatty",
    disponivel: "Sim",
    categoria: "Terror",
  },
  {
    nome: "Hellraiser - Renascido do Inferno",
    foto: "https://m.media-amazon.com/images/I/51gRYU9z8CL._SY445_SX342_.jpg",
    preco: "48",
    autor: "Clive Barker",
    disponivel: "Sim",
    categoria: "Terror",
  },
  {
    nome: "Fahrenheit 451",
    foto: "https://m.media-amazon.com/images/I/41PVVpQf-sL._SY445_SX342_.jpg",
    preco: "35",
    autor: "Ray Bradbury",
    disponivel: "Sim",
    categoria: "Ficção Científica",
  },
  {
    nome: "O Código da Vinci",
    foto: "https://m.media-amazon.com/images/I/41aVasi7pML._SY445_SX342_.jpg",
    preco: "25",
    autor: "Dan Brown",
    disponivel: "Sim",
    categoria: "Suspense",
  },
  {
    nome: "A Arte da Guerra",
    foto: "https://m.media-amazon.com/images/I/31QzwYLvuCL._SY445_SX342_.jpg",
    preco: "18",
    autor: "Sun Tzu",
    disponivel: "Sim",
    categoria: "Filosofia Militar",
  },
  {
    nome: "O Mundo Numa Casca de Nóz",
    foto: "https://m.media-amazon.com/images/I/61AaXcdHXKS._SY342_.jpg",
    preco: "25",
    autor: "Stephen Hawking",
    disponivel: "Sim",
    categoria: "Ciência",
  },
  {
    nome: "1Q84",
    foto: "https://m.media-amazon.com/images/I/31Y33PweWWS._SY445_SX342_.jpg",
    preco: "22",
    autor: "Haruki Murakami",
    disponivel: "Sim",
    categoria: "Ficção",
  },

  {
    nome: "A Elite da Tropa",
    foto: "https://m.media-amazon.com/images/I/918AS00M7fL._SY342_.jpg",
    preco: "15",
    autor: "Luiz Eduardo Soares",
    disponivel: "Sim",
    categoria: "Não Ficção",
  },
  {
    nome: "A Elite da Tropa 2",
    foto: "https://m.media-amazon.com/images/I/61fSOGQXUjL._SY342_.jpg",
    preco: "15",
    autor: "Luiz Eduardo Soares",
    disponivel: "Sim",
    categoria: "Não Ficção",
  },
  {
    nome: "Meditações",
    foto: "https://m.media-amazon.com/images/I/41bQU67zLnL._SY445_SX342_.jpg",
    preco: "19",
    autor: "Marco Aurélio",
    disponivel: "Sim",
    categoria: "Filosofia",
  },
  {
    nome: "Sobre a breviedade da vida",
    foto: "https://m.media-amazon.com/images/I/81TNzkUcNzL._SY342_.jpg",
    preco: "19",
    autor: "Sêneca",
    disponivel: "Sim",
    categoria: "Filosofia",
  },
  {
    nome: "Manual de Epicteto",
    foto: "https://m.media-amazon.com/images/I/61zkj3SiV4L._SY342_.jpg",
    preco: "19",
    autor: "Epicteto",
    disponivel: "Sim",
    categoria: "Filosofia",
  },
  {
    nome: "A Relíquia",
    foto: "https://m.media-amazon.com/images/I/31OAMhFlVjL._SY445_SX342_.jpg",
    preco: "5",
    autor: "Eça de Queirós",
    disponivel: "Sim",
    categoria: "Literatura Portuguesa",
  },
  {
    nome: "O Homem que Passeia",
    foto: "https://m.media-amazon.com/images/I/51MnWr4yTFL._SY445_SX342_.jpg",
    preco: "33",
    autor: "Jiro Taniguchi",
    disponivel: "Sim",
    categoria: "Hq",
  },
  {
    nome: "Os Últimos Dias de Krypton",
    foto: "https://m.media-amazon.com/images/I/41oklwjIoUL._SY445_SX342_.jpg",
    preco: "13",
    autor: "Kevin J. Anderson",
    disponivel: "Sim",
    categoria: "Ficção Científica",
  },
  {
    nome: "The Merchant of Venice",
    foto: "https://m.media-amazon.com/images/I/51ZiTFcbeCL._SY445_SX342_.jpg",
    preco: "14",
    autor: "William Shakespeare",
    disponivel: "Sim",
    categoria: "Drama",
  },
  {
    nome: "Copa Loca",
    foto: "https://m.media-amazon.com/images/I/517qkRuGLXL._SY445_SX342_.jpg",
    preco: "37",
    autor: "Marcus DeSieno",
    disponivel: "Sim",
    categoria: "Fotografia",
  },
  {
    nome: "O Homem que Calculava",
    foto: "https://m.media-amazon.com/images/I/516MEUWZ+tL._SY445_SX342_.jpg",
    preco: "14",
    autor: "Malba Tahan",
    disponivel: "Sim",
    categoria: "Matemática",
  },
  {
    nome: "Textos Cruéis Demais para Serem Lidos Rapidamente",
    foto: "https://m.media-amazon.com/images/I/41WSVHqqbkL._SY445_SX342_.jpg",
    preco: "25",
    autor: "Igor Pires",
    disponivel: "Sim",
    categoria: "Poesia",
  },
  {
    nome: "Triste Fim de Policarpo Quaresma",
    foto: "https://m.media-amazon.com/images/I/31zt1PqKmXS._SY445_SX342_.jpg",
    preco: "10",
    autor: "Lima Barreto",
    disponivel: "Sim",
    categoria: "Romance",
  },
  {
    nome: "O Príncipe",
    foto: "https://m.media-amazon.com/images/I/31-pCE2cGXL._SY445_SX342_.jpg",
    preco: "8",
    autor: "Maquiavel",
    disponivel: "Sim",
    categoria: "Política",
  },
  {
    nome: "A Desobediência Civil",
    foto: "https://m.media-amazon.com/images/I/41myzx6BxJL._SY445_SX342_.jpg",
    preco: "14",
    autor: "Henry David Thoreau",
    disponivel: "Sim",
    categoria: "Política",
  },
  {
    nome: "Dom Casmurro",
    foto: "https://m.media-amazon.com/images/I/51RYiCR51-L._SY445_SX342_.jpg",
    preco: "8",
    autor: "Machado de Assis",
    disponivel: "Sim",
    categoria: "Romance",
  },
  {
    nome: "Assassinatos na Rua Morgue",
    foto: "https://m.media-amazon.com/images/I/51vIDSeXJ7L._SY445_SX342_.jpg",
    preco: "12",
    autor: "Edgar Allan Poe",
    disponivel: "Sim",
    categoria: "Mistério",
  },
  {
    nome: "Discurso sobre a Servidão Voluntária",
    foto: "https://m.media-amazon.com/images/I/51fqIkgV1KL._SX342_SY445_.jpg",
    preco: "14",
    autor: "Étienne de La Boétie",
    disponivel: "Sim",
    categoria: "Filosofia",
  },
  {
    nome: "Contos Gauchescos e Lendas do Sul",
    foto: "https://m.media-amazon.com/images/I/51K4Ab096+L._SY445_SX342_.jpg",
    preco: "7",
    autor: "Simões Lopes Neto",
    disponivel: "Sim",
    categoria: "Contos",
  },
  {
    nome: "O Banquete",
    foto: "https://m.media-amazon.com/images/I/41pQZn-QpoL._SY445_SX342_.jpg",
    preco: "11",
    autor: "Platão",
    disponivel: "Sim",
    categoria: "Filosofia",
  },
  {
    nome: "50 Ideias de Histórias que Você Precisa Conhecer",
    foto: "https://m.media-amazon.com/images/I/61IN6o0skjL._SY342_.jpg",
    preco: "17",
    autor: "Ian Crofton",
    disponivel: "Sim",
    categoria: "Não Ficção",
  },
  {
    nome: "50 Ideias de Economia que Você Precisa Conhecer",
    foto: "https://m.media-amazon.com/images/I/516oa5gRYxL._SY342_.jpg",
    preco: "17",
    autor: "Edmund Conway",
    disponivel: "Sim",
    categoria: "Não Ficção",
  },
  {
    nome: "50 Ideias de Filosofia que Você Precisa Conhecer",
    foto: "https://m.media-amazon.com/images/I/41gXqzYGZjL._SX342_SY445_.jpg",
    preco: "17",
    autor: "Ben Dupre",
    disponivel: "Sim",
    categoria: "Não Ficção",
  },
  {
    nome: "O Homem que Caiu na Terra",
    foto: "https://m.media-amazon.com/images/I/51eYXS6OKaL._SY342_.jpg",
    preco: "44",
    autor: "Walter Tevis",
    disponivel: "Sim",
    categoria: "Ficção Científica",
  },
  {
    nome: "O Evangelho de Sangue",
    foto: "https://m.media-amazon.com/images/I/71b5WFpdthL._SY342_.jpg",
    preco: "33",
    autor: "Clive Barker",
    disponivel: "Sim",
    categoria: "Terror",
  },
  {
    nome: "A Ilíada",
    foto: "https://m.media-amazon.com/images/I/51QialA0PFL._SX342_SY445_.jpg",
    preco: "12",
    autor: "Homero",
    disponivel: "Sim",
    categoria: "Poesia Épica",
  },
  {
    nome: "A Odisseia",
    foto: "https://m.media-amazon.com/images/I/51AmSkrflWL._SX342_SY445_.jpg",
    preco: "12",
    autor: "Homero",
    disponivel: "Sim",
    categoria: "Poesia Épica",
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
