let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest() {
  // Définir le texte de test
  document.getElementById("inputText").value = testText;

  // Réinitialiser l'entrée utilisateur et la sortie
  let userInput = document.getElementById("userInput");
  userInput.value = "";
  userInput.readOnly = false;
  userInput.focus();

  document.getElementById("output").innerHTML = "";

  // Démarrer le chronomètre
  startTime = new Date().getTime();
}

// Fonction pour terminer le test et calculer la vitesse
function endTest() {
  endTime = new Date().getTime();

  // Désactiver la saisie utilisateur
  document.getElementById("userInput").readOnly = true;

  // Calculer le temps écoulé et les mots par minute (WPM)
  var timeElapsed = (endTime - startTime) / 1000; // en secondes
  var userTypedText = document.getElementById("userInput").value;

  // Diviser le texte en utilisant une expression régulière pour compter les mots correctement
  var typedWords = userTypedText.split(/\s+/).filter(function (word) {
    return word !== "";
  }).length;

  var wpm = 0; // Valeur par défaut

  if (timeElapsed !== 0 && !isNaN(typedWords)) {
    wpm = Math.round((typedWords / timeElapsed) * 60);
  }

  // Afficher les résultats
  var outputDiv = document.getElementById("output");
  outputDiv.innerHTML = "<h2>Résultats du test de dactylographie :</h2>" +
    "<p>Mots tapés : " +
    typedWords +
    "</p>" +
    "<p>Temps écoulé : " +
    timeElapsed.toFixed(2) +
    " secondes</p>" +
    "<p>Mots par minute (WPM) : " +
    wpm +
    "</p>" +
    "<p>Longeur du text : " +
    userTypedText.length +
    "</p>";
}
