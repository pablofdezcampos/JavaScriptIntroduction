//"user sctric"; Run Js in stric mode

//CREATION OF AN OBJECT
var team = {
    teamName: "Real Madrid",
    teamPlayers: 11,
    hasWonUCL: true,
    available: false
}

console.log(team);

team.teamName = "Barcelona FC";

console.log(team);
console.log(team['teamPlayers'] = 22);
console.log(team['teamPlayers'] == 22); //to check if it is true

//Add properties
team.localShirt = 'Strikes Blue and Red';
console.log(team);

//Eliminate properties
delete team.available;
console.log(team);

//Destructuring -> extract values of an object
const { teamName } = team;
console.log(teamName);

const { teamPlayers, hasWonUCL } = team;
console.log(teamPlayers);
console.log(hasWonUCL);

//Not allow the object to add new properties
Object.freeze(team);
team.titles = 50;
console.log(team);

Object.seal(team); //Allow to changes attributes values