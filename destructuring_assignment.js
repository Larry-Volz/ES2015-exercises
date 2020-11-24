/*Object Destructuring 1

What does the following code print?

let facts = {numPlanets: 8, yearNeptuneDiscovered: 1846};
let {numPlanets, yearNeptuneDiscovered} = facts;

console.log(numPlanets); // ?
console.log(yearNeptuneDiscovered); // ?

*/


/* ---------------------------------    MY ANSWER ----------------------------------------*/
//8 AND 1846 because you are assigning variables by their original names and just setting them up so you 
//don't have to use dot or square bracket notation



/*Object destructuring 2
What does the following code print?

let planetFacts = {
  numPlanets: 8,
  yearNeptuneDiscovered: 1846,
  yearMarsDiscovered: 1659
};

let {numPlanets, ...discoveryYears} = planetFacts;

console.log(discoveryYears); // ?

*/


  /* ---------------------------------    MY ANSWER ----------------------------------------*/
  // It will print out {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659} because the rest 
  //operator collects the variables that were not indicated in the first of the signature
  // and puts them into one object


  /*Object Destructuring 3

  What does the following code return/print?
  

  function getUserData({firstName, favoriteColor="green"}){
  return `Your name is ${firstName} and you like ${favoriteColor}`;
}

getUserData({firstName: "Alejandro", favoriteColor: "purple"}) // ?
getUserData({firstName: "Melissa"}) // ?
getUserData({}) // ?

*/

/*   ---------------------------------    MY ANSWER ----------------------------------------*/
// Your name is Alejandro and you like purple
// Your name is Melissa and you like green
// Your name is undefined and you like green


/* Array Destructuring 1

What does the following code return/print?

let [first, second, third] = ["Maya", "Marisa", "Chi"];

console.log(first); // ?
console.log(second); // ?
console.log(third); // ?

*/

/*   ---------------------------------    MY ANSWER ----------------------------------------*/

//Maya
//Marisa
//Chi



/* Array Destructuring 2

What does the following code return/print?


let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
  "Raindrops on roses",
  "whiskers on kittens",
  "Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings"
]

console.log(raindrops); // ?
console.log(whiskers); // ?
console.log(aFewOfMyFavoriteThings); // ?
*/

/*   ---------------------------------    MY ANSWER ----------------------------------------*/

//Raindrops on roses
//whiskers on kittens
/* [
  "Bright copper kettles",
  "warm woolen mittens",
  "Brown paper packages tied up with strings"
]
*/

/*Array Destructuring 3
What does the following code return/print?

let numbers = [10, 20, 30];
[numbers[1], numbers[2]] = [numbers[2], numbers[1]]

console.log(numbers) // ?

*/

/*   ---------------------------------    MY ANSWER ----------------------------------------*/

[10, 30, 20]


// Assigning Variables to Object Properties

// var obj = {
//     numbers: {
//     a: 1,
//     b: 2
//   }
// };

// var a = obj.numbers.a;
// var b = obj.numbers.b;

/*   ---------------------------------    MY ANSWER ----------------------------------------*/


const obj = {
    numbers: {
    a: 1,
    b: 2
  }
};

let {numbers: {a, b}} =obj


// ES5 Array Swap
// var arr = [1, 2];
// var temp = arr[0];
// arr[0] = arr[1];
// arr[1] = temp;

/*   ---------------------------------    MY ANSWER ----------------------------------------*/

var arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]];


// raceResults()
// Write a function called raceResults which accepts a single array argument. It should return an object with the keys first, second, third, 
//and rest.

// first: the first element in the array
// second: the second element in the array
// third: the third element in the array
// rest: all other elements in the array

raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest});
  


