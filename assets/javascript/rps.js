const userScore = 0;
const computerScore = 0;
const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById("computer-score");
const scoreBoardDiv = document.querySelector(".scoreboard");
const resultDIv = document.querySelector(".result");
const rockDiv = document.getElementById('r');
const paperDiv = document.getElementById('p');
const scissorsDiv = document.getElementById('s');

function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}


function game(userChoice) {
    const computerChoice = getComputerChoice();
    console.log("user choice =>" + userChoice);
    console.log('computer choice =>' + computerChoice);
}



function main() {
    rockDiv.addEventListener('click', function () {
        game('r')
    })

    paperDiv.addEventListener('click', function () {
        game('p')
    })

    scissorsDiv.addEventListener('click', function () {
        game("s")
    })
}
main();