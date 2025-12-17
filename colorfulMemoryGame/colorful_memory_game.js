const colors = [
  "red",
  "blue",
  "green",
  "orange",
  "red",
  "blue",
  "green",
  "orange",
];
let cards = shuffle(colors.concat(colors));
let selectedCards = [];
let score = 0;
let timeleft = 30;
let gameInterval;

const startbtn = document.getElementById("startbtn");
const gameContainer = document.getElementById("game-container");
const scoreElement = document.getElementById("score");
const timerElement = document.getElementById("timer");

// Fonction pour mettre en place le jeu
function generateCards() {
  for (const color of cards) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.color = color;
    card.textContent = "?";
    gameContainer.appendChild(card);
  }
}

// fonction pour melanger les cartes
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// fonction pour gérer les cliques sur les cartes
function handleCardClick(event) {
  const card = event.target;
  if (!card.classList.contains("card") || card.classList.contains("matched")) {
    return;
  }

  card.textContent = card.dataset.color;
  card.style.backgroundColor = card.dataset.color;
  selectedCards.push(card);
  if (selectedCards.length === 2) {
    setTimeout(checkMatch, 500);
  }
}

// fonction pour verifier si les cartes sont identiques
function checkMatch() {
  const [card1, card2] = selectedCards;
  if (card1.dataset.color === card2.dataset.color) {
    card1.classList.add("matched");
    card2.classList.add("matched");
    score += 2;
    scoreElement.textContent = `Score: ${score}`;
  } else {
    card1.textContent = "?";
    card2.textContent = "?";
    card1.style.backgroundColor = "#ddd";
    card2.style.backgroundColor = "#ddd";
  }

  selectedCards = [];
}

// fonction pour demarrer le jeu
function startGame() {
  let timeleft = 30;
  startbtn.disabled = true;
  score = 0;
  scoreElement.textContent = `Score: ${score}`;
  startGameTimer(timeleft);
  cards = shuffle(colors.concat(colors));
  selectedCards = [];
  gameContainer.innerHTML = "";
  generateCards();
  gameContainer.addEventListener("click", handleCardClick);
}

// fonction pour demarrer le timer du jeu
function startGameTimer(timeleft) {
  timerElement.textContent = `Temps restant : ${timeleft}`;
  gameInterval = setInterval(() => {
    timeleft--;
    timerElement.textContent = `Temps restant : ${timeleft}`;
    if (timeleft === 0) {
      clearInterval(gameInterval);
      let timeleft = 30;
      alert(
        "Le temps est arrivé, le jeu s'est arreté. Veuillez cliquer sur Démarrer/Réinitialiser pour jouer de nouveau."
      );
      startbtn.disabled = false;
    }
  }, 1000);
}

// Ecouter d'évenement pour l'ajout de tâches
startbtn.addEventListener("click", startGame);
