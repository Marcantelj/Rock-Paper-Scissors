/* PLAN - ROCK PAPER SCISSORS GAME

FUNCTION that returns ROCK, PAPER SCISSORS. 
    randomly return a number 0 to 2 = rock, paper scissors
    SWITCH STATEMENT - 0 for rock log rock, 1 for paper log paper, 2 for scissors log scissors

TEST function with console.log
FUNCTION that return human ROCK, PAPER, SCISSORS for Human input.
    INPUT from Human rock, paper, scissors
    IF ROCK 
        return rock
    ELSE IF paper log paper
        return paper
    ELSE IF scissors log scissors
        return scissors 
    ELSE -> reprompt the input message 

Variable to track human score start at 0
Variable to track computer score start at 0

FUNCTION to play a round on call get peramiters humanchoice and computerchoice for function
    IF choises are equal its TIE
        PRINT TIE
        SHOW results  
    ELSE IF choises for humans and computers is not equal <- all outcomes
        PRINT who Wins
        ADD scores results  

CONST humanselection equal to humanchoice function call
CONST computerselection equal to computerchoice function call

CALL playround with const peramiters (humanchoice and computerchoice) 
*/


// CODE 

let computerChoice = () => {
    let randomChoice = Math.floor(Math.random() * 3);
    switch(randomChoice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

let humanChoice = () => {
    let humanInput = prompt("Select Rock, Paper, or Scissors! \n")
    if (humanInput.toLowerCase() == "rock") {
        return "Rock";
    } 
    else if (humanInput.toLowerCase() == "paper") {
        return "Paper";
    }
    else if (humanInput.toLowerCase() == "scissors") {
        return "Scissors";
    }
    else humanChoice();
}

var humanScore = 0;
var computerScore = 0;

let playRound = (humanSelection, computerSelection) => {
    if (humanSelection.toLowerCase() == computerSelection.toLowerCase()) {
        console.log("It was a TIE!");
        console.log(`The score is: Humans - ${humanScore} | Computer - ${computerScore}`);
    }
    else if (humanSelection.toLowerCase() == "rock" && computerSelection.toLowerCase() == "scissors") {
        console.log("Humans Wins!");
        console.log(`The score is: Humans - ${++humanScore} | Computer - ${computerScore}`);
    }
    else if (humanSelection.toLowerCase() == "paper" && computerSelection.toLowerCase() == "rock") {
        console.log("Humans Wins!");
        console.log(`The score is: Humans - ${++humanScore} | Computer - ${computerScore}`);
    }
    else if (humanSelection.toLowerCase() == "scissors" && computerSelection.toLowerCase() == "paper") {
        console.log("Humans Wins!");
        console.log(`The score is: Humans - ${++humanScore} | Computer - ${computerScore}`);
    } 
    else if (computerSelection.toLowerCase() == "rock" && humanSelection.toLowerCase() == "scissors") {
        console.log("Computer Wins!");
        console.log(`The score is: Humans - ${humanScore} | Computer - ${++computerScore}`);
    }
    else if (computerSelection.toLowerCase() == "paper" && humanSelection.toLowerCase() == "rock") {
        console.log("Computer Wins!");
        console.log(`The score is: Humans - ${humanScore} | Computer - ${++computerScore}`);
    }
    else if (computerSelection.toLowerCase() == "scissors" && humanSelection.toLowerCase() == "paper") {
        console.log("Computer Wins!");
        console.log(`The score is: Humans - ${humanScore} | Computer - ${++computerScore}`);
    }
}

const humanSelection = humanChoice();
const computerSelection = computerChoice();

console.log(humanSelection);
console.log(computerSelection);
playRound(humanSelection,computerSelection);