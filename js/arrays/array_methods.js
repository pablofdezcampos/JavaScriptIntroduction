const months = ['January', 'February', 'March', 'April', 'May'];

const shopping = [
    { name: 'Laptop', price: 300 },
    { name: 'Computer', price: 400 },
    { name: 'TV', price: 600 },
    { name: 'VideoConsole', price: 800 },
    { name: 'Tablet', price: 300 }
]

//Array Methods
let exists = months.includes('March');

//Method to array of objects
exists = shopping.some(function(product) {
    return product.name == 'Laptop';
})

//With arrow function
exists = shopping.some(product => product.name === 'Laptop');
console.log(exists);

//To iterate with the elements. Example: Calculate the price of the shopping
let totalPrice = shopping.reduce(function(total, product) {
    return total + product.price
}, 0); //The 0 indicates the initial value of total. Example: If you owe money(20$), the start of the value will be +20;

//With arrow function
totalPrice = shopping.reduce((total, product) => total + product.price, 0);

console.log(totalPrice);

//Filter Method
var product400 = shopping.filter(function(product) {
    return product.price > 400
});

console.log(product400);