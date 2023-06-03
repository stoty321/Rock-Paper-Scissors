const arrChoice = ["Rock", "Paper", "Scissors"];

let round = 1;
let playerScore = 0;
let compScore = 0;
let compChoice = "";
let playerChoice = "";
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
        addScore();
        //display score

}
//start of the game
function game(){
    //show the round number
    console.log("Round: " + round);
    //check if the round number is less than 5 and each player can still win
    if(round <=5 || playerScore <= 3 || compScore <= 3){
        startRound();
    }
    
    //display winner

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
