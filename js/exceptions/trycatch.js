//Try Catch -> to control the exceptions(error)

function insertNumberBetweenOneToTen(number) {
    if (number > 10 || number < 1) {
        try {
            console.log('The number must be into 1 and 10');
        } catch (error) {
            console.log(error);
        }
    } else {
        return number;
    }
}

console.log(insertNumberBetweenOneToTen(5));
console.log(insertNumberBetweenOneToTen(204));

//PROMISES

/* In the promises exist 3 values
   Pending: is waiting but the promise is not reject
   Fullfiled: the promise function
   Rejected: the promise is rejected
*/

//Simulation of the login of a user

const userLogin = new Promise((resolve, rejected) => {
    const auth = false;

    if (auth) {
        resolve('User login');
    } else {
        rejected('User without login');
    }
});

//Promise access values, with arrow function and function
userLogin
    .then((result) => console.log(result)) //For the fullfiled
    .catch(function(error) {
        console.log(error) //For the rejected
    });