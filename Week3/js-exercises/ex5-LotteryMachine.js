"use strict";

function threeFive(startIndex, stopIndex, threeCallback, fiveCallback) {
  const numbers = [];

  for (let i = startIndex; i <= stopIndex; i++) {
    numbers.push(i);
  }

  numbers.forEach(element =>{
    if (element % 3 === 0)
      threeCallback();
    
    if (element % 5 === 0)
      fiveCallback();
  });

}

function sayThree(){
  console.log("sayThree");
}

function sayFive(){
  console.log("sayFive");
}

threeFive(10, 15, sayThree, sayFive);
