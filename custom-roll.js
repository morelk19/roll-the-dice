const prompt = require('prompt-sync')({sigint: true});

let diceSides = prompt(`How many sides should the dice have? `);


console.log(`Random ${diceSides}-sided dice roll: ` + Math.ceil(Math.random()*diceSides));
