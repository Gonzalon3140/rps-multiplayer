let userScore = 0;
let computerScore = 0;
var userScoreSpan = document.getElementById('user-score');
var computerScoreSpan = document.getElementById("computer-score");
var scoreBoardDiv = document.querySelector(".scoreboard");
var resultDIv = document.querySelector(".result");
var rockDiv = document.getElementById('r');
var paperDiv = document.getElementById('p');
var scissorsDiv = document.getElementById('s');

function getComputerChoice() {
    var choices = ['r', 'p', 's'];
    console.log(Math.random());
}

getComputerChoice();

function game(userChoice) {

}


function main() {
    rockDiv.addEventListener('click', function () {
        game('r');
    })
    paperDiv.addEventListener('click', function () {
        game('p');
    })
    scissorsDiv.addEventListener('click', function () {
        game('s');
    })
}

main();