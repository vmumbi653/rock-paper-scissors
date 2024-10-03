let choice = ["rock", "paper", "scissors"];
let computerScore=0;
let humanScore=0;

function getComputerChoice() {
    return choice[Math.floor((Math.random()* choice.length .toString()))];
}
console.log(getComputerChoice("rock", "paper", "scissors"));

function getHumanChoice() {
    let answer= prompt("Please enter your choice; rock, paper, scissors: ");
    if (answer .toLowerCase() == "rock") {
        return "rock";
    } else if (answer .toLowerCase== "paper") {
        return "paper";
    } else {
        return "scissors";
    }
}

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
    function playGame() {
        let i=0;

        for(i=0; i<5; i++){
            const humanSelection = getHumanChoice();
            const computerSelection = getComputerChoice();
        
            playRound(humanSelection, computerSelection);
        }
            if(humanScore>computerScore) {
                console.log("You Win! Human beats the computer")
            } else if (humanScore<computerScore) {
                console.log("You Lose! Computer beats Human")
            } else {
                console.log("Its is a tie!!")
            }
        console.log("The final score is: human: " + humanScore + " computer: " + computerScore);
        }

    playGame();
