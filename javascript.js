let choice = ["rock", "paper", "scissors"];
let computerScore=0;
let humanScore=0;
let currentRound = 1;
let totalRounds = 5;

let gameContainer = document.getElementById('gameContainer');
//let resultBoard = document.getElementsByTagName("h2");

let humanPlayer = document.querySelector(".score1");
let computerPlayer = document.querySelector(".score2");

let score1 = document.querySelector('.score1');
let score2 = document.querySelector('.score2');

let player1 = document.getElementById('player1');
let player2 = document.getElementById('player2');

let finalScore1 = document.querySelector('.finalscore1');
let finalScore2 = document.querySelector('.finalScore2');

//select heading of human player//
let hp = document.querySelector('.human');
score1.textContent = humanScore;
hp.appendChild(score1);

//select heading of computer player//
let cpu = document.querySelector('.computer');
score2.textContent = computerScore;
cpu.appendChild(score2);

//select the rounds div
const roundsDisplay = document.getElementById('round');



   const rockBtn = document.getElementById("rockBtn");
   rockBtn.addEventListener('click', function() {
    let humanChoice = "rock";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
   });

   const paperBtn = document.getElementById("paperBtn");
   paperBtn.addEventListener('click', function() {
    let humanChoice = "paper";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
   });

   const scissorsBtn = document.getElementById("scissorsBtn");
   scissorsBtn.addEventListener('click', function() {
    let humanChoice = "scissors";
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);

   });
   // select restart button//
    const restartBtn = document.getElementById('restartBtn');
    restartBtn.addEventListener('click', restartGame);
    
   function getComputerChoice() {
    let choices = Math.floor((Math.random()* 3));
    if (choices===0){
        return "rock";
    }else if(choices===1){
        return "paper";
    } else{
        return "scissors";
    }
   }

   function getHumanChoice(humanChoice) {
    if(humanChoice == "rock"){
        return "rock";
    } else if(humanChoice == "paper"){
        return "paper";

    }else {
        return "scissors";
    }
   }

    let score = document.getElementById('winner'); 
    
    function playRound(humanChoice, computerChoice) {
         humanChoice = getHumanChoice(humanChoice);
         computerChoice = getComputerChoice();
        

        if(currentRound <= totalRounds) {

        if (humanChoice === computerChoice) {
            declaration.textContent = "We have a draw!";
            score1.innerHTML = humanScore;
            score2.innerHTML = computerScore;

        } else if
       
        ((humanChoice==="rock" && computerChoice==="scissors") || 
           (humanChoice==="paper" && computerChoice==="rock") ||
           (humanChoice==="scissors" && computerChoice==="paper")) {

           
            score1.innerHTML = humanScore;
            declaration.textContent = "Human Wins!";
             humanScore++;
            // score2.innerHTML = computerScore;

            console.log(`Humanscore: ${humanScore} Computerscore: ${computerScore}`);
            
           } else {
        //    ((computerChoice==="rock" && humanChoice==="scissors") ||
        //    (computerChoice==="paper" && humanChoice==="rock") ||
        //    (computerChoice==="scissors" && humanChoice==="paper")) 

          score2.innerHTML = computerScore;
          declaration.textContent = "Computer Wins!";
           computerScore++;
           
           console.log(`Humanscore: ${humanScore} Computerscore: ${computerScore}`);
        }
           


           score1.textContent = `Human Player Score: ${humanScore}`;
           score2.textContent = `Computer Player Score: ${computerScore}`;

           score.textContent = `Round: ${currentRound} of ${totalRounds}`;
           currentRound++;
        }

        if(currentRound > totalRounds) {
            concludeGame(); //call function when 5 rounds are completed//
        }

        }
        function concludeGame() {
            let finalResult = '';
    
            if(humanScore > computerScore) {
                finalResult = 'Congratulations! You have won against the computer!';
            } else if (computerScore > humanScore) {
                finalResult = 'Game over! You lose to a machine!';
            } else {
                finalResult = 'The game is a draw! Good game!';
            }
    
            score.textContent = finalResult;

        }

        function restartGame () {
            humanScore = 0;
            computerScore = 0;
            currentRound = 1;

            //reset score and count displays
            score.textContent = `Round 1 of ${totalRounds}`;
            score1.textContent = 'Human Player Score: 0';
            score2.textContent = 'Computer Player Score: 0';
        }

    


  
    
 
  
    


  
 
    
    
   
   

