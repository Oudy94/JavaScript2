"use strict";

function createBase(numbersix) {

  function addnumbersix(number) {
    return number + numbersix;
  }

  return addnumbersix;
}

const addSix = createBase(6);

console.log(addSix(9));
console.log(addSix(18));
console.log(addSix(27));

