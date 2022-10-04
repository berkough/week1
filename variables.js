// This file will hold the variables that we want to use for the first week's assignment.
//Strings
var firstName = 'Mathew';
var lastName = 'Kane';

//Concatenating strings in the console.
console.log("The user's name is: " + firstName + lastName);

//Numbers, both intigers and floats (or decimals).
var int = 1;
var float = 5.25;

//Example of a boolean.
var bool = true;

//Different operators:
var addition = int + float;
var subtraction = int - float;
var multiply = int * float;
var divide  = float / int;
var remainder = float % int;

//Printing the above variables to the console:
console.log("This is the output from adding the variables int and float together: " + addition);
console.log("This is the output from subtracting float from int: " + subtraction);
console.log("This is the output from multiplying int and float: " + multiply);
console.log("This is the output from dividing float by int: " + divide);
console.log("This is the remainder of float divided by int: " + remainder);

//ECMAScript 6 changed the standard from "var" to "let" and "const", let will define a variable that can be changed while const defines a variable that doesn't change.
let firstName = 'Matt';
const constantOfPi = 3.14159265359;
console.log("The user has shortened his first name to " + firstName + " and has declared the constant " + constantOfPi);