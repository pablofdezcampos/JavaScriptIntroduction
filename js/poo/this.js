//Use of this in JavaScript
const person = {
    name: 'Pedro',
    surname: 'Picapiedra',
    age: 20,
    information: function() {
        console.log(`The person has a name ${person.name} and a age of ${person.age}`);
    }
}

person.information();

//POO 

//Constructor -> must be in a class
function Product(name, price) {
    this.name = name;
    this.price = price;
}

var product = new Product("Laptop", 500);
var product2 = new Product("Computer", 600);

console.log(product);
console.log(product2);

//Prototypes -> is use to create functions that are only used in a specific object
Product.prototype.formatProduct = function() {
    return `The product has a name ${this.name} and a price of ${this.price}`;
}

console.log(product.formatProduct())