// This file will hold the letiables that we want to use for the first week's assignment.
//Strings
let firstName = 'Mathew';
let lastName = 'Kane';

//Concatenating strings in the console.
console.log('The user\'s name is: ' + firstName + " " + lastName);

//Numbers, both whole and decimal.
let num1 = 1;
let num2 = 5.25; //Changed int and float to num1 and num2.

//Example of a boolean.
let bool = true;

//Different operators:
let addition = num1 + num2;
let subtraction = num2 - num1;
let multiply = num1 * num2;
let divide  = num1 / num2;
let remainder = num2 % num1;

//Printing the above letiables to the console:
console.log('This is the output from adding the variables num1 and num2 together: ' + addition);
console.log('This is the output from subtracting num2 from num1: ' + subtraction);
console.log('This is the output from multiplying num1 and num2: ' + multiply);
console.log('This is the output from dividing num2 by num1: ' + divide.toFixed(2));
console.log('This is the remainder of num2 divided by num2: ' + remainder);

firstName = 'Matt';
const constantOfPi = 3.14159265359;
console.log('The user has shortened his first name to ' + firstName + ' and has declared the constant ' + constantOfPi.toFixed(2));

let temperature = 76;
let celcius = (temperature - 32) * 5/9;

console.log("The temperature is "+ temperature + "F " + "and " + celcius.toFixed(1) + "C");

let radius = 3;
let area = constantOfPi * Math.pow(radius,2);

console.log("The variable radius is currently set to" + radius + " , the area of the circle is " + area.toFixed(2));