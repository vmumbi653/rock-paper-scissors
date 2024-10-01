console.log("Hello Everybody");


function getComputerChoice() {
    return Math.floor((Math.random()*3)+1);
}
console.log(getComputerChoice("rock", "paper", "scissors"));