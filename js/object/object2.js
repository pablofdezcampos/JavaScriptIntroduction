var team = {
    teamName: "Real Madrid",
    teamPlayers: 11,
    hasWonUCL: true,
    available: false
}

var league = {
    leagueName: 'MLS',
    teams: 22,
    country: 'England'
}

const object = {...team, ...league };
console.log(object);