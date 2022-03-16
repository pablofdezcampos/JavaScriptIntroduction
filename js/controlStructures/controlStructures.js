//CONTROLS STRUCTURES
const winner = (localGoals, visitingGoals) => {
    if (localGoals > visitingGoals) {
        return `The local team won`;
    } else if (localGoals < visitingGoals) {
        return `The visiting team won`;
    } else if (localGoals === visitingGoals) { // === -> comparate the value and the type of value
        return `Tie game`;
    } else {
        return `Please introduce a correct value`;
    }
}

console.log(winner(1, 4));

const age = age => {
    if (age < 18) {
        return `Your age is under 18`;
    } else if (age >= 18) {
        return `Your age is over 18`;
    } else {
        return `Please introduce a correct option`;
    }
}

console.log(age(17));

//SWITCH
const setDayOfWeek = dayOfWeek => {
    switch (dayOfWeek) {
        case 1:
            return `Monday`;
        case 2:
            return `Tuesday`;
        case 3:
            return `Wednesday`;
        case 4:
            return `Thursday`;
        case 5:
            return `Friday`;
        case 6:
            return `Saturday`;
        case 7:
            return `Sunday`;
        default:
            return `Please introduce a correct option`;
    }
}

console.log(setDayOfWeek(4));

//FOR LOOP
for (let i = 0; i <= 10; i++) {
    console.log(i);
}

//FOR EACH
const cities = ['Madrid', 'Barcelona', 'Valencia', 'Sevilla', 'Malaga'];
const runCitites = cities => {
    cities.forEach(element => {
        console.log(element);
    });
}

console.log(runCitites(cities));

//WHILE LOOP
let contador = 0;
while (contador < 10) {
    console.log(contador);
    contador++;
}

//DO WHILE LOOP
let i = 0;

do {
    console.log(cities[i]);
    i++;
} while (i < cities.length);

//Map -> is use to generates new arrays)
const cars = [
    { brand: "Mercedes", price: 35000 },
    { brand: "Audi", price: 40000 },
    { brand: "Ferrari", price: 350000 },
    { brand: "Mclaren", price: 500000 },
]

const carsNameCopy = cars.map(car => `${car.brand}`);
console.log(carsNameCopy);