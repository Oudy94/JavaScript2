"use strict";

function takeOutLemons(basket) {
  const disposeLemon = basket.filter(fruits => fruits != "Lemon"); //dispose any element with a "Lemon" string
  
  return `My mom bought me a fruit basket, containing${disposeLemon}` ;
}

const fruitBasket = ['Apple', 'Lemon', 'Grapefruit', 'Lemon', 'Banana', 'Watermelon', 'Lemon'];

console.log(takeOutLemons(fruitBasket));