function collectiveAge(people) {
  return people
  .map(ages => ages.age) // select age from hackYourFutureMembers
  .reduce((total, ages) => total + ages ,0); // sum it all up 
}

const hackYourFutureMembers = [{
    name: 'Wouter',
    age: 33
  },
  {
    name: 'Federico',
    age: 32
  },
  {
    name: 'Noer',
    age: 27
  },
  {
    name: 'Tjebbe',
    age: 22
  },
];

console.log("The collective age of the HYF team is: " + collectiveAge(hackYourFutureMembers));