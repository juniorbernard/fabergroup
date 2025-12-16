let books = [];

// Ajoute un livre au système
function addBook() {
  const bookName = document.getElementById("bookName").value;
  const authorName = document.getElementById("authorName").value;
  const bookDescription = document.getElementById("bookDescription").value;
  const pagesNumber = parseInt(document.getElementById("pagesNumber").value);

  if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
    const book = {
      name: bookName,
      authorName: authorName,
      bookDescription: bookDescription,
      pagesNumber: pagesNumber,
    };
    books.push(book);
    showbooks();
    clearInputs();
  } else {
    alert("Veuillez remplir tous les champs correctement.");
  }
}

// fonction pour afficher les livres
function showbooks() {
  const bookDiv = books.map(
    (book, index) => `
    <h1>Numéro du livre : ${index + 1}</h1>
    <p><strong>Titre du livre : </strong>${book.name}</p>
    <p><strong>Auteur du livre : </strong>${book.authorName}</p>
    <p><strong>Description du livre : </strong>${book.bookDescription}</p>
    <p><strong>Nombre de pages : </strong>${book.pagesNumber}</p>
    <hr />
    <button onclick="editbook(${index})">Modifier</button>
    <button onclick="books.splice(${index}, 1); showbooks();">Supprimer</button>
    <hr />
    <hr />
    `
  );
  document.getElementById("books").innerHTML = bookDiv.join(" ");
}

// fonction pour modifier un livre
function editbook(index) {
  const book = books[index];
  document.getElementById("bookName").value = book.name;
  document.getElementById("authorName").value = book.authorName;
  document.getElementById("bookDescription").value = book.bookDescription;
  document.getElementById("pagesNumber").value = book.pagesNumber;
  books.splice(index, 1); // Supprime l"ancien livre
  showbooks(); // Met à jour l'affichage des livres
}

function clearInputs() {
  document.getElementById("bookName").value = "";
  document.getElementById("authorName").value = "";
  document.getElementById("bookDescription").value = "";
  document.getElementById("pagesNumber").value = "";
}
