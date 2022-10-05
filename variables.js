// This file will hold the variables that we want to use for the first week's assignment.
//Strings
var firstName = 'Mathew';
var lastName = 'Kane';

//Concatenating strings in the console.
console.log("The user's name is: " + firstName + lastName);

//Numbers, both whole and decimal.
var num1 = 1;
var num2 = 5.25; //Changed int and float to num1 and num2.

//Example of a boolean.
var bool = true;

//Different operators:
var addition = num1 + num2;
var subtraction = num2 - num1;
var multiply = num1 * num2;
var divide  = num1 / num2;
var remainder = num2 % num1;

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