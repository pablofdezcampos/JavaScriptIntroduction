//CLASS
class Vehicle {

    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    vehicleFormat() {
        return `The car brand is ${this.name} and the price is ${this.price}`;
    }

    getPrice() {
        return this.price;
    }
}

var vehicle = new Vehicle("Mercedes", 30000);
console.log(vehicle);
console.log(vehicle.vehicleFormat());
console.log(vehicle.getPrice());

//INHERITANCE
class Car extends Vehicle {

    constructor(name, price, type) {
        super(name, price);
        this.type = type;
    }

    vehicleFormat() {
        return `${super.vehicleFormat()} and the type is ${this.type}`;
    }
}

var car = new Car("Audi", 35000, "sport");
console.log(car.vehicleFormat());