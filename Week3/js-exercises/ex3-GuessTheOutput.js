
/*

Obviously, the output will be 12 and the reason why is that in 'x' function scope the variable 'a' declared in the global 
scope has been reassigned.

*/

"use strict"
let a = 10;
const x = (function () {
  let a = 12;
  return function () {
    console.log(a);
  };
})();

console.log(a);
x();
