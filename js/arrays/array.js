//CREATION OF AN ARRAY
const numbers = [10, 20, 30, 40, 50];
console.log(numbers);
console.table(numbers);

const months = ['January', 'February', 'March', 'April', 'May'];
console.log(months);

const arrayMix = [1, "Text", person = { name: 'Pablo', age: 20 }, days = ['Monday', 'Tuesday', 'Wednesday']];
console.table(arrayMix);
console.log(arrayMix);
console.log(arrayMix[2]);
console.log(person.name);
// console.log(person.days[1]);

//To run array
months.forEach(function(month) {
    console.log(month);
});

//Add elements to the array

//In the end of the array
numbers.push(111);
months.push('June')

//In the start of the array
numbers.unshift(-1);
months.unshift('December');

//Remove the last element
numbers.pop();

//Remove the first element
numbers.shift();

//Remove the element you want, and can delete the nexts if you indicates it.
//slice(position, number of the elements you want to delete)
numbers.slice(0, 1);

//Spread Operator or Rest Operator
var numbers2 = [...numbers, 1123];
var numbers2 = [1123, ...numbers];