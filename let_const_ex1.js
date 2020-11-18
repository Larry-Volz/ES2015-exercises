//refactor var pi = 3.14;
const PI = 3.14; //now you cannot redeclare it


//difference between var and let?
/* 
let is block scope whereas var is function scope
var can over-write important window functions by accident and let cannot
let will not accidentally be re-declared within the same scope var can be
*/

//difference between var and const?
/*
same as let and var but also const cannot be re-declared
also you cannot modify const for primitive types
*/

//difference between let and const?
/*
let can be changed in value
const you cannot change primitive values like into or string.  However you
can mutate the contents of an array or object declared by scope. 
*/

//what is hoisting?
/*
hoisting is when javascript recognizes the declaration of a variable earlier 
than it does the initialization of a variable.  
*/
