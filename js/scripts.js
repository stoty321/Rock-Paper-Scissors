const arrChoice = ["rock", "paper", "scissors"];

let round = 1;
let playerScore = 0;
let compScore = 0;
let tie = 0;
let compChoice = "";
let playerChoice = "";


function displyWinner(){
    if(playerScore > compScore){
        console.log("YOU ARE THE WINNER!");
    }else{
        console.log("YOU LOSE");
    }
}
function displayScore(){
    console.log("computer: ", compScore, " | player: ", playerScore, " | Tie: ", tie);
}
//check who won
function checkWinner(){
    if(playerChoice === compChoice){
        tie++;
        console.log("It was a tie");
    }
    else if (playerChoice === "rock"){
        if (compChoice === "scissors"){
            playerScore++;
            console.log("player Wins");
        }else{
            compScore++;
            console.log("computer Wins");
        }
    }
    else if(playerChoice === "paper"){
        if (compChoice === "rock"){
            playerScore++;
            console.log("player Wins");
        }else{
            compScore++;
            console.log("computer Wins");
        }
    }
    else{
        if(compChoice === "paper"){
            playerScore++;
            console.log("player Wins");
        }else{
            compScore++;
            console.log("computer Wins");
        }
    }
    
    displayScore();
    round++;
    game();
}
//ask the user to choose an option
function getPlayerChoice(){
    //ask player to choose
    let choice = prompt("choose what you want to play by typing: 'Rock' 'Paper' or 'Scissors' ");
    //convert their choice to lower case
    choice = choice.toLowerCase();

    //check if valid
    if (choice === "rock" || choice === "paper" || choice === "scissors"){
        playerChoice = choice;
    }else{
        console.log("Invalid input. Choose again");
        getPlayerChoice();
    }   
}
//generate random choice
function randomChoice(arr) {
    let index = Math.floor(Math.random() * arr.length);
    let choice = arr[index]
    return choice;
}

//get the computers choice
function getCompChoice(){
    compChoice = randomChoice(arrChoice);
}

// ask user to play again
function playAgain(){
    let playAgain = prompt("do you want to play again (y/n)");

    if(playAgain === "y"){
        //reset values and game
        resetGame();
    }
}

//reset the game values and restart the game.
function resetGame(){
    round = 1;
    playerScore = 0;
    compScore = 0;
    game();
}

function startRound(){

        //computer chooses
        getCompChoice();
        //player chooses
        getPlayerChoice();
        //check who wins
        checkWinner();
        //display score

}
//start of the game
function game(){
    //show the round number
    console.log("Round: " + round);
    //check if each player can still win
    if(playerScore < 3 && compScore < 3){
        startRound();
    }
    
    //display winner
    displyWinner();
    //ask for another game
    playAgain();
}

//start of the program
function start(){
    console.log("Welcom to Rock Paper Scissors");
    console.log("This is a best out of 5");
    game();
}

start();
