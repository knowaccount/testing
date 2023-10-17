
/*
function computerPlay() {
    'use strict';
    const choices = ['Rock', 'Paper', 'Scissors'];
    let random = Math.floor(Math.random() * 3);
    return choices[random];
}

function playRound(playerSelection, computerSelection) {
    
    'use strict';
    playerSelection = playerSelection.toLowerCase();
    playerSelection = playerSelection.charAt(0).toUpperCase() + 
            playerSelection.slice(1);

    if ( (playerSelection == 'Rock' && computerSelection == 'Scissors') ||
         (playerSelection == 'Paper' && computerSelection == 'Rock') ||
         (playerSelection == 'Scissors' && computerSelection == 'Paper') ) {

        return `You win! ${playerSelection} beats ${computerSelection}`;

    } else if ( (playerSelection == 'Rock' && computerSelection == 'Paper') ||
                (playerSelection == 'Paper' && computerSelection == 'Scissors') ||
                (playerSelection == 'Scissors' && computerSelection == 'Rock') ) {

        return `You lose! ${computerSelection} beats ${playerSelection}`;

    } else if (playerSelection == computerSelection) {
        return 'Draw!';
    } else {
        throw 'Invalid option. Try again.';
    }

}

function game() {
    'use strict';
    let playerScore = 0;
    let computerScore = 0;
    let message;

    for (let i = 1; i <= 5; i++) {
        let playerSelection = prompt(`Round ${i}: Rock, Paper or Scissors?`);
        let computerSelection = computerPlay();
        let roundResult = playRound(playerSelection, computerSelection);

        if (roundResult.includes('win')) {
            playerScore++;
        } else if (roundResult.includes('lose')) {
            computerScore++;
        }

        console.log(`Round ${i}: \nComputer chose ${computerSelection} \n${roundResult}`);
    }

    message = (playerScore > computerScore) ? 'You win!' :
              (playerScore < computerScore) ? 'You lose!' :
              'Draw!';

    return `\nEnd result:
            \nYour score: ${playerScore} \nComputer score: ${computerScore}
            \n${message}`;
}

console.log(game());
*/
/*
var userChoice = prompt("Do you choose rock, paper or scissors?");
var computerChoice = Math.random();
if (computerChoice < 0.34) {
	computerChoice = "rock";
} else if(computerChoice <= 0.67) {
	computerChoice = "paper";
} else {
	computerChoice = "scissors";
}
var compare=function(choice1,choice2){
    if(choice1===choice2){
        return "The result is a tie!";
    }
    else if(choice1==="rock"){
        if(choice2==="scissors"){
            return "rock wins"
        }
        else if(choice2==="paper"){
            return "paper wins";
        }
    }
    else if(choice1==="paper"){
        if(choice2==="scissors"){
            return "scissors win"
        }
        else if(choice2==="rock"){
            return "paper wins";
        }
    }
    else if(choice1==="scissors"){
        if(choice2==="paper"){
            return "scissors win"
        }
        else if(choice2==="rock"){
            return "rock wins";
        }
    }
    
}
console.log(compare(userChoice,computerChoice));*/

/*const moves = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  const randomIndex = Math.floor(Math.random() * moves.length);
  return moves[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  console.log(`Player chooses ${playerSelection}`);
  console.log(`Computer chooses ${computerSelection}`);

  if (playerSelection === computerSelection) {
    console.log("It's a tie!");
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "scissors" && computerSelection === "paper") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    console.log(`You win this round! ${playerSelection} beats ${computerSelection}`);
    playerScore++;
  } else {
    console.log(`Computer wins this round! ${computerSelection} beats ${playerSelection}`);
    computerScore++;
  }
}

function playGame(rounds) {
  for (let i = 1; i <= rounds; i++) {
    console.log(`Round ${i}:`);
    const playerSelection = prompt("Choose your move (rock, paper, or scissors):").toLowerCase();

    if (!moves.includes(playerSelection)) {
      console.log("Invalid move. Please choose rock, paper, or scissors.");
      i--; // Decrement the round count to replay the same round.
      continue;
    }

    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);

    console.log(`Score - Player: ${playerScore}, Computer: ${computerScore}`);
  }

  if (playerScore > computerScore) {
    console.log("You win the game!");
  } else if (computerScore > playerScore) {
    console.log("Computer wins the game!");
  } else {
    console.log("It's a tie game!");
  }
}

const rounds = parseInt(prompt("Enter the number of rounds you want to play:"));
if (isNaN(rounds) || rounds <= 0) {
  console.log("Invalid number of rounds. Please enter a positive integer.");
} else {
  playGame(rounds);
}
*/
// Define the game object with properties and methods
const game = {
    roundCount: 5,
    moves: ["rock", "paper", "scissors"],
    scores: {
      player: 0,
      computer: 0,
    },
    round: 1,
  
    // Function to start the game
    start: function () {
      this.displayInstructions();
      this.playRound();
    },
  
    // Function to display game instructions
    displayInstructions: function () {
      console.log("Welcome to Rock-Paper-Scissors!");
      console.log("Instructions:");
      console.log("- Enter 'rock', 'paper', or 'scissors' to make your choice.");
      console.log("- The computer will randomly select its move.");
      console.log("- We'll determine the winner after each round.");
      console.log(`- You'll play ${this.roundCount} rounds. Let's begin!\n`);
    },
  
    // Function to play a single round
    playRound: function () {
      if (this.round > this.roundCount) {
        this.endGame();
        return;
      }
  
      const playerChoice = this.getPlayerChoice();
      const computerChoice = this.getComputerChoice();
      const result = this.determineWinner(playerChoice, computerChoice);
  
      this.displayRoundResult(playerChoice, computerChoice, result);
  
      // Update scores and round count
      if (result === "player") {
        this.scores.player++;
      } else if (result === "computer") {
        this.scores.computer++;
      }
  
      this.round++;
      this.playRound();
    },
  
    // Function to get the player's choice
    getPlayerChoice: function () {
      const input = prompt(
        `Round ${this.round}: Enter 'rock', 'paper', or 'scissors':`
      ).toLowerCase();
  
      if (!this.moves.includes(input)) {
        console.log("Invalid input. Please enter 'rock', 'paper', or 'scissors'.");
        return this.getPlayerChoice();
      }
  
      return input;
    },
  
    // Function to get the computer's choice
    getComputerChoice: function () {
      const randomIndex = Math.floor(Math.random() * this.moves.length);
      return this.moves[randomIndex];
    },
  
    // Function to determine the winner of a round
    determineWinner: function (playerChoice, computerChoice) {
      if (playerChoice === computerChoice) {
        return "tie";
      }
      if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
      ) {
        return "player";
      }
      return "computer";
    },
  
    // Function to display the result of a round
    displayRoundResult: function (playerChoice, computerChoice, result) {
      console.log(`Round ${this.round} results:`);
      console.log(`Player chose: ${playerChoice}`);
      console.log(`Computer chose: ${computerChoice}`);
      if (result === "tie") {
        console.log("It's a tie!");
      } else {
        console.log(`${result.charAt(0).toUpperCase() + result.slice(1)} wins!`);
      }
      console.log(`Player: ${this.scores.player} | Computer: ${this.scores.computer}\n`);
    },
  
    // Function to end the game and display the final result
    endGame: function () {
      console.log("Game over!");
      if (this.scores.player === this.scores.computer) {
        console.log("It's a tie game!");
      } else {
        const winner = this.scores.player > this.scores.computer ? "Player" : "Computer";
        console.log(`${winner} wins the game!`);
      }
    },
  };
  
  // Start the game
  game.start();
  