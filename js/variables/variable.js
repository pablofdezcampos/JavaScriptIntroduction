//Variables
var product = 'Laptop';

var available;

var product1 = "Computer",
    available = false,
    category = "Informatic";

//Variables styles
var product_name; // underscore
var productName; // camelcase    

console.log(product);

//Variable with let -> equals as var
let x = 0;
let y = -1;

//Variable with const -> you have to initialize with a value, you can´t re asign the value
const car = "Mercedes";

//Types of data
var brand = "Nike";
var brand = '"Adidas"'; //Not necessary to scape

//Scape
var bear = "\"Amstel\"";
console.log(bear);

//Show the type of variable we are creating
console.log(typeof bear);

//Create variable with constructor
var text = String('Text...');

//Methods or Functions
console.log(product.length);

//IndexOf, return position
var indexOf = "Find some text in the variable";
console.log(indexOf.indexOf('Find'));

//Include, return boolean
console.log(indexOf.includes('car'));

//NUMBERS
const pi = 3.14;
const e = 2.71;

console.log("Sum " + (pi + e));
console.log("Substraction " + (pi - e));
console.log("Division " + (pi / e));
console.log("Multiplication " + (pi * e));
console.log("Module " + (pi % e));

//Math
var randomNumber = Math.random() * 10;
console.log(Math.floor(randomNumber)); //Round to under always
console.log(Math.ceil(randomNumber)); //Round to up always
var numberPI = Math.PI;
console.log(numberPI);
console.log(Math.sqrt(144)); //Square of a number
console.log(Math.abs(-2.54)); //Absolute value of a number []
console.log(Math.max(3, 5, 7)); //Declare max value, with min, the minimun value

//Increments and Decrements
let puntuation = 0;
puntuation++;
console.log("Puntuation " + ++puntuation);

puntuation -= 1;
console.log(puntuation);

//Concatenation
const name = 'Pablo';
const email = 'pablo@correo.com';

const userNameEmail = "User data: " + name + " " + email;
console.log(userNameEmail);

//Template Strings or Strings Literals
console.log(`User name: ${name} Email: ${email}`);

//Booleans
const isValidUser = true;
const isInvalidUser = false;
console.log(isInvalidUser);