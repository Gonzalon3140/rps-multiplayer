let userScore = 0;
let computerScore = 0;
const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById("computer-score");
const scoreBoardDiv = document.querySelector(".scoreboard");
const resultP = document.querySelector(".result > p");
const rockDiv = document.getElementById('r');
const paperDiv = document.getElementById('p');
const scissorsDiv = document.getElementById('s');

function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function win(userChoice, computerChoice) {
    userScore++;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    resultP.innerHTML = userChoice + "beats" + computerChoice + "You win!";
}

function lose() {
    console.log('lost');
}

function draw() {
    console.log('draw');
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rp":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
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