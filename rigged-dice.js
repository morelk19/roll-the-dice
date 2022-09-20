const prompt = require('prompt-sync')({sigint: true});

let diceLoad = Number(prompt(`Which side should be loaded from a six-sided die? `));

randomNum = Math.ceil(Math.random()*7);
if(randomNum === 7){
    randomNum = diceLoad;
}

console.log(`A ${diceLoad}-loaded 6-sided die roll: ${randomNum}`);
