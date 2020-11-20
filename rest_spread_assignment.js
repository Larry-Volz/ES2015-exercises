/*
Given this function:

function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function(num) {
    return num % 2 === 0
  });
}

re-factor it with rest and arrow function

*/

 filterOutOdds = (...args) => args.filter((num) => num % 2 === 0);

 /*

 findMin

 Write a function called findMin that accepts a variable number of 
 arguments and returns the smallest argument.

Make sure to do this using the rest and spread operator.

findMin(1,4,12,-3) // -3
findMin(1,-1) // -1
findMin(3,1) // 1

*/

// findMin = (...args) => args.reduce((acc, val) => val < acc);

// findMin2 = (...args) => Math.min(args);

 findMin = (...args) => args.reduce((acc, val) => Math.min(acc, val));

/*
Merge Objects 
Write a function called mergeObjects that accepts two objects and 
returns a new object which contains all the keys and values of the 
first object and second object.
*/

 

 const mergeObjects = (obj1, obj2) => ({...obj1,...obj2});

//  console.log("mergeObjects", mergeObjects({a:1, b:2}, {c:3, d:4})) // {a:1, b:2, c:3, d:4}

/*
 doubleAndReturnArgs
 Write a function called doubleAndReturnArgs which accepts an array and a 
 variable number of arguments. The function should return a new array with 
 the original array values and all of additional arguments doubled.

 */

 const doubleAndReturnArgs = (arr, ...args) => 
 [...arr, ...args].map((val) => val*2);
 


// console.log( doubleAndReturnArgs([1,2,3],4,4)) // [1,2,3,8,8]
// console.log( doubleAndReturnArgs([2],10,4)) // [2, 20, 8]


/*
Slice and Dice!
For this section, write the following functions using rest, spread and 
refactor these functions to be arrow functions!

Make sure that you are always returning a new array or object and not 
modifying the existing inputs.

*/

/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => { 
    const items2 = [...items];
    items2.splice(Math.floor(Math.random()*items.length),1);
    return items2;
}

// console.log(removeRandom([1,2,3,4,5,6]));

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2 )=> [...array1,...array2];

// console.log(extend([1,2,3,4,5,6], [7,8,9]));

/** Return a new object with all the keys and values
from obj and a new key/value pair */

addKeyVal = (obj, ky, val) => ({...obj, ...{ [ky] : val}});



/** Return a new object with a key removed. */

removeKey = (obj, key) => {
    const obj2 = {...obj};
    delete obj2[key];
    return obj2;
}

// console.log(removeKey({piece:"knight", color:"black", status: "checkmate", name:"murray"},"name"));

/** Combine two objects and return a new object. */

function combine(obj1, obj2) {
    return {...obj1, ...obj2};

}

const obj1 = {piece:"knight", color:"black"};
const obj2 = {status: "lost", name:"Harriett"};
console.log(combine(obj1, obj2));

/** Return a new object with a modified key and value. */

function update(obj, key, val) {

}