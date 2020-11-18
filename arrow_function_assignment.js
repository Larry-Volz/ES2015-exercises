//original function to refactor:
/*
function double(arr) {
  return arr.map(function(val) {
    return val * 2;
  });
}
*/

//in arrow format:

function double(arr) {
    return arr.map((val) => val * 2);
  }

  //2nd function to refactor:
  /*
  function squareAndFindEvens(numbers){
  var squares = numbers.map(function(num){
    return num ** 2;
  });
  var evens = squares.filter(function(square){
    return square % 2 === 0;
  });
  return evens;
}
*/

const squareAndFindEvens = (numbers) =>
numbers.map(num => num ** 2).filter(square => square % 2 === 0);

