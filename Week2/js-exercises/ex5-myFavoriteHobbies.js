"use strict";

function createHTMLList(arr) {

  const body = document.body;
  const hoppyList = document.createElement("ul"); //add unordered list
  body.appendChild(hoppyList); // attach the list to the body

  arr.forEach(element => {
    const hoppyItems = document.createElement("li"); // add item to the list 
    hoppyList.appendChild(hoppyItems); //attach the item to the list

    hoppyItems.textContent = element; // add text to that item

  });
}

const myHobbies = [
  'Meditation',
  'Reading',
  'Programming',
  'Hanging out with friends',
  'Going to the gym',
];

createHTMLList(myHobbies);
