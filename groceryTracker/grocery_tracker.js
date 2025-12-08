let groceryList = [];
let groceryItem;
let groceryPrice;

function addItem() {
  groceryItem = document.getElementById("item").value;
  groceryPrice = document.getElementById("price").value;
  if (groceryItem && groceryPrice) {
    groceryList.push({ item: groceryItem, price: groceryPrice });
    displayList();
    clearInputs();
  } else {
    alert("Please enter both item and price.");
  }
}

function displayList() {
  const listContainer = document.getElementById("grocery-list");
  listContainer.innerHTML = "";
  groceryList.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${item.item}--${item.price} `;
    listContainer.appendChild(listItem);
    // calculate total
    let total = 0;
    groceryList.forEach((item) => {
      total += parseFloat(item.price);
    });
    document.getElementById("total-price").textContent = `Total : ${total}`;
  });
}

function clearInputs() {
  document.getElementById("item").value = "";
  document.getElementById("price").value = "";
}

document.getElementById("add-button").addEventListener("click", addItem);
