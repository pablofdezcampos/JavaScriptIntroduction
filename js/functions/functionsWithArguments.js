function sum(number1, number2) {
    return number1 + number2
}

console.log(sum(3, 6));

//Default parametres -> if we do not put an argument, it has a defect value
let substraction = function(number1 = 0, number2 = 0) {
    return number1 - number2;
}

console.log(substraction(10));

let total = 0;

function addShoppingCart(price) {
    return total += price;
}

function setTax(total) {
    return total * 1.25;
}

total = addShoppingCart(300);
total = addShoppingCart(150);

console.log(`The total price of the shopping is ${total}`);

let totalToPay = setTax(total);

console.log(`The total price to pay with tax is ${totalToPay}`);