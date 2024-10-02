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
//console.log(getHumanChoice("rock", "paper", "scissors"));

function playRound(humanChoice, computerChoice) {
    if (humanChoice==="rock" && computerChoice==="scissors") {
        alert("You win!  Rock beats scissors")
        humanScore = humanScore+1;
    } else if (humanChoice==="paper" && computerChoice==="rock"){
        alert("You win! Paper beats rock")
        humanScore = humanScore+1;
    } else if (humanChoice==="scissors" && computerChoice==="paper") {
        alert("You win! Scissors beats paper")
        humanScore = humanScore+1;
    } else if(computerChoice==="rock" && humanChoice==="scissors") {
        alert("You lose! Rock beat scissors")
        computerScore = computerScore+1;
    } else if(computerChoice==="paper" && humanChoice==="rock") {
        alert("You lose! Paper beats rock")
        computerScore = computerScore+1;
    } else if(computerChoice==="scissors" && humanChoice==="paper") {
        alert("You lose! Scissors beats paper")
        computerScore = computerScore+1;
    } else {
        alert("This is a draw!")
    }


}
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);
    console.log(humanScore);
    console.log(computerScore);
