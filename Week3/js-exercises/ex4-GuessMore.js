/*

In the first function the parameter passed is a number and numbers as its known a primitive type which is accessed by value,
Thus when passing primitive variable to a function you actually pass its copy. Therefore any changes that happens to the 
arguments inside the function does not affect the passing variables outside of the function.

Unlike the second function the parameter passed is an object and objects are reference type which is accessed by reference,
Thus when passing reference variable to a function you actually pass its refrence. Therefore any changes that happens to the 
arguments inside the function will affect the passing variables outside of the function.

*/

const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}
f1(x);
console.log(x);

const y = {
  x: 9
};

function f2(val) {
  val.x = val.x + 1;
  return val;
}
f2(y);
console.log(y);
