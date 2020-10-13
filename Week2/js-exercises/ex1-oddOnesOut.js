"use strict";

const myNumbers = [1, 2, 3, 4];

const doubleEvenNumbers = myNumbers
.filter(number => number % 2 === 0) // filter only the even numbers
.map(number => number * 2); // double the even number

console.log(doubleEvenNumbers);