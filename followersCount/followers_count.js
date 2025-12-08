let count = 0; // Initialiser le nombre de followers à 0

function increaseCount() {
  count++; // Incrémenter le nombre de followers de 1
  displayCount(); // afficher le nouveau nombre de followers
  checkCountValue(); // Vérifier si le nombre de followers atteint une valeur spécifique
}

function displayCount() {
  document.getElementById("countDisplay").innerHTML = count; // Mettre à jour l'affichage du nombre de followers
}

function checkCountValue() {
  if (count === 10) {
    alert("Félicitations ! Vous avez atteint 10 followers !");
  } else if (count === 50) {
    alert("Incroyable ! Vous avez atteint 50 followers !");
  }
}
