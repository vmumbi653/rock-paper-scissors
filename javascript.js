console.log("Hello Everybody");


function getComputerChoice() {
    let choice=["rock", "paper", "scissors"];
    return choice[Math.floor((Math.random()* choice.length))];
}
console.log(getComputerChoice("rock", "paper", "scissors"));