//Declaration of a function

//You can call the function before you call
function sum() {
    console.log(10 + 10);
}

sum();

//You can not call the function before you call
const substraction = function() {
    console.log(10 - 4);
}

//IIFE function -> do not allow access to his content in other files.
//              -> You do not have to call them, they call himselfs.
//              -> use to protect variables.

(function() {
    console.log('IIFE function');
});

//ARROW FUNCTIONS

/* {} -> not necesarry if you only write one line of code
    implicit return, not necessary to put
*/

const division = (number1, number2) => {
    return number1 / number2;
}
console.log(division(10, 2));

//Implicit return, not is neccesary to call return, js do it automatically
const multiplication = (number1, number2) => number1 * number2;

console.log(multiplication(1, 4));

const favoriteFood = food => `The favourite food is ${food}`;

console.log(favoriteFood('Pizza'));