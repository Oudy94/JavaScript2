"use strict";

const letters = ['a', 'b', 'c', 'd', 'a', 'e', 'f', 'c', 'b'];
let newLetters = [];

function removeDuplicates(array){

  array.map(element => {
      if(newLetters.indexOf(element) === -1){ //Check if the element not already exist.
        newLetters.push(element);
      }
  });

  return newLetters; //return the not dublicated array
}

console.log(removeDuplicates(letters));

function checkArrayEquality(array1, array2){

  if (array1.length === array2.length && array1.every(item => array2.indexOf(item) > -1)) //Check the array equality.
    return true;

  else
    return false;
}

if (checkArrayEquality(newLetters, [ 'a', 'b', 'c', 'd', 'e', 'f' ]))
  console.log("Hooray!");

