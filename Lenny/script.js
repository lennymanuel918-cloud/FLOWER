const fixedGallery = [
  { type: "image", data: "img/foto1.jpg" },
  { type: "image", data: "img/foto2.jpg" },
  { type: "image", data: "img/foto4.jpg" },
   { type: "image", data: "img/foto3.jpg" },
   { type: "image", data: "img/foto5.jpg" },
   { type: "image", data: "img/foto6.jpg" },
   { type: "image", data: "img/foto7.jpg" },
  { type: "video", data: "videos/video1.mp4" }
];

// LOGIN
function login() {
  const u = document.getElementById("user").value;
  const p = document.getElementById("pass").value;
  const msg = document.getElementById("loginMsg");

  if (u === "Flower" && p === "Omri") {
    document.getElementById("loginBox").classList.add("hidden");
    document.getElementById("app").classList.remove("hidden");

    // Música
    document.getElementById("loveMusic").play();

    showRandomPhrase();
    loadDiary();
    loadGallery();
    loadLetter();
  } else {
    msg.innerText = "Usuário ou senha incorretos 💔";
  }
}

// FRASES
const phrases = [
  "Omri, teu sorriso é o lugar onde meu coração descansa.",
  "Cada pensamento meu encontra o teu nome.",
  "Amar-te é o meu destino favorito.",
  "Se eu tivesse mil vidas, escolheria-te em todas.",
  "O teu olhar é a poesia que eu nunca canso de ler.",
  "Contigo, até o silêncio vira música.",
  "És o meu acaso favorito.",
  "Meu coração aprendeu teu nome antes de bater.",
  "O mundo ficou mais bonito desde que te conheci.",
  "Omri, amar-te é a minha forma de existir."
];

function showRandomPhrase() {
  const text = phrases[Math.floor(Math.random() * phrases.length)];
  typeEffect(text);
}

// Digitação
function typeEffect(text) {
  const el = document.getElementById("lovePhrase");
  el.innerHTML = "";
  el.style.opacity = 0;
  el.style.transform = "translateY(8px)";

  let i = 0;
  el.style.transition = "0.6s ease";

  setTimeout(() => {
    el.style.opacity = 1;
    el.style.transform = "translateY(0)";
  }, 200);

  const interval = setInterval(() => {
    el.innerHTML += text[i];
    i++;
    if (i >= text.length) clearInterval(interval);
  }, 35);
}


// ABAS
function openTab(tabId) {
  document.querySelectorAll(".tab").forEach(tab => tab.classList.add("hidden"));
  document.getElementById(tabId).classList.remove("hidden");
}

// BIBLIOTECA COM SALVAMENTO
let galleryData = JSON.parse(localStorage.getItem("gallery")) || [];

document.getElementById("fileInput").addEventListener("change", function(e) {
  [...e.target.files].forEach(file => {
    const reader = new FileReader();
    reader.onload = () => {
      galleryData.push({ type: file.type, data: reader.result });
      localStorage.setItem("gallery", JSON.stringify(galleryData));
      loadGallery();
    };
    reader.readAsDataURL(file);
  });
});

function loadGallery() {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  const allItems = [...fixedGallery, ...galleryData];

  allItems.forEach(item => {
    if (item.type.startsWith("image")) {
  const img = document.createElement("img");
img.src = item.data;
img.onclick = () => openFullscreen(item.data, item.type);
gallery.appendChild(img);
    } else {
      const video = document.createElement("video");
      video.src = item.data;
      video.controls = true;
      gallery.appendChild(video);
    }
  });
}


// DIÁRIO
let diaryEntries = JSON.parse(localStorage.getItem("diaryEntries")) || [];

function saveDiary() {
  const text = document.getElementById("diaryText").value;
  if (!text.trim()) return;

  diaryEntries.push(text);
  localStorage.setItem("diaryEntries", JSON.stringify(diaryEntries));
  document.getElementById("diaryText").value = "";
  document.getElementById("saveMsg").innerText = "Salvo 💖";
  loadDiary();
}

function loadDiary() {
  const list = document.getElementById("diaryList");
  list.innerHTML = "";
  diaryEntries.forEach((entry, i) => {
    const p = document.createElement("p");
    p.innerText = "💗 " + entry;
    list.appendChild(p);
  });
}

// CARTA
function loadLetter() {
  const letter = `
Omri❤️,

Tu és o verso que o meu coração sempre quis escrever.
Quando penso em ti, percebo que o amor não é exagero — é verdade.

Tu és a paz e o brilho.
Se o mundo fosse silêncio, tu serias a música.

Não prometo perfeição, mas prometo sentimento.
Não prometo eternidade, mas prometo intensidade.
E enquanto eu respirar, prometo continuar a escolher-te.

Com todo o meu Amor,
Dengo 💖


Minha querida Omri,

Às vezes eu tento encontrar palavras para explicar o que sinto por você… mas percebo que o que mora no meu coração é maior do que qualquer frase. Mesmo assim, eu preciso tentar, porque amar você é a coisa mais verdadeira que já me aconteceu.

Desde que você entrou na minha vida, o mundo ganhou novas cores. O que antes era comum, hoje é especial. O que antes era silêncio, hoje tem o som do teu riso. E o que antes era vazio, hoje é preenchido pela tua presença.

Omri, você não é apenas minha namorada. Você é o meu lugar seguro, o meu sonho acordado, a minha paz em dias difíceis e a minha alegria nos dias felizes. Em você eu encontrei carinho, força, beleza e uma luz que ilumina até as partes mais escondidas de mim.

Eu amo o jeito que você fala, o jeito que você sorri, o jeito que você se preocupa, o jeito que você existe. Amo até os teus silêncios, porque neles eu sinto o quanto você é profunda e especial. Amar você é como respirar: algo que eu não preciso forçar, porque simplesmente acontece.

Prometo caminhar ao teu lado, respeitar teus sonhos, cuidar do teu coração e segurar tua mão mesmo quando o mundo parecer pesado. Se um dia eu falhar nas palavras, que nunca falhe nas atitudes. Se um dia eu me calar, que nunca se cale o meu amor por você.


Obrigado por existir, Omri.
Obrigado por ser você.
E obrigado por me permitir amar você.

Com todo o meu amor,
Dengo
`;
  document.getElementById("letterText").innerText = letter;
}

function loadLetter2() {
  const letter2 = `
Lenny,

Se a vida fosse um livro, tu serias o capítulo que eu nunca queria terminar.
Em cada gesto teu, eu encontro abrigo.
Em cada palavra tua, eu encontro sentido.

Talvez o mundo nunca entenda o que sinto,
mas o meu coração entende — e isso basta.

Se eu pudesse fazer um pedido ao tempo,
seria este: deixa-me amar a Lenny todos os dias,
como se fosse sempre o primeiro.

Com carinho infinito,
Dengo 💖
`;
  document.getElementById("letterText2").innerText = letter2;

  
}



// CORAÇÕES FLUTUANTES
setInterval(() => {
  const heart = document.createElement("span");
  heart.innerHTML = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = Math.random() * 20 + 10 + "px";
  document.getElementById("hearts").appendChild(heart);
  setTimeout(() => heart.remove(), 8000);
}, 500);

// 🖼️ Fullscreen Viewer (iOS style)
const viewer = document.createElement("div");
viewer.id = "fullscreenViewer";
document.body.appendChild(viewer);

function openFullscreen(src, type) {
  viewer.innerHTML = "";
  let el;

  if (type.startsWith("image")) {
    el = document.createElement("img");
    el.src = src;
  } else {
    el = document.createElement("video");
    el.src = src;
    el.controls = true;
    el.autoplay = true;
  }

  viewer.appendChild(el);
  viewer.classList.add("active");
}

viewer.addEventListener("click", () => {
  viewer.classList.remove("active");
});
