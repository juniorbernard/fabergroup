const breakfastMenu = ["Pancakes", "Eggs Benedict", "Oatmeal", "Frittata"];
const mainCourseMenu = ["Steak", "Pasta", "Burger", "Salmon"];
const dessertMenu = ["Cake", "Ice Cream", "Pudding", "Fruit Salad"];
const beverageMenu = ["Coffee", "Tea", "Juice", "Soda"];

const breakfastMenuItemsHTML = breakfastMenu
  .map((item, index) => `<p>Item ${index + 1}: ${item}</p>`)
  .join("");

document.getElementById("breakfastMenuItems").innerHTML =
  breakfastMenuItemsHTML;

let mainCourseItem = " ";
mainCourseMenu.forEach((item, index) => {
  mainCourseItem += `Article ${index + 1} : ${item} <br>`;
});

document.getElementById("maincourseMenuItems").innerHTML = mainCourseItem;

let dessertItem = " ";
for (let i = 0; i < dessertMenu.length; i++) {
  dessertItem += `Dessert ${i + 1} : ${dessertMenu[i]} <br>`;
}

document.getElementById("dessertMenuItems").innerHTML = dessertItem;

let beverageManuItems = " ";
for (let i = 0; i < beverageMenu.length; i++) {
  beverageManuItems += `Beverage ${i + 1} : ${beverageMenu[i]} <br>`; // Utiliser la variable beverageMenu ici
}

document.getElementById("beverageMenuItems").innerHTML = beverageManuItems;