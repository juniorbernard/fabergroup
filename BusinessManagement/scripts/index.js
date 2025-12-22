// produits array
let products = [];

// fonction pour ajouter un produit
function addProduct(productName, productPrice, productQuantity) {
  const product = {
    name: productName,
    price: productPrice,
    quantity: productQuantity,
  };
  products.push(product);
  updateProductTable();
}

// fonction pour mettre à jour la table des produits
function updateProductTable() {
  const productTableBody = document.getElementById("productTableBody");
  productTableBody.innerHTML = "";
  let totalPrice = 0;
  let totalQuantity = 0;
  products.forEach((product) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${product.name}</td>
                         <td>${product.price}</td>
                         <td>${product.quantity}</td>`;
    productTableBody.appendChild(row);
    totalPrice += product.price * product.quantity;
    totalQuantity += product.quantity;
  });
  document.getElementById("totalPrice").textContent = totalPrice.toFixed(2);
  document.getElementById("totalQuantity").textContent = totalQuantity;
}

// fonction pour rechercher un produit
function searchProduct(productName) {
  const productTableBody = document.getElementById("productTableBody");
  productTableBody.innerHTML = "";
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(productName.toLowerCase())
  );
  filteredProducts.forEach((product) => {
    const row = document.createElement("tr");
    row.innerHTML = `<td>${product.name}</td>
                         <td>${product.price}</td>
                         <td>${product.quantity}</td>`;
    productTableBody.appendChild(row);
  }); 
}
