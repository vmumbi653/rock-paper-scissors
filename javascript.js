console.log("Hello Everybody");

let choice = ["rock", "paper", "scissors"];
let computerScore=0;
let humanScore=0;

function getComputerChoice() {
    return choice[Math.floor((Math.random()* choice.length .toString()))];
}
console.log(getComputerChoice("rock", "paper", "scissors"));

function getHumanChoice() {
    let answer= prompt("Please enter your choice: ");
    if (answer == "rock") {
        return "rock";
    } else if (answer== "paper") {
        return "paper";
    } else {
        return "scissors";
    }
}
console.log(getHumanChoice("rock", "paper", "scissors"));

function playRound(humanChoice, computerChoice) {
}

